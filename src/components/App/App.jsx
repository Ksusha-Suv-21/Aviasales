import classes from './App.module.scss'
import logo from './Logo.png'

function App() {
  return (
    <div className={classes.App}>
      <img className={classes['App__img']} src={logo} alt="logo" />
    </div>
  )
}

export default App
