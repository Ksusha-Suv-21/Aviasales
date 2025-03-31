const apiBaseUrl = 'https://aviasales-test-api.kata.academy/'

export const getSearchId = async () => {
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

export const getTickets = async () => {
  const searchId = await getSearchId()

  const res = await fetch(`${apiBaseUrl}tickets?searchId=${searchId}`)
  const data = await res.json()

  if (data.stop) {
    sessionStorage.removeItem('searchId')
  }
  console.log(data)
  return data
}

/*
  const { tickets, stop } = await obj
  if (obj.stop === true) {
    sessionStorage.removeItem('searchId')
  }

  return { tickets, stop }
*/
