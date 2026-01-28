import { createContext, useContext, ReactNode, useMemo } from 'react';
import { DataGSMConfig, DataGSMContextType } from '../types/types';

const DataGSMContext = createContext<DataGSMContextType | undefined>(undefined);

interface DataGSMProviderProps {
  config: DataGSMConfig;
  children: ReactNode;
}

export const DataGSMProvider = ({ config, children }: DataGSMProviderProps) => {
  const value = useMemo(() => ({ config }), [config]);

  return (
    <DataGSMContext.Provider value={value}>{children}</DataGSMContext.Provider>
  );
};

export const useDataGSMConfig = () => {
  const context = useContext(DataGSMContext);

  if (!context) {
    throw new Error(
      'useDataGSMConfig는 DataGSMProvider 내에서 사용해야 합니다.',
    );
  }

  return context.config;
};
