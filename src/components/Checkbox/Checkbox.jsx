import classes from './Checkbox.module.scss'

function Checkbox() {
  return (
    <div className={classes.checkbox}>
      <legend className={classes['checkbox__legend']}>КОЛИЧЕСТВО ПЕРЕСАДОК</legend>

      <div className={classes['checkbox__item']}>
        <input type="checkbox" id="all" name="all" className={classes['checkbox__item-checkbox']} />
        <label htmlFor="all" className={classes['checkbox__item-label']}>
          Все
        </label>
      </div>

      <div className={classes['checkbox__item']}>
        <input type="checkbox" id="nonStopFlight" name="nonStopFlight" className={classes['checkbox__item-checkbox']} />
        <label htmlFor="nonStopFlight" className={classes['checkbox__item-label']}>
          Без пересадок
        </label>
      </div>

      <div className={classes['checkbox__item']}>
        <input type="checkbox" id="oneTransfer" name="oneTransfer" className={classes['checkbox__item-checkbox']} />
        <label htmlFor="oneTransfer" className={classes['checkbox__item-label']}>
          1 пересадка
        </label>
      </div>

      <div className={classes['checkbox__item']}>
        <input type="checkbox" id="twoTransfer" name="twoTransfer" className={classes['checkbox__item-checkbox']} />
        <label htmlFor="twoTransfer" className={classes['checkbox__item-label']}>
          2 пересадки
        </label>
      </div>

      <div className={classes['checkbox__item']}>
        <input type="checkbox" id="threeTransfer" name="threeTransfer" className={classes['checkbox__item-checkbox']} />
        <label htmlFor="threeTransfer" className={classes['checkbox__item-label']}>
          3 пересадки
        </label>
      </div>
    </div>
  )
}

export default Checkbox
