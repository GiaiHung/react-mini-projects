import { useState } from 'react'
import data from './data'
import './birthday.css'
import List from './List'
import LinkToHome from '../../components/LinkToHome'

const BirthdayReminder = () => {
  const [people, setPeople] = useState(data)

  return (
    <>
      <LinkToHome />
      <div className='birthday-container'>
        <p style={{ textAlign: 'center', fontSize: '2rem' }}>{people.length} birthdays today</p>
        <List people={people} />
        <button className='birthday-button' onClick={() => setPeople([])}>Clear All</button>
      </div>
    </>
  )
}

export const styleIcon = {
  fontSize: '2rem',
  color: 'black',
  position: 'absolute',
  left: '10%',
  top: '10%',
  cursor: 'pointer'
}
export default BirthdayReminder
