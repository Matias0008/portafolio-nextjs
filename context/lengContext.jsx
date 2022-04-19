import { createContext, useState, useEffect } from "react";

import lang from "json/lang/lang.json";

export const LengContext = createContext();

export const LengProvider = ({ children }) => {
  const [leng, setLeng] = useState("es");

  useEffect(() => {
    localStorage.getItem("leng") && setLeng(localStorage.getItem("leng"));
  }, []);

  useEffect(() => {
    localStorage.setItem("leng", leng);
  }, [leng]);

  const handleLeng = (parameter) => {
    if (leng === parameter) return;
    setLeng(parameter);
  };

  const lenguaje = lang[leng];

  return (
    <LengContext.Provider value={{ handleLeng, lenguaje, leng }}>
      {children}
    </LengContext.Provider>
  );
};
