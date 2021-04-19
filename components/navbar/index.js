import styles from './navbar.module.scss'

export default function Navbar() {
    return (
        <navbar className={styles['navbar']}>
            <div className={styles['navbar__logo']}>
                <img src="./assets/image/chicode.png"/>
            </div>
            <div className={styles['navbar__menu']}>

            </div>
        </navbar>
    )
}