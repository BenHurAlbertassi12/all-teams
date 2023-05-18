import React, { createContext, useState, ReactNode } from 'react';

type ApiContextType = {
  apiKey: string;
  setApiKey: React.Dispatch<React.SetStateAction<string>>;
};

type ApiProviderProps = {
  children: ReactNode;
};

export const ApiContext = createContext<ApiContextType>({
  apiKey: '',
  setApiKey: () => {},
});

export const ApiProvider: React.FC<ApiProviderProps> = ({ children }) => {
  const [apiKey, setApiKey] = useState('');

  return (
    <ApiContext.Provider value={{ apiKey, setApiKey }}>
      {children}
    </ApiContext.Provider>
  );
};
