export type ContainerProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
  children: React.ReactNode;
  containerRef: React.LegacyRef<HTMLElement> | undefined;
}


