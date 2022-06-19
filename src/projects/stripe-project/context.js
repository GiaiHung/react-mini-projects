import React, { useContext, useState } from 'react'
import sublinks from './data'

const AppContext = React.createContext()
const AppProvider = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false)
    const [isSubmenuOpen, setSubmenuOpen] = useState(false)
    const [page, setPage] = useState({page: '', links: []})
    const [location, setLocation] = useState({})

    function openSidebar() {
        setSidebarOpen(true)
    }

    function closeSidebar() {
        setSidebarOpen(false)
    }

    function openSubmenu(text, coordinates) {
        const sublink = sublinks.find((link) => link.page === text)
        setPage({page: sublink.page, links: sublink.links})
        setLocation(coordinates)
        setSubmenuOpen(true)
    }

    function closeSubmenu() {
        setSubmenuOpen(false)
    }

    return (
        <AppContext.Provider value={{
            isSidebarOpen,
            isSubmenuOpen,
            page,
            location,
            openSidebar,
            closeSidebar,
            openSubmenu,
            closeSubmenu,
        }}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { useGlobalContext, AppProvider }