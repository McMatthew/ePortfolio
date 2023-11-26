"use client";

import { createContext, PropsWithChildren, useContext, useState } from "react";

interface params {
  location: string;
  setLocation: (x: string) => void;
}
const defaultValues: params = {
  location: "",
  setLocation: () => {},
};

const NavigationContext = createContext<params>(defaultValues);

export const NavigationProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [location, setLocation] = useState("");
  return (
    <NavigationContext.Provider value={{ location, setLocation }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);
