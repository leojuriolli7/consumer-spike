import { Suspense } from "react";
import { ClientComponent } from "./client-component";
import { queryFunction } from "../utils";
import getQueryClient from "../getQueryClient";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

export default async function MyPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["server-component-test"],
    queryFn: () => queryFunction({ wait: 600 }),
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<div>waiting server component....</div>}>
          <ClientComponent />
        </Suspense>
      </HydrationBoundary>
    </>
  );
}
