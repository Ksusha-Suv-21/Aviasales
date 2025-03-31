import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import classes from './TicketList.module.scss'
import TicketCard from '../TicketCard/TicketCard'
import { gotTicketsAC } from '../../redux/actions/apiAction'
import Spinner from '../Spinner/Spinner'
import { Alert } from 'antd'

function TicketList({ tickets, gotTicketsAC, error }) {
  const [count, setCount] = useState(5)

  useEffect(() => {
    gotTicketsAC()
  }, [])

  const showMoreButton = () => {
    setCount((count) => {
      return count + 5
    })
  }

  //const ticketsSlice = tickets.slice(0, count)

  return (
    <div className={classes.ticketList}>
      {error ? (
        <Alert
          message="Error"
          description="Что-то пошло не так, попробуйте обновить страницу"
          type="error"
          className={classes.errors}
        />
      ) : null}

      <Spinner />
      {tickets?.slice(0, count).map((ticket, id) => (
        <TicketCard key={id} ticket={ticket} />
      ))}
      <button className={classes['ticketList__button']} onClick={showMoreButton} count={count}>
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
      </button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    tickets: state.apiReducer.tickets,
    filter: state.filterReducer,
    checkbox: state.checkboxReducer,
    error: state.apiReducer.error,
    //isLoading: state.apiReducer.isLoading,
  }
}

export default connect(mapStateToProps, { gotTicketsAC })(TicketList)
