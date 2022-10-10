import { NavLink as NBLink } from 'react-router-dom'

const NBRecreate = ({ to, children, props}) => {
  return (
    <NBLink
    {...props}
    className={({ isActive }) => {
        return isActive ? 'is-active' : undefined
    }}
    to={to}
    >{children}
    </NBLink>
  )
}

export default NBRecreate();
