export const queryFunction = async ({ wait }: { wait: number }) => {
  console.log("fetching", wait);

  await new Promise((resolve) => setTimeout(resolve, wait));

  const res = `waited ${wait}ms`;
  return res;
};

const isBrowser = () => {
  return typeof window !== "undefined";
};

export default isBrowser;

export const A_SECOND = 1000;
export const A_MINUTE = A_SECOND * 60;
export const AN_HOUR = A_MINUTE * 60;
export const A_DAY = AN_HOUR * 24;
export const A_WEEK = A_DAY * 7;
export const A_MONTH = A_WEEK * 4;
export const A_YEAR = A_MONTH * 12;
