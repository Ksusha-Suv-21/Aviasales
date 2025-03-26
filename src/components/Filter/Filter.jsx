import classes from './Filter.module.scss'
import { connect } from 'react-redux'

import { filterAction } from '../../redux/filterAction'

const Filter = ({ filters, filterAction }) => {
  return (
    <ul className={classes.filter}>
      {filters.map((item, id) => {
        return (
          <li
            className={`${classes['filter__item']}  ${item.checked ? classes['filter__selected'] : ''}`}
            key={id}
            onClick={item.checked ? () => {} : () => filterAction('filter', item.value)}
          >
            <a className={classes['filter__item-link']}>САМЫЙ ДЕШЕВЫЙ</a>
          </li>
        )
      })}
    </ul>
  )
}

const mapStateToProps = (state) => ({ filters: state.filterReducer })

export default connect(mapStateToProps, { filterAction })(Filter)

/*

<ul className={classes.filter}>
      <li className={`${classes['filter__item']} ${classes['filter__selected']}`}>
        <a className={classes['filter__item-link']}>САМЫЙ ДЕШЕВЫЙ</a>
      </li>
      <li className={classes['filter__item']}>
        <a className={classes['filter__item-link']}>САМЫЙ БЫСТРЫЙ</a>
      </li>
      <li className={classes['filter__item']}>
        <a className={classes['filter__item-link']}>ОПТИМАЛЬНЫЙ</a>
      </li>
    </ul>

    */
