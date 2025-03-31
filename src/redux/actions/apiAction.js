import { getTickets } from '../../Services/aviasalesApi'

export const getTicketsAC = (payload) => ({ type: 'getTickets', payload })
export const loadingAC = (payload) => ({ type: 'loading', payload })
export const errorAC = (payload) => ({ type: 'error', payload })


export const gotTicketsAC = () => (dispatch) => {
    return getTickets()
      .then((res) => {
        dispatch(getTicketsAC(res.tickets))
        dispatch(loadingAC(false))
        dispatch(errorAC(false))
      })
      .catch(() => {
        dispatch(loadingAC(false))
        dispatch(errorAC(true))
      })
  }

