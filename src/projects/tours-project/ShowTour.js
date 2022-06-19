import { useState } from "react"

const ShowTour = ({ tours, onDelete }) => {
  const [moreInfo, setMoreInfo] = useState(false)
  return (
    tours.map(tour => {
      const { id, image, info, name, price } = tour
      return (
        <article key={id} className="single-tour">
          <img src={image} alt={name} />
          <div className="text">
            <h4>{name}</h4>
            <h4 style={{color: 'blueviolet'}}>{price}$</h4>
          </div>
          <p className="des">
            {moreInfo ? info : `${info.substring(0, 200)}...`}
            <span><button className="toggle-text" onClick={() => setMoreInfo(!moreInfo)}>{moreInfo ? 'Show less' : 'Show more'}</button></span>
          </p>
          <button className="tour-btn" onClick={() => onDelete(id)}>Not Interested</button>
        </article>
      )
    })
  )
}

export default ShowTour
