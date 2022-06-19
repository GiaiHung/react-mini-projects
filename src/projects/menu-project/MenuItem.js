const MenuItem = ({ items }) => {
    return (
        <div className="menu-section-center">
            {items.map(item => {
                const { id, title, desc, price } = item
                return (
                    <article key={id} className="menu-item">
                        <img src={`https://raw.githubusercontent.com/john-smilga/react-projects/master/05-menu/final/public/images/item-${id}.jpeg`} alt={title} className='photo' />
                        <div className="item-info">
                            <header>
                                <h4 style={{textTransform: 'capitalize'}}>{title}</h4>
                                <h4 className="price">${price}</h4>
                            </header>
                            <p className="item-text">{desc}</p>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}

export default MenuItem
