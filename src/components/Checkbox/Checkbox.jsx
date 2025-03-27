import classes from './Checkbox.module.scss'

import * as actions from '../../redux/actions/checkboxAcction'
import { connect } from 'react-redux'

const Checkbox = ({ checkboxItems, checkboxAction, checkboxAllAction }) => {
  const toggleCheckbox = (value, checked) => {
    const all = { ...checkboxItems[0] }

    const points = checkboxItems.slice(1)

    if (value === 'all') {
      checkboxAllAction(checked)
    } else {
      if (all.checked) {
        checkboxAction('all')
      } else if (points.filter((item) => item.checked).length === 3 && !all.checked && checked) {
        checkboxAction('all')
      }
      checkboxAction(value)
    }
  }

  return (
    <div className={classes.checkbox}>
      <legend className={classes['checkbox__legend']}>КОЛИЧЕСТВО ПЕРЕСАДОК</legend>
      {checkboxItems.map(({ value, checked, label }, id) => {
        return (
          <div className={classes['checkbox__item']} key={id} onChange={() => toggleCheckbox(value, !checked)}>
            <input
              type="checkbox"
              id={value}
              name={value}
              checked={checked}
              className={classes['checkbox__item-checkbox']}
              readOnly
            />
            <label htmlFor={value} className={classes['checkbox__item-label']}>
              {label}
            </label>
          </div>
        )
      })}
    </div>
  )
}

const mapStateToProps = (state) => ({ checkboxItems: state.checkboxReducer })

export default connect(mapStateToProps, actions)(Checkbox)
