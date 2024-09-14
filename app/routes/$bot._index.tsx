import { MetaFunction } from '@remix-run/node';
import { useParams } from '@remix-run/react';
import { BotMetaTagsType } from '~/types/Meta';
import { BotMetaTags } from '~/utils/BotMetaTags';

export const meta: MetaFunction = ({ params }) => {
    const botName = params.bot as keyof BotMetaTagsType;
    const data = BotMetaTags[botName];

    const title = `${data.name} Getting Started | Elenora Group`;

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

export default function BotProject() {
    const { bot } = useParams();
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center'>
            <p className='text-4xl font-bold'>
                Getting Started for <span className='capitalize'>{bot}</span> coming soon™️.
            </p>
        </div>
    );
}
