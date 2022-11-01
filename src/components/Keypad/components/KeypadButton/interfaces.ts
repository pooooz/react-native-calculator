export interface KeypadButtonProps {
  handlePress: () => void;
  children: string;
}

export interface ButtonProps {
  isEqual: boolean;
}

export interface ButtonValueProps {
  children: string;
}
