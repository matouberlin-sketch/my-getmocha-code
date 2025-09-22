import { ReactNode, useMemo, useState } from "react";
import {
  QueryClient,
  QueryClientProvider as BaseQueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type QueryProviderProps = {
  children: ReactNode;
};

export function QueryProvider({ children }: QueryProviderProps): JSX.Element {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 30,
            gcTime: 1000 * 60 * 5,
            refetchOnWindowFocus: false,
            retry: 1,
          },
          mutations: {
            retry: 0,
          },
        },
      }),
  );

  const devtools = useMemo(
    () =>
      typeof window !== "undefined" && process.env.NODE_ENV !== "production" ? (
        <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
      ) : null,
    [],
  );

  return (
    <BaseQueryClientProvider client={queryClient}>
      {children}
      {devtools}
    </BaseQueryClientProvider>
  );
}
