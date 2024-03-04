
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const WebsiteLayout = () => {
  return (
    <>
       <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default WebsiteLayout
