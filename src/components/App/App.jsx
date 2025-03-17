import { useEffect, useState } from 'react'
import classes from './App.module.scss'
import logo from './Logo.png'
import getTickets from '../../Services/aviasalesApi'

import Checkbox from '../Checkbox/Checkbox'

import Main from '../Main/Main'

function App({ value }) {
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    getTickets().then((body) => {
      setTickets(body.tickets)
    })
  }, [value])

  return (
    <div className={classes.app}>
      <header className={classes['app__header']}>
        <img className={classes['app__img']} src={logo} alt="logo" />
      </header>
      <div className={classes['app__main']}>
        <Checkbox />
        <Main tickets={tickets} />
      </div>
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
