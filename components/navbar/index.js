import styles from './navbar.module.scss'

export default function Navbar() {
    return (
        <navbar className={styles['navbar']}>
            <div className={styles['navbar__logo']}>
                <img src="./assets/image/chicode.png"/>
            </div>
            <div className={styles['navbar__menu']}>
                <div className={styles['navbar__menu--notification']}>
                    <img src="./assets/icon/bell.svg" alt=""/>
                </div>
                <div className={styles['navbar__menu--profile']}>
                    <img src="https://picsum.photos/200/300" alt=""/>
                </div>
            </div>
        </navbar>
    )
}