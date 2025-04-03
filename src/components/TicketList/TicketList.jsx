import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import classes from './TicketList.module.scss'
import TicketCard from '../TicketCard/TicketCard'
import { gotTicketsAC } from '../../redux/actions/apiAction'
import Spinner from '../Spinner/Spinner'
import { Alert } from 'antd'

function TicketList({ tickets, gotTicketsAC, error, isLoading, filter, checkbox }) {
  const [count, setCount] = useState(5)

  useEffect(() => {
    gotTicketsAC()
  }, [])

  const showMoreButton = () => {
    setCount((count) => {
      return count + 5
    })
  }

  const checkboxFilter = (items, checkboxState) => {
    let checkboxList = []
    for (let item of checkboxState) {
      if (item.value === 'noStops' && item.checked)
        checkboxList.push(...items.filter((i) => i.segments[0].stops.length === 0))
      if (item.value === 'oneStop' && item.checked)
        checkboxList.push(...items.filter((i) => i.segments[0].stops.length === 1))
      if (item.value === 'twoStops' && item.checked)
        checkboxList.push(...items.filter((i) => i.segments[0].stops.length === 2))
      if (item.value === 'threeStops' && item.checked)
        checkboxList.push(...items.filter((i) => i.segments[0].stops.length === 3))
    }
    return checkboxList
  }

  const filterValue = filter.filter((el) => el.checked)[0].value

  const filterTicketsList = (items, filterValue) => {
    if (filterValue === 'cheapest') return [...items].sort((a, b) => a.price - b.price)
    if (filterValue === 'fastest') return [...items].sort((a, b) => a.segments[0].duration - b.segments[0].duration)
    if (filterValue === 'optimal')
      return [...items].sort((a, b) => a.segments[0].stops.length - b.segments[0].stops.length)
  }

  const ticketsList = filterTicketsList(checkboxFilter(tickets, checkbox), filterValue).slice(0, count)

  return (
    <div className={classes.ticketList}>
      {error ? (
        <Alert
          description="Что-то пошло не так, попробуйте обновить страницу"
          type="error"
          className={classes.errors}
        />
      ) : null}
      <Spinner />

      {ticketsList.length > 0 && !isLoading && !error ? (
        <>
          {ticketsList.map((ticket, id) => {
            return <TicketCard key={id} ticket={ticket} />
          })}
          <button className={classes['ticketList__button']} onClick={showMoreButton} count={count}>
            ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
          </button>
        </>
      ) : null}

      {ticketsList.length === 0 && !isLoading && !error ? (
        <Alert
          description="Рейсов, подходящих под заданные фильтры, не найдено"
          type="error"
          className={classes.errors}
        />
      ) : null}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    tickets: state.apiReducer.tickets,
    filter: state.filterReducer,
    checkbox: state.checkboxReducer,
    error: state.apiReducer.error,
    isLoading: state.apiReducer.isLoading,
  }
}

export default connect(mapStateToProps, { gotTicketsAC })(TicketList)
