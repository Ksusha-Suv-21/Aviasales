const apiBaseUrl = 'https://aviasales-test-api.kata.academy/'

const getSearchId = async () => {
  if (sessionStorage.getItem('searchId')) {
    return sessionStorage.getItem('searchId')
  }

  const res = await fetch(`${apiBaseUrl}search`)
  const data = await res.json()

  if (!res.ok) {
    throw new Error('Could not fetch')
  }
  sessionStorage.setItem('searchId', data.searchId)

  return data.searchId
}

const getTickets = async () => {
  try {
    const searchId = await getSearchId()

    const res = await fetch(`${apiBaseUrl}tickets?searchId=${searchId}`)
    const data = await res.json()

    if (data.stop) {
      sessionStorage.removeItem('searchId')
    }
    return data
  } catch (err) {
    console.error('Возникла проблема с fetch запросом: ', err.message)
    return err.message
  }
}

export default getTickets

/*
  const { tickets, stop } = await obj
  if (obj.stop === true) {
    sessionStorage.removeItem('searchId')
  }

  return { tickets, stop }
*/
