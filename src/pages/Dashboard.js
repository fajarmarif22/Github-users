import React from 'react'
import { Info, Repos, User, Search, Navbar } from '../components'
import loadingImage from '../images/preloader.gif'
import { GithubContext } from '../context/context'
const Dashboard = () => {
  return (
    <main>
      <div>
        <Navbar></Navbar>
        <Search />
        <Info />
        <User />
        <Repos />
      </div>
    </main>
  )
}

export default Dashboard
