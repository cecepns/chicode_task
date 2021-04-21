import styles from './Section2.module.scss'

export default function Section2() {
    return (
        <section className={styles['wrapper']}>
            <div className={styles['wrapper__left']}>
                <h1 className={styles['wrapper__title']}>
                    What courses do your users visit ?
                </h1>
                <div className={styles['wrapper__left--card']}>
                    <table className={styles['wrapper__left--card--table']}>
                        <tr className={styles['wrapper__left--card--title']}>
                            <th>Courses</th>
                            <th>Completed</th>
                            <th>Completion %</th>
                        </tr>
                        <tbody>
                            <tr>
                                <td className={styles['green']}>
                                    Digital Marketing for Sales Person
                                </td>
                                <td>
                                    15,243
                                </td>
                                <td>
                                    86,5%
                                </td>
                            </tr>
                            <tr>
                                <td className={styles['green']}>
                                    Digital Marketing for Sales Person
                                </td>
                                <td>
                                    15,243
                                </td>
                                <td>
                                    86,5%
                                </td>
                            </tr>
                            <tr>
                                <td className={styles['green']}>
                                    Digital Marketing for Sales Person
                                </td>
                                <td>
                                    15,243
                                </td>
                                <td>
                                    86,5%
                                </td>
                            </tr>
                            <tr>
                                <td className={styles['green']}>
                                    Digital Marketing for Sales Person
                                </td>
                                <td>
                                    15,243
                                </td>
                                <td>
                                    86,5%
                                </td>
                            </tr>
                            <tr>
                                <td className={styles['green']}>
                                    Digital Marketing for Sales Person
                                </td>
                                <td>
                                    15,243
                                </td>
                                <td>
                                    86,5%
                                </td>
                            </tr>
                            <tr>
                                <td className={styles['green']}>
                                    Digital Marketing for Sales Person
                                </td>
                                <td>
                                    15,243
                                </td>
                                <td>
                                    86,5%
                                </td>
                            </tr>
                        </tbody>

                    </table>
                    <div className={styles['wrapper__left--card--report']}>
                        <select>
                            <option>
                                Last 7 days
                            </option>
                            <option>
                                Last 14 days
                            </option>
                        </select>

                        <span className={styles['green']}>
                            COURSE REPORT &#8594;
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles['wrapper__right']}>
                <h1 className={styles['wrapper__title']}>
                    Who is your most active user ?
                </h1>
                <div className={styles['wrapper__right--card']}>
                    <table className={styles['wrapper__right--card--table']}>
                        <tr className={styles['wrapper__right--card--title']}>
                            <th>Courses</th>
                            <th>Completed</th>
                            <th>Points</th>
                        </tr>
                        <tbody>
                            <tr>
                                <td className={styles['green']}>
                                    Anthony Jackson
                                </td>
                                <td>
                                    15,243
                                </td>
                                <td>
                                    86,5%
                                </td>
                            </tr>
                            <tr>
                                <td className={styles['green']}>
                                    Lionel Morilian
                                </td>
                                <td>
                                    15,243
                                </td>
                                <td>
                                    86,5%
                                </td>
                            </tr>
                            <tr>
                                <td className={styles['green']}>
                                    Edan Randal
                                </td>
                                <td>
                                    15,243
                                </td>
                                <td>
                                    86,5%
                                </td>
                            </tr>
                            <tr>
                                <td className={styles['green']}>
                                    Jasper Carson
                                </td>
                                <td>
                                    15,243
                                </td>
                                <td>
                                    86,5%
                                </td>
                            </tr>
                            <tr>
                                <td className={styles['green']}>
                                    Reuben Pacheco
                                </td>
                                <td>
                                    15,243
                                </td>
                                <td>
                                    86,5%
                                </td>
                            </tr>

                        </tbody>

                    </table>

                    <div className={styles['wrapper__right--card--report']}>
                        <select>
                            <option>
                                Last 7 days
                            </option>
                            <option>
                                Last 14 days
                            </option>
                        </select>

                        <span className={styles['green']}>
                            USER REPORT &#8594;
                        </span>
                    </div>
                </div>

            </div>

        </section>
    )
}