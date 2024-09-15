import type { MetaFunction } from '@remix-run/node';
import { HoverEffect } from '~/components/ui/card-hover-effect';
import { WavyBackground } from '~/components/ui/wavy-background';
import { MetaData } from '~/utils';
import { Projects } from '~/utils/BotInfo';

export const meta: MetaFunction = () => {
    return MetaData();
};

export default function Index() {
    return (
        <WavyBackground backgroundFill='#262626' colors={['#3cc4fd', '#8f66fe', '#ea00ff', '#8f66fe', '#3cc4fd']}>
            <div className='container mx-auto'>
                <div className='flex flex-col text-center justify-center xl:h-screen'>
                    <h1 className='font-bold text-4xl mt-12 xl:mt-0'>Elenora Group Wiki</h1>
                    <p className='text-xl mt-6 text-white/60'>Please select a project you'd like to see.</p>
                    <div className='text-left'>
                        <HoverEffect items={Projects} />
                    </div>
                </div>
            </div>
        </WavyBackground>
    );
}
