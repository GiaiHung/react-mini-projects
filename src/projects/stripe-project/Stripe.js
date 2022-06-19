import { AppProvider } from './context'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import Hero from './components/Hero'
import SubMenu from './components/SubMenu'
import './stripe.css'

const Stripe = () => {
    return (
        <AppProvider>
            <NavBar />
            <SideBar />
            <Hero />
            <SubMenu />
        </AppProvider>
    )
}

export default Stripe
