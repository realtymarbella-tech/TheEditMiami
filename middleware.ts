import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/api/webhook/meta-leads' && request.method === 'POST') {
    const body = await request.text();
    request.headers.set('x-raw-body', body);
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    });
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/api/webhook/meta-leads'],
};
