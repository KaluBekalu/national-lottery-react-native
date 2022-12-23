export const trimText = (text: string, size: number) => {
  if (!text || !size) return "";
  const dots = text.length > size;
  let trimed = text.substring(0, size);
  let ending = dots ? "..." : "";
  return trimed + ending;
};
