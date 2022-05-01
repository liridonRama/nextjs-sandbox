import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  if (!['/test'].includes(req.nextUrl.pathname)) {
    return NextResponse.next();
  }

  console.log('middleware ran:', req.nextUrl);

  return NextResponse.redirect(new URL('/', req.url));
}
