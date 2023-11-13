"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  PersistQueryClientProvider,
  removeOldestQuery,
} from "@tanstack/react-query-persist-client";
import React from "react";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import { A_WEEK } from "./utils";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

const config = {
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: A_WEEK,
      refetchOnWindowFocus: false,
    },
  },
};

export function Providers(props: { children: React.ReactNode }) {
  const [queryClient] = React.useState(() => new QueryClient(config));

  const createPersister = () => {
    const retry = removeOldestQuery;

    return createSyncStoragePersister({
      storage: typeof window === "undefined" ? undefined : window.localStorage,
      retry,
    });
  };

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister: createPersister() }}
    >
      {/* <QueryClientProvider client={queryClient}> */}
      <ReactQueryStreamedHydration>
        {props.children}
      </ReactQueryStreamedHydration>

      <ReactQueryDevtools initialIsOpen={false} />
      {/* </QueryClientProvider> */}
    </PersistQueryClientProvider>
  );
}
