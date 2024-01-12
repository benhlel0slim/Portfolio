import "server-only";
import type { Locale } from "../../../i18n.config";

const dictionaries = {
  en: () =>
    import("@/app/dictionaries/en.json").then((module) => module.default),
  fr: () =>
    import("@/app/dictionaries/fr.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
