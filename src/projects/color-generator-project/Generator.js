import { useState } from 'react'
import Values from 'values.js'
import LinkToHome from '../../components/LinkToHome'
import './generator.css'
import SingleColor from './SingleColor'

const Generator = () => {
    const [color, setColor] = useState('')
    const [error, setError] = useState(false)
    const [list, setList] = useState(new Values('#f524c2').all(10))

    function handleSubmit(e) {
        e.preventDefault()
        try {
            const colors = new Values(color).all(10) // it means create 10 tints and 10 shades
            setError(false)
            setList(colors)
        } catch (error) {
            setError(true)
            console.log(error);
        }
    }

    return (
        <>
            <LinkToHome />
            <section className="color-container">
                <form onSubmit={handleSubmit}>
                    <label>Color Generator</label>
                    <input type="text" placeholder='#f524c2' value={color} onChange={(e) => setColor(e.target.value)} className={error ? 'error' : ''} />
                    <button className="btn">Submit</button>
                </form>
            </section>
            <section className="colors">
                {list.map((color, index) => {
                    return <SingleColor key={index} {...color} hex={color.hex} />
                })}
            </section>
        </>
    )
}

export default Generator
