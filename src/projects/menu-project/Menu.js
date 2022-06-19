import { useState } from 'react'
import data from './data'
import './menu.css'
import Categories from './Categories'
import MenuItem from './MenuItem'
import LinkToHome from '../../components/LinkToHome'

const categories = ['all', ...new Set(data.map(item => item.category))]
// ['all', 'breakfast', 'lunch', 'shakes']

const Menu = () => {
  const [items, setItems] = useState(data)
  const filterItems = (category) => {
    if(category === 'all') {
      setItems(data)
      return 
    }

    const newItems = data.filter((item) => item.category === category)
    setItems(newItems)
  }

  return (
    <div>
      <LinkToHome />
      <h1 className='title'>Our Menu</h1>
      <div className='underline'></div>
      <Categories categories={categories} filterItems={filterItems}/>
      <MenuItem items={items}/>
    </div>
  )
}

export default Menu
