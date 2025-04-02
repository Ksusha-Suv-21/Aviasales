const initialState = [
    { label:'Все', value: 'all', checked: true },
    { label:'Без пересадок', value: 'noStops', checked: true },
    { label:'1 пересадка', value: 'oneStop', checked: true },
    { label:'2 пересадки', value: 'twoStops', checked: true },
    { label:'3 пересадки', value: 'threeStops', checked: true },
  ]

  
const checkboxReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ALL':
            return state.map((item) => (item.checked !== action.checked ? { ...item, checked: !item.checked } : { ...item }))
        case 'FILTER':
            return state.map((item) => (item.value === action.value ? { ...item, checked: !item.checked } : { ...item }))
            
        default: 
            return state
    }
}

export default checkboxReducer

