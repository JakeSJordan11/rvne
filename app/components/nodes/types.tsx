
export type NodeProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
  children?: React.ReactNode;
  dragRef: React.RefObject<HTMLElement>;
}
