import { motion, useAnimationControls } from 'framer-motion';
import { useState, useEffect } from 'react';
import SidebarLinks from './SidebarLinks';

const transition = {
    type: 'spring',
    damping: 15,
    duration: 0.5,
};

const containerVariants = {
    close: {
        width: '5rem',
        transition,
    },
    open: {
        width: '16rem',
        transition,
    },
};

const svgVariants = {
    close: {
        rotate: 360,
    },
    open: {
        rotate: 180,
    },
};

const Sidebar = ({ generalItems, commandItems }: { generalItems: any[]; commandItems: any[] }) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const containerControls = useAnimationControls();
    const svgControls = useAnimationControls();

    useEffect(() => {
        const handleResize = () => {
            const mobileStatus = window.innerWidth < 1200;
            setIsMobile(!mobileStatus);
            setIsOpen(!mobileStatus);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isOpen) {
            containerControls.start('open');
            svgControls.start('open');
        } else {
            containerControls.start('close');
            svgControls.start('close');
        }
    }, [isOpen]);

    const handleOpenClose = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <motion.nav
                variants={containerVariants}
                animate={containerControls}
                initial={!isMobile ? 'open' : 'close'}
                className='bg-neutral-900 flex flex-col z-10 gap-10 p-5 fixed top-0 left-0 h-full shadow shadow-neutral-600'
            >
                <div className='flex flex-row w-full justify-between place-items-center'>
                    <motion.div
                        variants={containerVariants}
                        initial={{ opacity: 0, width: 0 }}
                        animate={isOpen ? { opacity: 1, width: 'auto' } : { opacity: 0, width: 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className='flex items-center gap-3 transition-all duration-100 overflow-hidden'
                    >
                        <img src='/projects/stubby.webp' className='w-10 h-10 rounded-full' />
                        <h1 className='text-2xl font-bold'>Stubby</h1>
                    </motion.div>
                    {!isMobile && (
                        <button className='p-1 rounded-full flex' onClick={() => handleOpenClose()}>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={2}
                                stroke='currentColor'
                                className='w-8 h-8 stroke-white'
                            >
                                <motion.path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    variants={svgVariants}
                                    animate={svgControls}
                                    d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
                                    transition={{
                                        duration: 0.5,
                                        ease: 'easeInOut',
                                    }}
                                />
                            </svg>
                        </button>
                    )}
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='justify-center flex text-lg overflow-hidden tracking-wide'>{isOpen ? 'Information' : 'Info'}</h1>
                    {generalItems.map((item, index) => (
                        <SidebarLinks key={index} name={item.name} link={item.link}>
                            <item.icon className='stroke-inherit stroke-[0.75] min-w-8 w-8 h-8' />
                        </SidebarLinks>
                    ))}
                    <h1 className='justify-center flex mt-5 text-lg text-inherit overflow-hidden tracking-wide'>
                        {isOpen ? 'Commands' : 'Cmd'}
                    </h1>
                    {commandItems.map((item, index) => (
                        <SidebarLinks key={index} name={item.name} link={item.link}>
                            <item.icon className='stroke-inherit stroke-[0.75] min-w-8 w-8 h-8' />
                        </SidebarLinks>
                    ))}
                </div>
            </motion.nav>
        </>
    );
};

export default Sidebar;
