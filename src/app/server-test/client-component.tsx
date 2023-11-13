"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { queryFunction } from "../utils";

export function ClientComponent() {
  const { data } = useSuspenseQuery({
    queryKey: ["server-component-test"],
    queryFn: () => queryFunction({ wait: 600 }),
  });

  return <div>result: {data}</div>;
}
