export type TitleProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> & {
  titleRef: React.LegacyRef<HTMLHeadingElement> | undefined;
  value: string;
}
