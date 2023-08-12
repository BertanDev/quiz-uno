import { NextRequest, NextResponse } from 'next/server'
import dayjs from 'dayjs'

export function middleware(request: NextRequest) {
  const score = request.cookies.get('score')?.value

  console.log(score)

  const HOME = new URL('/', request.url)
  const SCORE = new URL('/score', request.url)

  if (!score) {
    if (request.nextUrl.pathname === '/') {
      return NextResponse.next()
    }

    if (request.nextUrl.pathname === '/game') {
      return NextResponse.next()
    }

    return NextResponse.redirect(HOME)
  }

  if (score) {
    if (request.nextUrl.pathname === '/score') {
      return NextResponse.next()
    }

    const date = request.cookies.get('score')?.value
    const today = dayjs()
    const dateResponse = dayjs(date)

    if (today.isSame(dateResponse)) {
      request.cookies.delete(['score', 'date_response'])

      return NextResponse.redirect(HOME)
    }

    return NextResponse.redirect(SCORE)
  }
}

export const config = {
  matcher: ['/', '/game', '/score'],
}
