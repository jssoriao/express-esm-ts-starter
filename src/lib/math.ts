export const sum = (...nums: number[]) =>
  nums.reduce((partialSum, a) => partialSum + a, 0);
