import { useState } from 'react'
import classes from './TicketList.module.scss'
import TicketCard from '../TicketCard/TicketCard'

function TicketList({ tickets }) {
  const [count, setCount] = useState(5)

  const showMoreButton = () => {
    setCount((count) => {
      return count + 5
    })
  }

  //const ticketsSlice = tickets.slice(0, count)

  return (
    <div className={classes.ticketList}>
      {tickets?.slice(0, count).map((ticket, id) => (
        <TicketCard key={id} ticket={ticket} />
      ))}
      <button className={classes['ticketList__button']} onClick={showMoreButton} count={count}>
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
      </button>
    </div>
  )
}

export default TicketList
