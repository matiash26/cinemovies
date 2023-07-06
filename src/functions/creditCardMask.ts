function creditCardMask(value: string, state: string): string | undefined {
  const space = [4, 9, 14];
  const lenght = value.split('').length;
  
  if (lenght > 19) return state.trim();

  if (space.includes(lenght)) return (value += ' ');


  return value;
}
export default creditCardMask;
