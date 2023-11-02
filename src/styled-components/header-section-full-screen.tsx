export const HeaderSectionFullScreen = ({
  children,
}: React.PropsWithChildren) => (
  <section className="relative flex flex-col gap-16 h-[calc(100vh-70px)]">
    {children}
  </section>
);
