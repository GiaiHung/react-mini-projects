const Categories = ({ filterItems, categories }) => {
  return (
    <div className="menu-btn-container">
      {
        categories.map((category, index) => {
          return <button key={index} className="filter-btn" onClick={() => filterItems(category)}>{category}</button>
        })
      }
    </div>
  )
}

export default Categories