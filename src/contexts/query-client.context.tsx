import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import React, { createContext, ReactNode, useContext, useMemo } from 'react';

type QueryClientContextData = {
  queryClient: QueryClient;
};

type QueryClientProviderData = {
  children: ReactNode;
};

const QueryClientContext = createContext({} as QueryClientContextData);

export function QueryClientProvider({ children }: QueryClientProviderData) {
  const queryClient = useMemo(() => new QueryClient(), []);

  const persister = createAsyncStoragePersister({
    storage: AsyncStorage,
    throttleTime: 3000,
  });

  return (
    <QueryClientContext.Provider value={{ queryClient }}>
      <PersistQueryClientProvider
        client={queryClient}
        onSuccess={() => queryClient.resumePausedMutations()}
        persistOptions={{ persister }}
      >
        {children}
      </PersistQueryClientProvider>
    </QueryClientContext.Provider>
  );
}

export const useQueryClient = () => {
  const context = useContext(QueryClientContext);

  if (!context)
    throw new Error('useQueryClient must be within QueryClientContext');

  return context;
};
