import styles from './Section3.module.scss'
import dynamic from 'next/dynamic'
const Chart3 = dynamic(() => import ('./child/chart3'), {ssr: false})

export default function Section3() {
    return (
        <div className={styles['wrapper']}>

            <h1 className={styles['wrapper__title']}>How's your social activity</h1>
            <div className={styles['wrapper__card']}>

                <div className={styles['wrapper__card--cta']}>
                    <ul className={styles['active']}>

                        <li className={styles['wrapper__card--cta--title']}>
                            <strong>
                                Discussion
                            </strong>
                        </li>

                    </ul>

                    <ul>

                        <li className={styles['wrapper__card--cta--title']}>
                            <strong>
                                Blog Post
                            </strong>
                        </li>

                    </ul>

                    <ul>

                        <li className={styles['wrapper__card--cta--title']}>
                            <strong>
                                Questions and Answer
                            </strong>
                        </li>

                    </ul>
                </div>
                <Chart3/>
                <div className={styles['wrapper__card--report']}>
                    <select>
                        <option>
                            Last 7 days
                        </option>
                        <option>
                            Last 14 days
                        </option>
                    </select>

                </div>
            </div>
        </div>
    )
}