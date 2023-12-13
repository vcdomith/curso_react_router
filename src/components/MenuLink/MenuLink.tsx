import { NavLink } from 'react-router-dom'
import styles from './MenuLink.module.css'

interface MenuLinkProps {

    children: string
    to: string

}

const MenuLink = ({ children, to }: MenuLinkProps) => {


  return (
    <NavLink 
        className={({ isActive }) => `
            ${styles.link}
            ${isActive ? styles.linkDestacado : ''}
        `} 
        to={to}>
        {children}
    </NavLink>
  )
}

export default MenuLink