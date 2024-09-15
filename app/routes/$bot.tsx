import { Outlet } from '@remix-run/react';
import { LoaderFunctionArgs, MetaFunction, json } from '@remix-run/node';
import { BotMetaTags } from '~/types/Meta';
import { MetaData } from '~/utils';

export const meta: MetaFunction = ({ params }) => {
    const botName = params.bot as keyof BotMetaTags;
    return MetaData(botName);
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
