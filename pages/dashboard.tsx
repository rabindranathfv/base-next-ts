import React from 'react'

import { useSession, signOut } from "next-auth/react"
import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react'

export default function Dashboard() {
  const { data } = useSession()
  console.log('🚀 ~ file: index.tsx:9 ~ Home ~ data:', data)

  const logout = () => {
    console.log("SALIENDO")
    signOut()
  }

  return (
    <div>
      { data?.user &&
          (<div>
            <h5>Dashboard - SigOut section</h5>
            <button type="button" onClick={logout}>SigOut</button>
          </div>)
        }
    </div>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {

  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      session,
    },
  }
}
