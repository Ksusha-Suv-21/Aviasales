const initialState = {
    price: false,
    fastest: false,
    optimal: false,
  }
  

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FILTER_BY_PRICE':
            return { ...state, price: true, fastest: false, optimal: false }
        case 'FILTER_BY_FASTEST':
            return { ...state, price: false, fastest: true, optimal: false }
        case 'FILTER_BY_OPTIAML':
            return { ...state, price: false, fastest: false, optimal: true }
        default: 
            return state
    }
}

export default filterReducer


/*
const initialState = [
    { value: 'cheapest', label: 'Самый дешевый', checked: true },
    { value: 'fastest', label: 'Самый быстрый', checked: false },
    { value: 'optimal', label: 'Оптимальный', checked: false },
  ]

  
const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'filter':
            return state.map((item) => (item.value === action.payload ? { ...item, checked: true } : { ...item, checked: false }))
        default: 
            return state
    }
}

export default filterReducer
*/