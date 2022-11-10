import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home() {
    return (
        <section className={styles.home_container}>
                <h1>
                Bem-Vindo a <span>Valhalla Viagens</span>
                </h1>
            <p>Procure seu Destino agora mesmo!</p>
            <LinkButton to="/newproject" text="Procurar Destino" />
        <img src={savings} alt="Costs" />
        </section>
    )
}

export default Home