export const isEqual = (x: any, y: any): boolean => {
  return JSON.stringify(x) === JSON.stringify(y);
}