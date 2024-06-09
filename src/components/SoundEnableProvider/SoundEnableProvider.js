"use client";
import React from "react";

const SoundEnableContext = React.createContext();

function SoundEnableProvider({ children }) {
  const [soundEnabled, setSoundEnabled] = React.useState(true);

  return (
    <SoundEnableContext.Provider value={{ soundEnabled, setSoundEnabled }}>
      {children}
    </SoundEnableContext.Provider>
  );
}

export function useSoundEnable() {
  const data = React.useContext(SoundEnableContext);
  if (!data) {
    throw new Error("useSoundEnable must be used within a SoundEnableProvider");
  }
  return data;
}

export default SoundEnableProvider;
