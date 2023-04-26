import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

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
    CredentialsProvider({
      name: 'Credentials',
      // credentials: {
      //   username: { label: "Username", type: "text", placeholder: `${MOCK_USER.username}` },
      //   password: { label: "Password", type: "password" }
      // },
      async authorize(credentials, req) {
        try {
          console.log('🚀 ~ file: [...nextauth].ts:30 ~ authorize ~ credentials:', credentials,
            credentials?.username === MOCK_USER.email && credentials?.password === MOCK_USER.password)
          const { username, password } = credentials as {
            username: string
            password: string
          }

          // TODO: add call DB
          let user


          if (username === MOCK_USER.username && password === MOCK_USER.password) {
            console.log('USUARIO MOCK', MOCK_USER)
            return { id: MOCK_USER.id, name: MOCK_USER.username, email: MOCK_USER.email } as any
          } else if (user) {
            console.log('AQUI')
            return user
          }
          console.log('return null on AUTHORIZE METHOD')
          return null
        } catch (error) {
          console.log("🚀 ~ file: [...nextauth].ts:47 ~ authorize ~ error:", error)
        }

      },
      credentials: undefined
    })
  ],
}
export default NextAuth(authOptions)