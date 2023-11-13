"use client";

import { useQuery } from "@tanstack/react-query";
import { queryFunction } from "../utils";
import { useEffect } from "react";

export default function MyPage() {
  const { data } = useQuery({
    queryKey: ["use-query-test"],
    queryFn: () => queryFunction({ wait: 2000 }),
  });

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  return <div>result: {data}</div>;
}
