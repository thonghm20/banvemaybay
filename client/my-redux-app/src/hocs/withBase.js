import { useLocation, useNavigate } from 'react-router-dom'

const withBase = (Component) => (props) => {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <Component navigate={navigate} location={location} {...props}/>
  )
}

export default withBase