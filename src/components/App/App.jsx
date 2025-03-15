import { useEffect, useState } from 'react'
import classes from './App.module.scss'
import logo from './Logo.png'
import getTickets from '../../Services/aviasalesApi'
import Filter from '../Filter/Filter'
import Sidebar from '../Sidebar/Sidebar'
import TicketList from '../TicketList/TicketList'

function App({ value }) {
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    getTickets().then((body) => {
      setTickets(body.tickets)
    })
  }, [value])

  return (
    <div className={classes.app}>
      <img className={classes['app__img']} src={logo} alt="logo" />

      <Sidebar />
      <section className={classes['app__section']}>
        <Filter />
        <TicketList tickets={tickets} />
      </section>
    </div>
  )
}

export default App

/*
  getTickets().then((body) => {
    console.log(body)
  })
    ----------------
  const gotTickets = () => {
    getTickets().

      then((data) => {
        this.setState({
          movies: data.results,
          //isLoaded: false,
        })
      })
      .catch((error) => {
        this.setState({
          //isLoaded: false,
          error,
        })
      })
  }
      */
