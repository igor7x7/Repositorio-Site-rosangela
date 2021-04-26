import styles from './styles.module.scss';


export function Header() {
    return (

        <header className={styles.headerContainer}>

            <button>inicio</button>
            <p className={styles.menu}>
                <button>fotos</button>
                <button>videos</button>
                <button>prints</button>
            </p>



        </header>

    );
}