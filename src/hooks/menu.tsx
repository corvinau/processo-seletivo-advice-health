import React, { createContext, useState, useContext, useCallback } from 'react';

interface IMenuContext {
  handleOpenCloseMenu(): void;
  openMenu: boolean;
}

const MenuContext = createContext<IMenuContext>({} as IMenuContext);

const MenuProvider: React.FC<IDefautContext> = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenCloseMenu = useCallback((): void => {
    setOpenMenu((prevState) => !prevState);
  }, []);

  return (
    <MenuContext.Provider value={{ handleOpenCloseMenu, openMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

function useMenu(): IMenuContext {
  const context = useContext(MenuContext);

  return context;
}

export { MenuProvider, useMenu };
