import type { BotMetaTags } from '../types/Meta';
import { BotInfo } from './BotInfo';

export const MetaData = (bot?: string, page: string = 'Wiki') => {
    let data: BotMetaTags | null = null;
    if (bot) data = BotInfo[bot];

    const title = bot ? `${data?.name} ${page} | Elenora Group` : `${page} | Elenora Group`;

    return [
        { title },
        { name: 'description', content: data?.description ?? 'A wiki for all things Elenora Group.' },
        {
            name: 'keywords',
            content: 'Elenora Group, Elenora, Wiki, RuneScape, Clan, Discord, Bot, Elenora Wiki, Stubby, Cora, NotiFyre',
        },
        { name: 'type', content: 'link' },
        { name: 'theme-color', content: data?.color ?? '#ea00ff' },
        { name: 'apple-mobile-web-app-title', content: title },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: data?.description ?? 'A wiki for all things Elenora Group.' },
        { name: 'twitter:image', content: data?.image ?? '/projects/elenora.webp' },
        { name: 'twitter:url', content: data?.url ?? 'https://wiki.elenora.gg' },
        { name: 'twitter:image:alt', content: title },
        { property: 'og:title', content: title },
        { property: 'og:description', content: data?.description ?? 'A wiki for all things Elenora Group.' },
        { property: 'og:image', content: data?.image ?? '/projects/elenora.webp' },
        { property: 'og:url', content: data?.url ?? 'https://wiki.elenora.gg' },
    ];
};
