interface Props extends React.PropsWithChildren {
  className?: React.HTMLAttributes<HTMLElement>;
}

export const DivAbsoluteFullParent = ({ children, className }: Props) => (
  <div className={`absolute w-full z-0 h-full ${className}`}>
    {children}
  </div>
);
