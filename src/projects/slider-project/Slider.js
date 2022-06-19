import { useEffect, useState } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import LinkToHome from '../../components/LinkToHome';
import people from './data'
import './slider.css'

const Slider = () => {
    const [index, setIndex] = useState(0)

    // Check index is over array's length or less than 0
    useEffect(() => {
        if(index > people.length - 1) {
            setIndex(0)
        }
        if(index < 0) {
            setIndex(people.length - 1)
        }
    }, [index])

    // Auto slider
    useEffect(() => {
        let interval = setInterval(() => {
            setIndex(index + 1)
        }, 5000)
        return () => {
            clearInterval(interval)
        }
    }, [index])
    
    return (
        <div className="section">
            <LinkToHome />
            <div className="title">
                <h1>Our Slider</h1>
                <div className="underline"></div>
            </div>
            <div className="section-center">
                {people.map((person, personIndex) => {
                    const { id, image, name, title, quote } = person
                    let position = 'next-slider' // Set all article to next-slider class as default
                    
                    // If it is the current index, set it to current-slider class
                    if (personIndex === index) {
                        position = 'current-slider'
                    }
                    // If it is the previous current, set it to prev-slider. We also need to check if the index is 0, then we set it to the last one in the array
                    if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
                        position = 'prev-slider'
                    }

                    return (
                        <article key={id} className={`person ${position}`}>
                            <img src={image} alt={name} />
                            <h3 style={{textTransform: 'capitalize', textAlign: 'center'}}>{name}</h3>
                            <h3 style={{textTransform: 'capitalize', textAlign: 'center'}}>{title}</h3>
                            <p style={{ textAlign: 'center'}}>{quote}</p>
                            <FaQuoteRight className='person-icon' />
                        </article>
                    )
                })}
                <button className='prev' onClick={() => setIndex(index - 1)}><FiChevronLeft /></button>
                <button className='next' onClick={() => setIndex(index + 1)}><FiChevronRight /></button>
            </div>
        </div>
    )
}

export default Slider
