import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from "../context"
import sublinks from '../data'

const SideBar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  return (
    <aside className={`sidebar-wrapper ${isSidebarOpen ? 'show' : ''}`}>
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {
            sublinks.map((sublink, index) => {
              const { page, links } = sublink
              return (
                <article key={index}>
                  <h4>{page}</h4>
                  <div className="sidebar-sublinks">
                    {links.map((link, index) => {
                      const { icon, url, label } = link
                      return (
                        <a href={url} key={index}>
                          {icon}
                          {label}
                        </a>
                      )
                    })}
                  </div>
                </article>
              )
            })
          }
        </div>
      </div>
    </aside>
  )
}

export default SideBar
