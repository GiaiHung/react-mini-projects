import { Link } from "react-router-dom"

const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh'
}

const Error = () => {
    return (
        <div style={style}>
            <h1>
                404 Page Not Found!!
            </h1>
            <Link to='/'><button className="btn">Back to home</button></Link>
        </div>
    )
}

export default Error
