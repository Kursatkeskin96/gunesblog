import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { signJwtToken } from "@/lib/jwt";
import { connectToDB } from '../../../../utils/database'
import User from '../../../../models/user';
import bcrypt from 'bcrypt'


const handler = NextAuth({
  pages: {
    signIn: 'https://gunesozdemir.vercel.app/auth/signin',
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password", placeholder: "*****" }
      },
      async authorize(credentials, req) {
        const { username, password } = credentials;

        await connectToDB();

        const user = await User.findOne({ username });
      
        if(!user){
          throw new Error("Invalid input")
      }

      // 2 parameters -> 
      // 1 normal password -> 123123
      // 2 hashed password -> dasuytfygdsaidsaugydsaudsadsadsauads
      const comparePass = await bcrypt.compare(password, user.password)

      if(!comparePass){
          throw new Error("Invalid inpuddddddd")
      } else {
          const {password, ...currentUser} = user._doc

          const accessToken = signJwtToken(currentUser, {expiresIn: '6d'})

          return {
              ...currentUser,
              accessToken
          }
      }
  }
})
],
     callbacks: {
        async jwt({token, user}){
            if(user){
                token.accessToken = user.accessToken
                token._id = user._id
            }

            return token
        },
        async session({session, token}){
            if(token){
                session.user._id = token._id
                session.user.accessToken = token.accessToken
            }

            return session
        }
    }
})

export { handler as GET, handler as POST };
