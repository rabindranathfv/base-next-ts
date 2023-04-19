import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { Try } from "@mui/icons-material"

const MOCK_USER = {
  id: 1,
  name: 'usuario meteo',
  username: 'umeteo',
  email: 'umeteo@gmail.com',
  password: '123456',
  // token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InByaXNhQHBydWViYS5jb20iLCJuYW1lIjoidXN1YXJpbyBwcmlzYSIsImlhdCI6MTY3NTk1NTk0MSwiZXhwIjoxNzA3MDU5OTQxfQ.aVXhgak58RtsGCNYbt_kOhSSUq7Pfy1N3StlfQMeXeQ',
}


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: `${MOCK_USER.username}` },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        try {
          console.log('🚀 ~ file: [...nextauth].ts:30 ~ authorize ~ credentials:', credentials)

          // TODO: add call DB
          let user;


          if (credentials?.username === MOCK_USER.username && credentials?.password === MOCK_USER.password) {
            console.log('USUARIO MOCK')
            return MOCK_USER as any
          } else if (user) {
            return user;
          }
          return null
        } catch (error) {
          console.log('🚀 ~ file: [...nextauth].ts:33 ~ authorize ~ error:', error)
        }

      }
    })
  ],
}
export default NextAuth(authOptions)