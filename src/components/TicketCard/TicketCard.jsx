import classes from './TicketCard.module.scss'
import { addMinutes, format } from 'date-fns'

function TicketCard({ ticket }) {
  const { carrier, price, segments } = ticket

  const departureTime = (date) => format(date, 'HH:mm')
  const arrivalTime = (date, duration) => format(addMinutes(date, duration), 'HH:mm')

  const flightTime = (time) => {
    const hours = Math.floor(time / 60)
    const mins = time - hours * 60
    return `${hours}ч ${mins}м`
  }

  const allStops = (data) => {
    const count = data.length
    if (count === 0) {
      return 'Без пересадок'
    } else if (count === 1) {
      return '1 пересадка'
    } else if (count < 5) {
      return `${count} пересадки`
    } else {
      return `${count} пересадок`
    }
  }

  return (
    <div className={classes.ticketCard}>
      <div className={classes['ticketCard__price-logo']}>
        <div className={classes['ticketCard__price']}>{price.toLocaleString()}p</div>
        <img
          className={classes['ticketCard__img']}
          alt="Логотип авиакомпании"
          src={`//pics.avs.io/99/36/${carrier}.png`}
        ></img>
      </div>
      {segments.map(({ origin, destination, date, stops, duration }, id) => {
        return (
          <div className={classes['ticketCard__info']} key={id}>
            <p className={classes['ticketCard__info-text']}>{`${origin} - ${destination}`}</p>
            <p className={classes['ticketCard__info-text']}>В пути</p>
            <p className={classes['ticketCard__info-text']}>{allStops(stops)}</p>
            <p
              className={classes['ticketCard__info-data']}
            >{`${departureTime(date)} - ${arrivalTime(date, duration)}`}</p>
            <p className={classes['ticketCard__info-data']}>{flightTime(duration)}</p>
            <p className={classes['ticketCard__info-data']}>{stops.join(', ')}</p>
          </div>
        )
      })}
    </div>
  )
}

export default TicketCard
