import classes from './Filter.module.scss'

function Filter() {
  return (
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
  )
}

export default Filter
// с селектид пока набросок
