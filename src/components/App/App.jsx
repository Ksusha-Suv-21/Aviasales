import classes from './App.module.scss'
import logo from './Logo.png'

import Filter from '../Filter/Filter'
import Sidebar from '../Sidebar/Sidebar'
import TicketList from '../TicketList/TicketList'

function App() {
  return (
    <div className={classes.app}>
      <img className={classes['app__img']} src={logo} alt="logo" />

      <Sidebar />
      <section>
        <Filter />
        <TicketList />
      </section>
    </div>
  )
}

export default App
