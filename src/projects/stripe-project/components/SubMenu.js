import { useState, useEffect, useRef } from "react"
import { useGlobalContext } from "../context"
import sublinks from '../data'

const SubMenu = () => {
  const { isSubmenuOpen, page: { page, links }, location } = useGlobalContext()
  const container = useRef(null)
  const [columns, setColumns] = useState('col-2')

  useEffect(() => {
    setColumns('col-2')

    const submenu = container.current
    const {center, bottom} = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`

    if(links.length === 3) setColumns('col-3')
    if(links.length > 3) setColumns('col-4')
  }, [page, links, location])

  return (
    <aside className={`submenu  ${isSubmenuOpen ? 'show' : ''}`} ref={container}>
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
          {
            links.map((item, index) => {
              const { icon, url, label } = item
              return (
                <a href={url} key={index}>
                  {icon}
                  {label}
                </a>
              )
            })
          }
        </div>
      </section>
    </aside>
  )
}

export default SubMenu
