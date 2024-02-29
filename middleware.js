import { NextResponse } from 'next/server';


export default async function middleware(req) {
    // console.log("reqdata ",req)
  const { pathname } = req.nextUrl;
  const protectedRoutes = ['/profile', '/dashboard'];

  // Check if the user is logged in
  const isLoggedIn = false

  // If the user is not logged in and trying to access a protected page, redirect to login
  if (!isLoggedIn && protectedRoutes.includes(pathname)) {
    return NextResponse.redirect('/login');
  }

  // If the user is logged in and trying to access login or signup pages, redirect to home
  if (isLoggedIn && ['/login', '/signup'].includes(pathname)) {
    return NextResponse.redirect('/');
  }

  // Allow access to all other pages
  return NextResponse.next();
}
