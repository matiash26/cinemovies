function creditCardMask(value: string, state: string): string | undefined {
  const lenght = value.split('').length;
  
  if (lenght > 15) return state;
  if (lenght === 1) return `(${value}`;
  if (lenght === 3) return `${value}) `;
  if (lenght === 10) return `${value}-`;
  return value;
}
export default creditCardMask;
