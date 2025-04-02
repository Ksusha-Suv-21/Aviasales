import classes from './Filter.module.scss'
import { connect } from 'react-redux'

import { filterAC } from '../../redux/actions/filterAction'

const Filter = ({ filters, filterAC }) => {
  return (
    <ul className={classes.filter}>
      {filters.map((item, id) => {
        return (
          <li
            className={`${classes['filter__item']}  ${item.checked ? classes['filter__selected'] : ''}`}
            key={id}
            onClick={item.checked ? () => {} : () => filterAC('filter', item.value)}
          >
            <a className={classes['filter__item-link']}>{item.label}</a>
          </li>
        )
      })}
    </ul>
  )
}

const mapStateToProps = (state) => ({ filters: state.filterReducer })
export default connect(mapStateToProps, { filterAC })(Filter)

/*

------------------------------------------

const Filter = () => {
  const dispatch = useDispatch()
  const { price, fastest, optimal } = useSelector((state) => state.filterReducer)


  const handleFilterByPrice = () => {
    dispatch(filterByPriice())
  }

  const handleFilterByFastest = () => {
    dispatch(filterByFastest())
  }

  const handleFilterByOptimal = () => {
    dispatch(filterByOptimal())
  }

  return (
    <ul className={classes.filter}>
      <li
        className={`${classes['filter__item']} ${price ? classes['filter__selected'] : ''}`}
        onClick={handleFilterByPrice}
      >
        <a className={classes['filter__item-link']}>САМЫЙ ДЕШЕВЫЙ</a>
      </li>
      <li
        className={`${classes['filter__item']} ${fastest ? classes['filter__selected'] : ''}`}
        onClick={handleFilterByFastest}
      >
        <a className={classes['filter__item-link']}>САМЫЙ БЫСТРЫЙ</a>
      </li>
      <li
        className={`${classes['filter__item']} ${optimal ? classes['filter__selected'] : ''}`}
        onClick={handleFilterByOptimal}
      >
        <a className={classes['filter__item-link']}>ОПТИМАЛЬНЫЙ</a>
      </li>
    </ul>
  )
}
  export default Filter
    */
