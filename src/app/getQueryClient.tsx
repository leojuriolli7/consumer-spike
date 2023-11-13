import { QueryClient } from "@tanstack/react-query";
import { cache } from "react";
import { queryClientConfig } from "./utils";

// cache() is scoped per request, so we don't leak data between requests
const getQueryClient = cache(() => new QueryClient(queryClientConfig));
export default getQueryClient;
