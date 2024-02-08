import React from "react";

export const VisibilityContext = React.createContext();
export const VisibilityProvider = ({ children }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <VisibilityContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </VisibilityContext.Provider>
  );
};
