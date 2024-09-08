import { cn } from '~/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from '@remix-run/react';
import { useState } from 'react';

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        title: string;
        description: string;
        link: string;
        image: {
            url: string;
            description: string;
        };
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className={cn('grid grid-cols-1 xl:grid-cols-2 py-10', className)}>
            {items.map((item, idx) => (
                <Link
                    to={item?.link}
                    key={item?.link}
                    className='relative group block p-2 h-full w-full max-w-[640px] mx-auto'
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className='absolute inset-0 h-full w-full bg-[#E900FE] block rounded-3xl'
                                layoutId='hoverBackground'
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-col'>
                                <CardTitle>{item.title}</CardTitle>
                                <CardDescription>{item.description}</CardDescription>
                            </div>
                            <CardImage image={item.image.url} description={item.image.description} />
                        </div>
                    </Card>
                </Link>
            ))}
        </div>
    );
};

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    return (
        <div className={cn('rounded-2xl h-full w-full p-4 overflow-hidden bg-neutral-900 relative z-20', className)}>
            <div className='relative z-50'>
                <div className='p-4'>{children}</div>
            </div>
        </div>
    );
};

export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    return <h1 className={cn('text-white font-bold tracking-wide mt-4 text-2xl', className)}>{children}</h1>;
};

export const CardImage = ({ className, image, description }: { className?: string; image: string; description: string }) => {
    return <img src={image} alt={description} width={128} height={128} className={cn('rounded-2xl object-contain', className)} />;
};

export const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    return <p className={cn('max-w-96 mt-4 text-white/60 tracking-wide leading-relaxed text-md', className)}>{children}</p>;
};
