import { createI18n } from 'vue-i18n';
import messages from '@/locales/pt-br';

const i18n = createI18n({
  fallbackLocale: 'pt-br',
  locale: 'pt-br',
  messages,
});

export async function setI18nLanguage(language: string): Promise<void> {
  i18n.global.locale = language;
  // eslint-disable-next-line no-unused-expressions
  document.querySelector('html')?.setAttribute('lang', language);
  const message = await import(`@/locales/${language}.ts`);
  i18n.global.setLocaleMessage(language, message.default[language]);
}
export default i18n;
