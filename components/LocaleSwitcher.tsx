"use client";

interface Props {
  currentLocale: string;
  label: string;
}

export default function LocaleSwitcher({ currentLocale, label }: Props) {
  const toggle = () => {
    const pathname = window.location.pathname;
    if (currentLocale === "es") {
      window.location.href = `/en${pathname === "/" ? "" : pathname}`;
    } else {
      const newPath = pathname.replace(/^\/en/, "") || "/";
      window.location.href = newPath;
    }
  };

  return (
    <button
      onClick={toggle}
      className="text-xs font-medium tracking-wide text-charcoal-200 hover:text-cream transition-colors border border-white/20 px-3 py-1.5"
    >
      {label}
    </button>
  );
}
