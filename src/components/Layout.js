import { Link, Outlet } from 'react-router-dom'
import '../App.css'

const Layout = () => {
    return (
        <>
            <div className='intro'>
                <div className="intro-center">
                    <div className="intro-description">
                        <h2>React Projects</h2>
                        <p>Projects are the most practical way to learn any language, and React is no exception. Solidify your knowledge of React by creating these cool projects.</p>
                        <div className="course-btn">
                            <button>Join the course</button>
                        </div>
                    </div>
                    <div className="intro-image">
                        <img src={require('./images/intro.png')} alt='intro'/>
                    </div>
                </div>
            </div>
            <div className='layout'>
                <ul className='layout-links'>
                    <li>
                        <Link to='/birthday'>Birthday Project</Link>
                    </li>
                    <li>
                        <Link to='/tours'>Tours Project</Link>
                    </li>
                    <li>
                        <Link to='/menu'>Menu Project</Link>
                    </li>
                    <li>
                        <Link to='/tabs'>Tab Project</Link>
                    </li>
                    <li>
                        <Link to='/slider'>Slider Project</Link>
                    </li>
                    <li>
                        <Link to='/generator'>Color Project</Link>
                    </li>
                    <li>
                        <Link to='/nav'>Nav Project</Link>
                    </li>
                    <li>
                        <Link to='/stripe'>Stripe Project</Link>
                    </li>
                    <li>
                        <Link to='/cart'>Cart Project</Link>
                    </li>
                </ul>

                <Outlet />
            </div>
        </>
    )
}

export default Layout
