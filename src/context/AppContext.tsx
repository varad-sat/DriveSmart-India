import React, { createContext, useContext, useState, useEffect } from 'react';

interface AppContextType {
  favourites: string[];
  toggleFavourite: (slug: string) => void;
  isFavourite: (slug: string) => boolean;
  compareList: string[];
  addToCompare: (slug: string) => boolean;
  removeFromCompare: (slug: string) => void;
  clearCompare: () => void;
  isInCompare: (slug: string) => boolean;
  isGarageOpen: boolean;
  setIsGarageOpen: (open: boolean) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Favourites in localStorage
  const [favourites, setFavourites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('drivesmart_favourites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Compare list in localStorage (max 3)
  const [compareList, setCompareList] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('drivesmart_compare');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Theme in localStorage
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const saved = localStorage.getItem('drivesmart_theme');
      return saved === 'dark' ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  const [isGarageOpen, setIsGarageOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('drivesmart_favourites', JSON.stringify(favourites));
    } catch (e) {
      console.error(e);
    }
  }, [favourites]);

  useEffect(() => {
    try {
      localStorage.setItem('drivesmart_compare', JSON.stringify(compareList));
    } catch (e) {
      console.error(e);
    }
  }, [compareList]);

  useEffect(() => {
    try {
      localStorage.setItem('drivesmart_theme', theme);
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {
      console.error(e);
    }
  }, [theme]);

  const toggleFavourite = (slug: string) => {
    setFavourites((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const isFavourite = (slug: string) => favourites.includes(slug);

  const addToCompare = (slug: string): boolean => {
    if (compareList.includes(slug)) {
      setCompareList((prev) => prev.filter((s) => s !== slug));
      return false;
    }
    if (compareList.length >= 3) {
      alert('You can compare up to 3 cars at once. Please remove a car first.');
      return false;
    }
    setCompareList((prev) => [...prev, slug]);
    return true;
  };

  const removeFromCompare = (slug: string) => {
    setCompareList((prev) => prev.filter((s) => s !== slug));
  };

  const clearCompare = () => {
    setCompareList([]);
  };

  const isInCompare = (slug: string) => compareList.includes(slug);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <AppContext.Provider
      value={{
        favourites,
        toggleFavourite,
        isFavourite,
        compareList,
        addToCompare,
        removeFromCompare,
        clearCompare,
        isInCompare,
        isGarageOpen,
        setIsGarageOpen,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
