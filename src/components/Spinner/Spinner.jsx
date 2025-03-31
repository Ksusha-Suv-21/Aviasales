import { useSelector } from 'react-redux'
import { Spin } from 'antd'
import classes from './Spinner.module.scss'

const Spinner = () => {
  const spinner = useSelector((state) => state.apiReducer.isLoading)
  if (spinner === true) {
    return (
      <div className={classes.loader}>
        <Spin size="large" className="loader" />
      </div>
    )
  }
}

export default Spinner
