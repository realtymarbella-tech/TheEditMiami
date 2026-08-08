import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";

export default getRequestConfig(async () => {
  // Detectar idioma del navegador si no hay preferencia guardada
  const cookieStore = await cookies();
  const savedLocale = cookieStore.get("locale")?.value;

  let locale = savedLocale ?? "es";

  if (!savedLocale) {
    const headersList = await headers();
    const acceptLanguage = headersList.get("accept-language") ?? "";
    if (acceptLanguage.toLowerCase().includes("en")) {
      locale = "en";
    }
  }

  if (!["es", "en"].includes(locale)) locale = "es";

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
