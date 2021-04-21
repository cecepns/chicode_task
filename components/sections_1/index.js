import styles from './section1.module.scss'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import ('./child/chart'), {ssr: false})
const Chart2 = dynamic(() => import ('./child/chart2'), {ssr: false})

export default function Sections1({country, cases, death}) {
    console.log(cases)
    return (
        <section className={styles['wrapper']}>
            <div className={styles['wrapper__wrapleft']}>
                <h1 className={styles['wrapper__title']}>
                    Chicode Home
                </h1>
                <div className={styles['wrapper__left']}>

                    <div className={styles['wrapper__left--cta']}>
                        <ul className={styles['active']}>
                            <li className={styles['wrapper__left--cta--title']}>
                                Users
                            </li>
                            <li className={styles['wrapper__left--cta--count']}>
                                <strong>
                                    58K
                                </strong>
                            </li>
                            <li className={styles['wrapper__left--cta--presentase']}>
                                <span className={styles['green']}>
                                    &#8593; 0,2%
                                </span>
                            </li>
                            <li className={styles['wrapper__left--cta--views']}>
                                views 7 days
                            </li>
                        </ul>

                        <ul>
                            <li className={styles['wrapper__left--cta--title']}>
                                Cours Completed
                            </li>
                            <li className={styles['wrapper__left--cta--count']}>
                                5,700
                            </li>
                            <li className={styles['wrapper__left--cta--presentase']}>

                                <span className={styles['green']}>
                                    &#8593; 0,2%
                                </span>

                            </li>
                        </ul>
                        <ul>
                            <li className={styles['wrapper__left--cta--title']}>
                                Learning Plan Completed
                            </li>
                            <li className={styles['wrapper__left--cta--count']}>
                                1,120
                            </li>
                            <li className={styles['wrapper__left--cta--presentase']}>
                                <span className={styles['red']}>
                                    &#8595; 0,4%
                                </span>

                            </li>
                        </ul>
                        <ul>
                            <li className={styles['wrapper__left--cta--title']}>
                                Learning Hour
                            </li>
                            <li className={styles['wrapper__left--cta--count']}>
                                22m 40s
                            </li>
                            <li className={styles['wrapper__left--cta--presentase']}>
                                <span className={styles['green']}>
                                    &#8593; 0,2%
                                </span>

                            </li>
                        </ul>

                    </div>
                    <div className={styles['wrapper__left--cta--card']}>
                        <Chart country={country} cases={cases} death={death}/>
                        <div className={styles['wrapper__left--cta--report']}>
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
            </div>
            <div className={styles['wrapper__right']}>
                <span className={styles['composition']}>
                    Active Users right now
                </span>
                <h1 className={styles['wrapper__right--title']}>
                    {cases.reduce((acc, curr) => {
                        return acc + curr
                    }, 0)}
                </h1>
                <span className={styles['composition']}>
                    Page views per minute
                </span>

                <Chart2 country={country} cases={cases} death={death}/>

                <div className={styles['wrapper__right--cta']}>

                    <div className={styles['wrapper__right--cta--title']}>
                        <span>Top Active Pages</span>
                        <span>Active users</span>
                    </div>
                    <div className={styles['wrapper__right--cta--item']}>
                        <ul>
                            <li>
                                <span>/#/</span>
                                <span>65</span>
                            </li>
                            <li>
                                <span>/#/learner/my_course</span>
                                <span>45</span>
                            </li>
                            <li>
                                <span>/#/learner/my_course</span>
                                <span>23</span>
                            </li>
                            <li>
                                <span>/#/learner/my_course</span>
                                <span>23</span>
                            </li>
                            <li>
                                <span>/#/learner/my_course</span>
                                <span>21</span>
                            </li>
                        </ul>

                        <h1 className={styles['wrapper__right--cta--item--report']}>
                            REAL TIME REPORT &#8594;
                        </h1>
                    </div>

                </div>

            </div>
        </section>
    )
}