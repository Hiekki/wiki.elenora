import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration, useRouteError } from '@remix-run/react';
import './tailwind.css';
import ErrorPage from './components/ErrorPage';

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <head>
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <Meta />
                <Links />
            </head>
            <body>
                {/* Navbar */}
                <div className=''>{children}</div>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return <Outlet />;
}

export function ErrorBoundary() {
    const error = useRouteError();
    return (
        <html>
            <head>
                <title>Oops!</title>
                <Meta />
                <Links />
            </head>
            <body>
                <h1>
                    {isRouteErrorResponse(error) ? (
                        <ErrorPage statusCode={error.status} message={error.statusText} />
                    ) : error instanceof Error ? (
                        error.message
                    ) : (
                        'Unknown Error'
                    )}
                </h1>
                <Scripts />
            </body>
        </html>
    );
}
