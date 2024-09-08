import type { MetaFunction } from '@remix-run/node';
import { desc } from 'framer-motion/client';
import { HoverEffect } from '~/components/ui/card-hover-effect';
import { WavyBackground } from '~/components/ui/wavy-background';

export const meta: MetaFunction = () => {
    return [{ title: 'Wiki | Elenora Group' }, { name: 'description', content: 'A wiki for all things Elenora Group.' }];
};

const projects = [
    {
        title: 'Elenora',
        description:
            'Elenora is a feature rich RuneScape Clan administration discord bot with a wide variety of commands. The creation of Elenora was to provide a reliable, dependable, & helpful tool that would service any sized community.',
        link: '/elenora',
        image: { url: '/projects/elenora.webp', description: 'elenora logo' },
    },
    {
        title: 'Cora',
        description: 'Cora is a logging bot for Discord. It allows you to log messages, joins, leaves, kicks, bans, and so much more.',
        link: '/cora',
        image: { url: '/projects/cora.webp', description: 'cora logo' },
    },
    {
        title: 'Stubby',
        description:
            'A simple Discord ticketing system bot. Allows you to create different categories that allows users to open a ticket based on those categories and have one on one conversations with those individuals.',
        link: '/stubby',
        image: { url: '/projects/stubby.webp', description: 'stubby logo' },
    },
    {
        title: 'NotiFyre',
        description:
            "A simple Discord reminder bot. This bot allows you to use its commands in server the bot isn't in or DMs with friends.",
        link: '/notifyre',
        image: { url: '/projects/notifyre.webp', description: 'notifyre logo' },
    },
];

export default function Index() {
    return (
        <WavyBackground backgroundFill='#262626' colors={['#3cc4fd', '#8f66fe', '#ea00ff', '#8f66fe', '#3cc4fd']}>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center justify-center h-screen'>
                    <h1 className='font-bold text-4xl'>Elenora Group Wiki</h1>
                    <p className='text-xl mt-6 text-white/60'>Please select a project you'd like to see.</p>
                    <HoverEffect items={projects} />
                </div>
            </div>
        </WavyBackground>
    );
}
