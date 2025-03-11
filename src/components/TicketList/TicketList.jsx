import classes from './TicketList.module.scss'
import TicketCard from '../TicketCard/TicketCard'

function TicketList() {
  return (
    <div className={classes.ticketList}>
      <TicketCard />
      <button className={classes['ticketList__button']}>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!</button>
    </div>
  )
}

export default TicketList
