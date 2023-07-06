export interface IMask {
  type: string;
  mask?: funtion;
  label: string;
  name: string;
  isMask?: boolean;
  control?: any;
  setValue?: function;
}
