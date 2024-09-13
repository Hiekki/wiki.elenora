import { Outlet } from '@remix-run/react';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { IoChatbubblesOutline, IoTicketOutline } from 'react-icons/io5';
import { PiRocketLaunch } from 'react-icons/pi';
import Sidebar from '~/components/Sidebar';

const generalItems = [
    { name: 'Getting Started', icon: PiRocketLaunch, link: '/stubby' },
    { name: 'FAQs', icon: IoChatbubblesOutline, link: '/stubby/faqs' },
];

const commandItems = [
    { name: 'General', icon: AiOutlineAppstoreAdd, link: '/stubby/commands#general' },
    { name: 'Ticket', icon: IoTicketOutline, link: '/stubby/commands#ticket' },
];

const Stubby = () => {
    return (
        <>
            <Sidebar generalItems={generalItems} commandItems={commandItems} />
            <div className='flex ml-20 xl:ml-64 items-center justify-center scroll-smooth'>
                <Outlet />
            </div>
        </>
    );
};

export default Stubby;
