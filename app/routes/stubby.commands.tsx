import { useEffect } from 'react';
import { useLocation } from '@remix-run/react';

const StubbyFAQs = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);

    return (
        <>
            <div className='flex flex-col'>
                <section id='general' className='mb-20'>
                    <h1 className='text-7xl font-bold'>General Commands</h1>
                    <div>
                        <p className='text-2xl mt-10'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis laborum quod magnam voluptas.
                            Dolorum architecto magni, corrupti fugiat ullam neque molestias enim aliquam. Fugit laboriosam praesentium
                            aspernatur quam odit.
                        </p>
                        <p className='text-2xl mt-4'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis laborum quod magnam voluptas.
                            Dolorum architecto magni, corrupti fugiat ullam neque molestias enim aliquam. Fugit laboriosam praesentium
                            aspernatur quam odit.
                        </p>
                        <p className='text-2xl mt-4'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis laborum quod magnam voluptas.
                            Dolorum architecto magni, corrupti fugiat ullam neque molestias enim aliquam. Fugit laboriosam praesentium
                            aspernatur quam odit.
                        </p>
                        <p className='text-2xl mt-4'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis laborum quod magnam voluptas.
                            Dolorum architecto magni, corrupti fugiat ullam neque molestias enim aliquam. Fugit laboriosam praesentium
                            aspernatur quam odit.
                        </p>
                        <p className='text-2xl mt-4'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis laborum quod magnam voluptas.
                            Dolorum architecto magni, corrupti fugiat ullam neque molestias enim aliquam. Fugit laboriosam praesentium
                            aspernatur quam odit.
                        </p>
                        <p className='text-2xl mt-4'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis laborum quod magnam voluptas.
                            Dolorum architecto magni, corrupti fugiat ullam neque molestias enim aliquam. Fugit laboriosam praesentium
                            aspernatur quam odit.
                        </p>
                        <p className='text-2xl mt-4'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis laborum quod magnam voluptas.
                            Dolorum architecto magni, corrupti fugiat ullam neque molestias enim aliquam. Fugit laboriosam praesentium
                            aspernatur quam odit.
                        </p>
                        <p className='text-2xl mt-4'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis laborum quod magnam voluptas.
                            Dolorum architecto magni, corrupti fugiat ullam neque molestias enim aliquam. Fugit laboriosam praesentium
                            aspernatur quam odit.
                        </p>
                        <p className='text-2xl mt-4'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis laborum quod magnam voluptas.
                            Dolorum architecto magni, corrupti fugiat ullam neque molestias enim aliquam. Fugit laboriosam praesentium
                            aspernatur quam odit.
                        </p>
                    </div>
                </section>
                <section id='ticket'>
                    <h1 className='text-7xl font-bold'>Ticket Commands</h1>
                    <div>
                        <p className='text-2xl mt-10'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis laborum quod magnam voluptas.
                            Dolorum architecto magni, corrupti fugiat ullam neque molestias enim aliquam. Fugit laboriosam praesentium
                            aspernatur quam odit.
                        </p>
                        <p className='text-2xl mt-4'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis laborum quod magnam voluptas.
                            Dolorum architecto magni, corrupti fugiat ullam neque molestias enim aliquam. Fugit laboriosam praesentium
                            aspernatur quam odit.
                        </p>
                        <p className='text-2xl mt-4'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis laborum quod magnam voluptas.
                            Dolorum architecto magni, corrupti fugiat ullam neque molestias enim aliquam. Fugit laboriosam praesentium
                            aspernatur quam odit.
                        </p>
                        <p className='text-2xl mt-4'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis laborum quod magnam voluptas.
                            Dolorum architecto magni, corrupti fugiat ullam neque molestias enim aliquam. Fugit laboriosam praesentium
                            aspernatur quam odit.
                        </p>
                        <p className='text-2xl mt-4'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis laborum quod magnam voluptas.
                            Dolorum architecto magni, corrupti fugiat ullam neque molestias enim aliquam. Fugit laboriosam praesentium
                            aspernatur quam odit.
                        </p>
                        <p className='text-2xl mt-4'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis laborum quod magnam voluptas.
                            Dolorum architecto magni, corrupti fugiat ullam neque molestias enim aliquam. Fugit laboriosam praesentium
                            aspernatur quam odit.
                        </p>
                        <p className='text-2xl mt-4'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis laborum quod magnam voluptas.
                            Dolorum architecto magni, corrupti fugiat ullam neque molestias enim aliquam. Fugit laboriosam praesentium
                            aspernatur quam odit.
                        </p>
                        <p className='text-2xl mt-4'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis laborum quod magnam voluptas.
                            Dolorum architecto magni, corrupti fugiat ullam neque molestias enim aliquam. Fugit laboriosam praesentium
                            aspernatur quam odit.
                        </p>
                        <p className='text-2xl mt-4'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis laborum quod magnam voluptas.
                            Dolorum architecto magni, corrupti fugiat ullam neque molestias enim aliquam. Fugit laboriosam praesentium
                            aspernatur quam odit.
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
};

export default StubbyFAQs;
