"use client";
import { useRouter, usePathname } from "next/navigation";

interface Props {
  currentLocale: string;
  label: string; // "EN" o "ES"
}

export default function LocaleSwitcher({ currentLocale, label }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const toggle = () => {
    const next = currentLocale === "es" ? "en" : "es";
    // Guardar preferencia via query param (recogido por middleware)
    const url = new URL(window.location.href);
    url.searchParams.set("locale", next);
    // Redirigir para que el middleware guarde la cookie
    router.push(url.toString());
    router.refresh();
  };

  return (
    <button
      onClick={toggle}
      className="text-xs font-medium tracking-wide text-charcoal-200 hover:text-cream transition-colors border border-white/20 px-3 py-1.5"
      aria-label={`Switch to ${label}`}
    >
      {label}
    </button>
  );
}
