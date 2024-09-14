import { Outlet } from '@remix-run/react';
import { LoaderFunctionArgs, MetaFunction, json } from '@remix-run/node';
import { BotMetaTagsType } from '~/types/Meta';
import { BotMetaTags } from '~/utils/BotMetaTags';

export const meta: MetaFunction = ({ params }) => {
    const botName = params.bot as keyof BotMetaTagsType;
    const data = BotMetaTags[botName];

    const title = `${data.name} Wiki | Elenora Group`;

    return [
        { title: title },
        { name: 'description', content: data.description },
        { name: 'type', content: 'link' },
        { name: 'theme-color', content: data.color },
        { name: 'apple-mobile-web-app-title', content: title },

        // Open Graph meta tags
        { property: 'og:title', content: title },
        { property: 'og:description', content: data.description },
        { property: 'og:image', content: data.image },
        { property: 'og:url', content: data.url },

        // Twitter meta tags
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:description', content: data.description },
        { name: 'twitter:image', content: data.image },
        { name: 'twitter:url', content: data.url },
        { name: 'twitter:image:alt', content: title },
    ];
};

export async function loader({ params }: LoaderFunctionArgs) {
    const validBots = ['cora', 'elenora', 'notifyre', 'stubby'];
    const { bot } = params;
    if (!validBots.includes(bot!)) {
        throw new Response(null, { status: 404, statusText: 'That is not a supported project by Elenora Group.' });
    }
    return json({ bot });
}

const Bot = () => {
    return (
        <>
            <div className='ml-64flex items-center justify-center scroll-smooth'>
                <Outlet />
            </div>
        </>
    );
};

export default Bot;
