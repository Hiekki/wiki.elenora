import { BotMetaTags } from '../types/Meta';

export const Projects = ['elenora', 'cora', 'stubby', 'notifyre'];

export const BotInfo: Record<string, BotMetaTags> = {
    cora: {
        name: 'Cora',
        description: 'Cora is a logging bot for Discord. It allows you to log messages, joins, leaves, kicks, bans, and so much more.',
        color: '#3cc4fd',
        image: '/projects/cora.webp',
        image_description: 'Cora logo',
        url: 'https://wiki.elenora.gg/cora',
        year: 2022,
        page: '/cora',
    },
    elenora: {
        name: 'Elenora',
        description:
            'Elenora is a feature rich RuneScape Clan administration discord bot with a wide variety of commands. The creation of Elenora was to provide a reliable, dependable, & helpful tool that would service any sized community.',
        color: '#ea00ff',
        image: '/projects/elenora.webp',
        image_description: 'Elenora logo',
        url: 'https://wiki.elenora.gg/elenora',
        year: 2020,
        page: 'https://elenora.gg/commands',
    },
    notifyre: {
        name: 'NotiFyre',
        description:
            "A simple Discord reminder bot. This bot allows you to use its commands in server the bot isn't in or DMs with friends.",
        color: '#ec5408',
        image: '/projects/notifyre.webp',
        image_description: 'NotiFyre logo',
        url: 'https://wiki.elenora.gg/notifyre',
        year: 2024,
        page: '/notifyre',
    },
    stubby: {
        name: 'Stubby',
        description:
            'A simple Discord ticketing system bot. Allows you to create different categories that allows users to open a ticket based on those categories and have one on one conversations with those individuals.',
        color: '#7c36c1',
        image: '/projects/stubby.webp',
        image_description: 'Stubby logo',
        url: 'https://wiki.elenora.gg/stubby',
        year: 2024,
        page: '/stubby',
    },
};
