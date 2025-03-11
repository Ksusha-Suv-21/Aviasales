import classes from './App.module.scss'
import logo from './Logo.png'

import Filter from '../Filter/Filter'
import Sidebar from '../Sidebar/Sidebar'

function App() {
  return (
    <div className={classes.app}>
      <img className={classes['app__img']} src={logo} alt="logo" />

      <Sidebar />
      <section>
        <Filter />
        <div>//ticketlist</div>
      </section>
    </div>
  )
}

export default App
