import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { connectToDB } from '../../../../utils/database'
import User from '../../../../models/user';

const handler = NextAuth({
  pages: {
    signIn: '/auth/signin',
  },
  providers: [
    CredentialsProvider({
      name: "Username",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password", placeholder: "*****" }
      },
      async authorize(credentials, req) {
        const { username } = credentials;
        const user = await User.findOne({ username });
      
        if (user) {
          return user;
        } else {
          return null;
        }
      }
    }) 
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({ username: session?.user?.username });
      session?.user && (session.user.id = sessionUser?._id.toString());

      return session;
    },
    async signIn({ profile }) {
      try {
        await connectToDB();

        if (profile?.username) {
          const userExists = await User.findOne({ username: profile.username });

          if (!userExists) {
            await User.create({
             username: profile.username,
            });
          }
        }

        return true;
      } catch (error) {
        console.log("Error checking if user exists: ", error.message);
        return false;
      }
    },
  }
});

export { handler as GET, handler as POST };
