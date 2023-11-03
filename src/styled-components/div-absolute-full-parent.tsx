interface Props extends React.PropsWithChildren {
  className?: React.HTMLAttributes<HTMLElement>;
}

export const DivAbsoluteFullParent = ({ children, className }: Props) => (
  <section className={`absolute w-full z-0 h-full ${className}`}>
    {children}
  </section>
);
