import styles from '../styles/home/home.module.scss'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Section1 from '../components/sections_1'

export async function getServerSideProps() {

    const getDataApi = await fetch('https://covid19.mathdro.id/api/confirmed')
    const result = await getDataApi.json();
    const resultSlice = result.slice(0, 5)

    const country = resultSlice.map((data, index) => {
        return data.countryRegion
    })
    const cases = resultSlice.map((data, index) => {
        return data.confirmed
    })
    const death = resultSlice.map((data, index) => {
        return data.deaths
    })

    return {
        props: {
            country,
            cases,
            death
        }
    }
}

export default function Home({country, cases, death}) {
    return (
        <div className={styles['layout']}>
            <div className={styles['layout__navbar']}>
                <Navbar/>
            </div>
            <div className={styles['layout__main']}>
                <div className={styles['layout__main--sidebar']}>
                    <Sidebar/>
                </div>
                <div className={styles['layout__main--content']}>
                    <Section1 country={country} cases={cases} death={death}/>
                </div>
            </div>
        </div>
    )
}