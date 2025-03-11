import classes from './Sidebar.module.scss'

function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <legend className={classes['sidebar__legend']}>КОЛИЧЕСТВО ПЕРЕСАДОК</legend>

      <div className={classes['sidebar__item']}>
        <input type="checkbox" id="all" name="all" className={classes['sidebar__item-checkbox']} />
        <label htmlFor="all" className={classes['sidebar__item-label']}>
          Все
        </label>
      </div>

      <div className={classes['sidebar__item']}>
        <input type="checkbox" id="nonStopFlight" name="nonStopFlight" className={classes['sidebar__item-checkbox']} />
        <label htmlFor="nonStopFlight" className={classes['sidebar__item-label']}>
          Без пересадок
        </label>
      </div>

      <div className={classes['sidebar__item']}>
        <input type="checkbox" id="oneTransfer" name="oneTransfer" className={classes['sidebar__item-checkbox']} />
        <label htmlFor="oneTransfer" className={classes['sidebar__item-label']}>
          1 пересадка
        </label>
      </div>

      <div className={classes['sidebar__item']}>
        <input type="checkbox" id="twoTransfer" name="twoTransfer" className={classes['sidebar__item-checkbox']} />
        <label htmlFor="twoTransfer" className={classes['sidebar__item-label']}>
          2 пересадки
        </label>
      </div>

      <div className={classes['sidebar__item']}>
        <input type="checkbox" id="threeTransfer" name="threeTransfer" className={classes['sidebar__item-checkbox']} />
        <label htmlFor="threeTransfer" className={classes['sidebar__item-label']}>
          3 пересадки
        </label>
      </div>
    </div>
  )
}

export default Sidebar
