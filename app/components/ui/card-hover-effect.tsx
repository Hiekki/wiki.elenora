import { cn } from '~/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from '@remix-run/react';
import { useState } from 'react';
import { BotInfo } from '~/utils/BotInfo';

export const HoverEffect = ({ items, className }: { items: string[]; className?: string }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

    const handleFocus = (idx: number) => setFocusedIndex(idx);
    const handleBlur = () => setFocusedIndex(null);

    return (
        <div className={cn('grid grid-cols-1 xl:grid-cols-2 py-10', className)}>
            {items.map((item, idx) => (
                <Link
                    to={BotInfo[item].page}
                    key={BotInfo[item].url}
                    tabIndex={idx + 1}
                    onFocus={() => handleFocus(idx)}
                    onBlur={handleBlur}
                    className='relative group block p-2 h-full w-full max-w-[640px] mx-auto focus:outline-none'
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {(hoveredIndex === idx || focusedIndex === idx) && (
                            <motion.span
                                className='absolute inset-0 h-full w-full block rounded-3xl'
                                style={{
                                    background: BotInfo[item].color,
                                    outline: focusedIndex === idx ? `2px solid ${BotInfo[item].color}` : 'none',
                                }}
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
                    <Card className='h-full'>
                        <div className='flex flex-col xl:flex-row justify-between'>
                            <div className='flex flex-col order-2 xl:order-1 text-center xl:text-left'>
                                <CardTitle>{BotInfo[item].name}</CardTitle>
                                <CardDescription>{BotInfo[item].description}</CardDescription>
                            </div>
                            <CardImage
                                image={BotInfo[item].image}
                                description={BotInfo[item].image_description}
                                className='flex items-center justify-center order-1 xl:order-2 w-full h-[128px] xl:w-[128px]'
                            />
                        </div>
                    </Card>
                </Link>
            ))}
        </div>
    );
};

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    return (
        <div className={cn('rounded-2xl h-full w-full p-4 overflow-hidden bg-neutral-900/80 relative z-20', className)}>
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

export const CardFooter = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    return (
        <p className={cn('z-30 max-w-96 mt-4 text-white/40 tracking-wide leading-relaxed text-xs translate-y-4', className)}>{children}</p>
    );
};
