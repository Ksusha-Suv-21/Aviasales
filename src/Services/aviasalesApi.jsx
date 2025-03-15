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
  const searchId = await getSearchId()
  const url = `${apiBaseUrl}tickets?searchId=${searchId}`
  const res = await fetch(url)
  const obj = await res.json()

  if (obj.stop) {
    sessionStorage.removeItem('searchId')
  }

  return obj
}

export default getTickets

/*
  const { tickets, stop } = await obj
  if (obj.stop === true) {
    sessionStorage.removeItem('searchId')
  }

  return { tickets, stop }
*/
