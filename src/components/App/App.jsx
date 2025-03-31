import classes from './App.module.scss'

import Header from '../Header/Header'
import Checkbox from '../Checkbox/Checkbox'
import Main from '../Main/Main'

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <div className={classes['app__main']}>
        <Checkbox />
        <Main />
      </div>
    </div>
  )
}

export default App
