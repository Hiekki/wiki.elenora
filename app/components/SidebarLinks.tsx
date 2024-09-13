interface Props {
    children: React.ReactNode;
    name: string;
    link: string;
}

const SidebarLinks = ({ children, name, link }: Props) => {
    return (
        <a
            href={link}
            className='flex p-1 rounded cursor-pointer stroke-[0.75] stroke-white text-white place-items-center gap-3 hover:bg-stubby transition-colors duration-100'
        >
            {children}
            <p className='text-inherit overflow-hidden whitespace-nowrap tracking-wide'>{name}</p>
        </a>
    );
};

export default SidebarLinks;
