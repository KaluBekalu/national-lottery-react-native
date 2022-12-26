export const trimText = (text: string, size: number) => {
  if (!text || !size) return "";
  const dots = text.length > size;
  let trimed = text.substring(0, size);
  let ending = dots ? "..." : "";
  return trimed + ending;
};

export default function formatNumber(num) {
  num = parseFloat(num).toFixed(0);
  return String(num.toString()).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
