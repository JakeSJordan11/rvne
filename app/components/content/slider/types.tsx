
export type SliderProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  // onChange: (value: string) => void;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
}
