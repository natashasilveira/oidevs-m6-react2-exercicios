import { Text } from './ui/text'
import { Home } from './pages/home'
import React from 'react'
import { Button } from './ui/button'
import { Login } from './pages/login'



export const App = () => {

  const [currentPage, setCurrentPage] = React.useState('login');

  return (
    <>
      {currentPage === 'login' && <Login onClickHome={setCurrentPage} />}
      {currentPage === 'home' && <Home onClickLogin={setCurrentPage} />}
    </>
  )
}
