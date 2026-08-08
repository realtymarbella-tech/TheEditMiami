"use client";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  currentLocale: string;
  label: string;
}

export default function LocaleSwitcher({ currentLocale, label }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const toggle = () => {
    if (currentLocale === "es") {
      // ES → EN: añadir /en al principio
      router.push(`/en${pathname === "/" ? "" : pathname}`);
    } else {
      // EN → ES: quitar /en del principio
      const newPath = pathname.replace(/^\/en/, "") || "/";
      router.push(newPath);
    }
  };

  return (
    <button
      onClick={toggle}
      className="text-xs font-medium tracking-wide text-charcoal-200 hover:text-cream transition-colors border border-white/20 px-3 py-1.5"
      aria-label={`Switch language to ${label}`}
    >
      {label}
    </button>
  );
}
