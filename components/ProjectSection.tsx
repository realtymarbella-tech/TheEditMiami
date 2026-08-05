"use client";
import { useEffect, useRef } from "react";
// Three.js se importa dinámicamente al entrar en viewport
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

type Stat = [string, string];

interface Props {
  id: string;
  num: string;
  title: React.ReactNode;
  tag: string;
  body: string;
  quote?: string;
  stats: Stat[];
  linkLabel: string;
  linkHref: string;
  linkColor: string; // tailwind text-color class
  accentBorder: string; // tailwind border-color class for blockquote
  img: string;
  focus: [number, number];
  glow: [number, number, number]; // rgb 0-1
  base: [number, number, number]; // rgb 0-1
  count: number;
  countLabel: string;
  flip?: boolean;
  bgClass: string; // fondo de la sección (tailwind)
}

const VERT = `varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position,1.); }`;
const FRAG = `
varying vec2 vUv;
uniform sampler2D uTex; uniform vec2 uPlane, uTexSize, uFocus;
uniform float uReveal; uniform vec3 uGlow, uBase;
vec2 cover(vec2 uv){
  float pr=uPlane.x/uPlane.y, tr=uTexSize.x/uTexSize.y;
  vec2 s = pr>tr ? vec2(1.,tr/pr) : vec2(pr/tr,1.);
  return (uv-uFocus)*s+uFocus;
}
void main(){
  vec2 c = cover(vUv);
  vec3 img = texture2D(uTex, c).rgb;
  float edge = smoothstep(uReveal, uReveal-0.055, vUv.y);
  float front = smoothstep(0.03, 0.0, abs(vUv.y-uReveal)) * step(0.001,uReveal) * step(uReveal,0.999);
  vec3 col = mix(uBase, img, edge);
  col += uGlow * front * 0.85;
  gl_FragColor = vec4(col, 1.);
}`;

export default function ProjectSection(p: Props) {
  const frameRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    (async () => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const frame = frameRef.current;
    if (!frame) return;

    if (reduced) {
      if (counterRef.current) counterRef.current.textContent = p.count.toLocaleString("es-ES");
      return;
    }

    // Importar Three.js solo cuando el frame entra en viewport
    const THREE = await import("three");
    const canvas = document.createElement("canvas");
    canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%";
    let renderer: import("three").WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ canvas, antialias: true }); }
    catch { return; }
    frame.prepend(canvas);

    const scene = new THREE.Scene();
    const cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const uniforms = {
      uTex: { value: null as import("three").Texture | null },
      uPlane: { value: new THREE.Vector2(1, 1) },
      uTexSize: { value: new THREE.Vector2(1, 1) },
      uFocus: { value: new THREE.Vector2(...p.focus) },
      uReveal: { value: 0 },
      uGlow: { value: new THREE.Vector3(...p.glow) },
      uBase: { value: new THREE.Vector3(...p.base) },
    };
    new THREE.TextureLoader().load(p.img, (t) => {
      t.minFilter = THREE.LinearFilter;
      uniforms.uTex.value = t;
      uniforms.uTexSize.value.set(t.image.width, t.image.height);
    });
    scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({ uniforms, vertexShader: VERT, fragmentShader: FRAG })));

    const resize = () => {
      renderer.setSize(frame.clientWidth, frame.clientHeight, false);
      renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
      uniforms.uPlane.value.set(frame.clientWidth, frame.clientHeight);
    };
    resize();
    addEventListener("resize", resize);

    let raf: number;
    const loop = () => { renderer.render(scene, cam); raf = requestAnimationFrame(loop); };
    loop();

    const st = { p: 0 };
    const trigger = ScrollTrigger.create({
      trigger: frame, start: "top 88%", end: "top 24%", scrub: 0.6,
      onUpdate: (self) => {
        st.p = self.progress;
        uniforms.uReveal.value = st.p;
        if (counterRef.current) counterRef.current.textContent = Math.round(st.p * p.count).toLocaleString("es-ES");
      },
    });

    return () => { cancelAnimationFrame(raf); trigger.kill(); removeEventListener("resize", resize); renderer.dispose(); };
    })();
  }, [p.img, p.focus, p.glow, p.base, p.count]);

  useEffect(() => {
    const el = frameRef.current;
    if (!el || matchMedia("(pointer: coarse)").matches) return;
    const onEnter = () => { document.body.classList.add("spot-on"); el.classList.add("spot-active"); };
    const onLeave = () => { document.body.classList.remove("spot-on"); el.classList.remove("spot-active"); };
    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerleave", onLeave);
    return () => { el.removeEventListener("pointerenter", onEnter); el.removeEventListener("pointerleave", onLeave); };
  }, []);

  return (
    <section id={p.id} className={`py-24 md:py-40 px-6 md:px-16 ${p.bgClass}`}>
      <div className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-11 md:gap-24 items-center ${p.flip ? "md:[&>*:first-child]:order-2" : ""}`}>
        <div className="relative">
          <div ref={frameRef} className="spot-target relative aspect-[3/4] max-h-[680px] overflow-hidden">
            <div className="absolute top-5 right-5 z-[3] bg-charcoal-950/82 text-cream px-4 py-3 backdrop-blur-sm">
              <span ref={counterRef} className="font-serif text-3xl font-light leading-none">0</span>
              <small className="block font-sans text-[9.5px] tracking-widest uppercase text-charcoal-200 mt-1">{p.countLabel}</small>
            </div>
          </div>
        </div>
        <div>
          <div className={`text-[10.5px] font-medium tracking-[0.26em] uppercase mb-3.5 ${p.linkColor}`}>{p.num}</div>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight text-charcoal-950 mb-2.5">{p.title}</h2>
          <div className="font-serif italic text-lg font-light text-charcoal-500 mb-5">{p.tag}</div>
          <p className="text-[15.5px] font-light leading-loose text-charcoal-500 mb-6 max-w-lg">{p.body}</p>
          {p.quote && (
            <blockquote className={`font-serif italic text-xl font-light text-charcoal-700 border-l ${p.accentBorder} pl-5 mb-7 leading-snug`}>
              {p.quote}
            </blockquote>
          )}
          <div className="text-xs tracking-wide uppercase text-charcoal-400 flex flex-wrap gap-2 mb-7">
            {p.stats.map(([v, l], i) => (
              <span key={l}>{i > 0 && <span className="mx-3">·</span>}{v} {l}</span>
            ))}
          </div>
          <a href={p.linkHref} className={`text-[11.5px] font-medium tracking-wide uppercase pb-1.5 border-b border-current inline-block hover:opacity-55 transition-opacity ${p.linkColor}`}>{p.linkLabel}</a>
        </div>
      </div>
    </section>
  );
}
