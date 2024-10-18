import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const path = request.nextUrl.pathname

    const isPublicPath = path === '/auth' || path === '/demo' || path === '/verify-email'

    const token = request.cookies.get('token')?.value || ''

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/', request.url))
    }
    else if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/demo', request.url))
    }
}

export const config = {
    matcher: [
        '/',
        '/auth',
        '/verify-email',
        '/demo',
    ]
}