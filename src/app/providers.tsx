"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import { queryClientConfig } from "./utils";

export function Providers(props: { children: React.ReactNode }) {
  const [queryClient] = React.useState(
    () => new QueryClient(queryClientConfig)
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>
        {props.children}
      </ReactQueryStreamedHydration>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
