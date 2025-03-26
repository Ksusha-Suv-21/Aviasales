import classes from './Header.module.scss'
import logo from './Logo.png'

function Header() {
  return (
    <header className={classes.header}>
      <img className={classes['header__img']} src={logo} alt="logo" />
    </header>
  )
}

export default Header
