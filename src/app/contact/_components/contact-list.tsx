interface Props {
    children: React.ReactNode;
}

export function ContactList({ children }: Props) {
    return (
        <ul className="flex-1 flex flex-col gap-6 items-center mt-[15vh]">
            {children}
        </ul>
    );
}