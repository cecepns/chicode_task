import styles from './sidebar.module.scss'

export default function Sidebar() {
    return (
        <sidebar className={styles['sidebar']}>
            <ul>
                <li> <img src="./assets/icon/user.svg" alt=""/>Users</li>
                <li> <img src="./assets/icon/skill-development.svg" alt=""/>Skills</li>
                <li> <img src="./assets/icon/profit-report.svg" alt=""/>Reports</li>
                <li> <img src="./assets/icon/analytics.svg" alt=""/>Analytics</li>
                <li> <img src="./assets/icon/megaphone.svg" alt=""/>Announcement</li>
            </ul>
        </sidebar>
    )
}