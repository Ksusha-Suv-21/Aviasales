const initialState = [
    { value: 'cheapest', text: 'Самый дешевый', checked: true },
    { value: 'fastest', text: 'Самый быстрый', checked: false },
    { value: 'optimal', text: 'Оптимальный', checked: false },
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