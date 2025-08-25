import { createContext, useContext, useMemo, useState, ReactNode, useEffect } from 'react';

type Theme = 'light' | 'dark';

type UIContextType = {
  theme: Theme;
  toggleTheme: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (v: boolean) => void;
};

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem('theme') as Theme) ||
      (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
      mobileMenuOpen,
      setMobileMenuOpen,
    }),
    [theme, mobileMenuOpen]
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error('useUI must be used within UIProvider');
  return ctx;
}
