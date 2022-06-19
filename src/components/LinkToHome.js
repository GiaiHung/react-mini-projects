import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

const LinkToHome = () => {
    return (
        <Link to="/"><FaArrowLeft style={{
            margin: '1rem',
            fontSize: '1.5rem'
        }} /></Link>
    )
}

export default LinkToHome
