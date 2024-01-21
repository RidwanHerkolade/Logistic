import React from 'react'
import Nav from '../Conponent/Navigation/Nav'
import { Outlet } from 'react-router-dom'

const ShareLayout = () => {
  return (
      <>
        <Nav/>
        <Outlet/>
      </>
  )
}

export default ShareLayout