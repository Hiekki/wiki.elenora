import { useParams } from '@remix-run/react';

export default function BotCommands() {
    const { bot } = useParams();
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center'>
            <p className='text-4xl font-bold'>
                Commands for <span className='capitalize'>{bot}</span> coming soon™️.
            </p>
        </div>
    );
}
