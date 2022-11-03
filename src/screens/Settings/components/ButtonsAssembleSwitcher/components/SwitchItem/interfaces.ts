export interface ChangeButtonProps {
  isSelected: boolean;
}

export interface AssembleSwitcherItemProps {
  item: 'Yes' | 'No';
  currentValue: boolean;
  changeValue: (value: boolean) => void;
}
