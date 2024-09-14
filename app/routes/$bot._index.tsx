import { MetaFunction } from '@remix-run/node';
import { useParams } from '@remix-run/react';
import { BotMetaTagsType } from '~/types/Meta';
import { BotMetaTags } from '~/utils/BotMetaTags';

export const meta: MetaFunction = ({ params }) => {
    const botName = params.bot as keyof BotMetaTagsType;
    const data = BotMetaTags[botName];

    return [{ title: `${data.name} Getting Started | Elenora Group` }];
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
