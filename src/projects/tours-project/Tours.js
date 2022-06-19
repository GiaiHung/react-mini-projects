import { useEffect, useState } from 'react'
import './tours.css'
import ShowTour from './ShowTour'
import LinkToHome from '../../components/LinkToHome'

const Tours = () => {
  const URL = 'https://course-api.com/react-tours-project'
  const [tours, setTours] = useState([])
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(URL)
      const data = await response.json()
      setTours(data)
    }

    getData()
  }, [])

  console.log(tours);

  const onDelete = (id) => {
    setTours(tours.filter(tour => tour.id !== id))
  }

  return (
    <div>
      <LinkToHome />
      <h1 className='review-header'>welcome to our Tours</h1>
      <div className="underline"></div>
      {tours.length !== 0 ? <ShowTour tours={tours} onDelete={onDelete} /> : <p style={{ textAlign: 'center', fontSize: '2rem' }}>No tours to show</p>}
    </div>
  )
}

export default Tours
