import Filter from '../Filter/Filter'
import TicketList from '../TicketList/TicketList'
import classes from './Main.module.scss'

function Main({ tickets }) {
  return (
    <div className={classes.main}>
      <Filter />
      <TicketList tickets={tickets} />
    </div>
  )
}

export default Main
