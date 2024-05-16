import styles from './MainPageWidget.module.scss'
import classnames from 'classnames'
import { UserForm } from '@/features/UserForm'

const MainPageWidget = () => {
    return (
        <div className={classnames(styles.mainPageWidget)}>
            <UserForm/>
        </div>
    )
}

export default MainPageWidget