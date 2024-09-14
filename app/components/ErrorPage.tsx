export default function ErrorPage({ statusCode, message }: { statusCode: number; message: string }) {
    return (
        <div className='relative flex items-center justify-center h-screen overflow-hidden'>
            <img
                src='/meerkats.png'
                alt='Elenora Error'
                className='absolute inset-0 w-full h-full object-cover object-[left] xl:object-[center] z-0'
            />

            <div className='bg-neutral-900/80 flex flex-col items-center justify-center z-10 p-4 rounded-2xl mx-8'>
                <div className='relative z-10 flex flex-col items-center justify-center h-full text-center'>
                    <h1 className='font-bold text-4xl mt-12 xl:mt-0 text-white'>Elenora Group Wiki</h1>
                    <p className='flex flex-col text-md mt-6 text-white/60'>
                        We're looking, but we just can't find what you're looking for.
                    </p>
                    <div className='text-2xl mt-6 text-white'>
                        <h1>
                            Error <span className='text-red-600 font-bold'>{statusCode}</span>
                        </h1>
                        <p>{message}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
