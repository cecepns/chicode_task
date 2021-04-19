import styles from './sidebar.module.scss'

export default function Sidebar() {
    return (
        <sidebar className={styles['sidebar']}>
            <ul>
                <li>  Users</li>
                <li> Skills</li>
                <li> Reports</li>
                <li> Analytics</li>
                <li> Announcement</li>
            </ul>
        </sidebar>
    )
}