import NextAuth, { DefaultSession } from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: {
      _id: string;
      name: string;
      email: string;
      image: string;
      isAdmin: boolean;
    } & DefaultSession['user'];
  }

  interface User {
    _id: string;
    name: string;
    email: string;
    image: string;
    isAdmin: boolean;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    _id: string;
    name: string;
    email: string;
    image: string;
    isAdmin: boolean;
    idToken?: string;
  }
}
