"use client";
import { useState } from "react";

const SB_URL = "https://sqdvkfcghdjxtyuybxpy.supabase.co";
const SB_KEY = "sb_publishable_LIaG8wb4ciGYSVkUAI8UeQ_wj3BVR4j";

interface DossierT {
  overline: string; h2: string; h2_em: string; h2_rest: string; sub: string;
  nombre: string; apellidos: string; email: string; telefono: string;
  proyecto_placeholder: string; opt_cip: string; opt_elle: string;
  opt_domus: string; opt_all: string; cta: string; reply: string;
  thanks: string; wa_msg: string;
}
interface Props { locale: string; t: DossierT; }

export default function Dossier({ locale, t }: Props) {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const d = Object.fromEntries(fd) as Record<string, string>;

    fetch(`${SB_URL}/rest/v1/leads`, {
      method: "POST", keepalive: true,
      headers: { "Content-Type": "application/json", "Content-Profile": "santamaria",
        "apikey": SB_KEY, "Authorization": `Bearer ${SB_KEY}`, "Prefer": "return=minimal" },
      body: JSON.stringify({ nombre: d.nombre, apellidos: d.apellidos, email: d.email, telefono: d.telefono, proyecto: d.proyecto, origen: "home" }),
    }).catch(() => {});

    const msg = encodeURIComponent(
      t.wa_msg.replace("{nombre}", d.nombre).replace("{apellidos}", d.apellidos)
        .replace("{email}", d.email).replace("{telefono}", d.telefono).replace("{proyecto}", d.proyecto)
    );
    window.open(`https://wa.me/34610589716?text=${msg}`, "_blank");
    setSent(true);
  };

  return (
    <section id="contacto" className="py-24 md:py-40 px-6 md:px-16 bg-charcoal-950">
      <div className="max-w-xl mx-auto text-center text-cream">
        <div className="text-[11px] font-medium tracking-[0.3em] uppercase text-rose-lt mb-4">{t.overline}</div>
        <h2 className="font-serif text-3xl md:text-5xl font-light mb-3">
          {t.h2} <em className="italic text-rose-lt">{t.h2_em}</em> {t.h2_rest}
        </h2>
        <p className="text-sm font-light text-charcoal-200 mb-11">{t.sub}</p>
        {sent ? (
          <p className="font-serif italic text-lg py-8">{t.thanks}</p>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-left">
            <input name="nombre" placeholder={t.nombre} required className="bg-transparent border border-charcoal-700 text-cream placeholder:text-charcoal-400 px-4 py-3.5 text-sm font-light focus:outline-none focus:border-rose-lt" />
            <input name="apellidos" placeholder={t.apellidos} required className="bg-transparent border border-charcoal-700 text-cream placeholder:text-charcoal-400 px-4 py-3.5 text-sm font-light focus:outline-none focus:border-rose-lt" />
            <input name="email" type="email" placeholder={t.email} required className="sm:col-span-2 bg-transparent border border-charcoal-700 text-cream placeholder:text-charcoal-400 px-4 py-3.5 text-sm font-light focus:outline-none focus:border-rose-lt" />
            <input name="telefono" type="tel" placeholder={t.telefono} required className="sm:col-span-2 bg-transparent border border-charcoal-700 text-cream placeholder:text-charcoal-400 px-4 py-3.5 text-sm font-light focus:outline-none focus:border-rose-lt" />
            <select name="proyecto" required defaultValue="" className="sm:col-span-2 bg-charcoal-950 border border-charcoal-700 text-charcoal-400 px-4 py-3.5 text-sm font-light focus:outline-none focus:border-rose-lt">
              <option value="" disabled>{t.proyecto_placeholder}</option>
              <option>{t.opt_cip}</option>
              <option>{t.opt_elle}</option>
              <option>{t.opt_domus}</option>
              <option>{t.opt_all}</option>
            </select>
            <button type="submit" className="sm:col-span-2 mt-2 bg-rose-lt text-ocean text-[11.5px] font-medium tracking-wide uppercase py-4 hover:bg-rose-dk transition-colors">{t.cta}</button>
            <div className="sm:col-span-2 text-center text-[10.5px] tracking-wide text-charcoal-500 mt-1">{t.reply} info@santamaria-collection.com</div>
          </form>
        )}
      </div>
    </section>
  );
}
