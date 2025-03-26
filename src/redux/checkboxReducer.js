const initialState = [
    { label:'Все', value: 'all', checked: false },
    { label:'Без пересадок', value: 'noStops', checked: false },
    { label:'1 пересадка', value: 'oneStop', checked: false },
    { label:'2 пересадки', value: 'twoStops', checked: false },
    { label:'3 пересадки', value: 'threeStops', checked: false },
  ]

  
const checkboxReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'all':
            return state.map((item) => (item.checked !== action.checked ? { ...item, checked: !item.checked } : { ...item }))
        case 'filter':
            return state.map((item) => (item.value === action.value ? { ...item, checked: !item.checked } : { ...item }))
            
        default: 
        return state
    }
}

export default checkboxReducer