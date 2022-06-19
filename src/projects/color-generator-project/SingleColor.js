import { useEffect, useState } from 'react'

const SingleColor = ({ rgb, weight, hex, type }) => {
  const [alert, setAlert] = useState(false) //Set clipboard
  const bgc = rgb.join(',')
  const hexValue = `#${hex}`

  useEffect(() => {
    let alertTime = setTimeout(() => {
      setAlert(false)
    }, 1000)
    return () =>  clearTimeout(alertTime)
  }, [alert])

  return (
    <article
      className={`color ${type === 'shade' ? 'color-light' : null}`}
        style={{ backgroundColor: `rgb(${bgc})` }}
        onClick={() => {
          setAlert(true)
          navigator.clipboard.writeText(hexValue)
      }}
    >
      <h4 className={`percent-value`}>{weight}%</h4>
      <h4 className={`color-value`}>{hexValue}</h4>
      {alert && <p style={{ textAlign: 'center', fontSize: '1rem', opacity: .7}} className='alert'>Copied to Clipboard!!</p>}
    </article>
  )
}

export default SingleColor
