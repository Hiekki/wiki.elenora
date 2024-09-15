import { MetaFunction } from '@remix-run/node';
import { useParams } from '@remix-run/react';
import { BotMetaTags } from '~/types/Meta';
import { MetaData } from '~/utils';

export const meta: MetaFunction = ({ params }) => {
    const botName = params.bot as keyof BotMetaTags;
    return MetaData(botName, 'FAQs');
};

export default function BotFAQs() {
    const { bot } = useParams();

    return (
        <div className='w-full h-screen flex flex-col items-center justify-center'>
            <p className='text-4xl font-bold'>
                FAQs for <span className='capitalize'>{bot}</span> coming soon™️.
            </p>
        </div>
    );
}
