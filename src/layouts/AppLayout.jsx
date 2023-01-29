import React from 'react'
import Header from '@components/Header';

const AppLayout = ({children}) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  )
}

export default AppLayout;