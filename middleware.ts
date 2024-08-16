import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const basicAuth = req.headers.get('authorization');

    if (basicAuth) {
        const authValue = basicAuth.split(' ')[1];
        const [username, password] = Buffer.from(authValue, 'base64').toString().split(':');

        if (password === process.env.BASIC_AUTH_PASSWORD) {
            return NextResponse.next();
        }
    }

    return new NextResponse('Authentication required', {
        status: 401,
        headers: {
            'WWW-Authenticate': 'Basic realm="Secure Area"',
        },
    });
}

export const config = {
    matcher: '/hidden/:path*', // Protect all URLs under /hidden/
};
