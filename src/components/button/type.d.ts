export interface IButton {
  type: 'submit' | 'reset' | 'button' | undefined;
  label: string;
  onClick?: function;
  color?: string;
  disabled?: boolean;
}
