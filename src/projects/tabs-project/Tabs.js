import { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import LinkToHome from '../../components/LinkToHome'
import './tabs.css'

const Tabs = () => {
  const URL = 'https://course-api.com/react-tabs-project'
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const getJobs = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setJobs(data)
    setLoading(false)
  }

  useEffect(() => {
    getJobs()
  }, [])

  if (loading) {
    return (
      <section className='section loading'>
        <h1>Loading...</h1>
      </section>
    )
  }

  const { title, dates, duties, company } = jobs[value]
  return (
    <section className='section'>
      <LinkToHome className='arrow-home'/>
      <div className="title">
        <h1>Our Tabs</h1>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((job, index) => {
            const { id, company } = job
            return (
              <button key={id} className={`job-btn ${index === value ? 'active-btn' : ''}`} onClick={() => setValue(index)}>{company}</button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='job-icon' />
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default Tabs
