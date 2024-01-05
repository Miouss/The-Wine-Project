interface Props extends React.PropsWithChildren {
  className?: string;
}

export const P = ({ className, children }: Props) => (
  <p className={`${className} font-light lg:text-xl`}>{children}</p>
);
