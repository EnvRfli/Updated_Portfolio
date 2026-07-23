import { create } from 'zustand';

export type Language = 'en' | 'id';

interface LanguageState {
  lang: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  lang: 'en',
  toggleLanguage: () => set((state) => ({ lang: state.lang === 'en' ? 'id' : 'en' })),
  setLanguage: (lang) => set({ lang }),
}));
