import styles from './Navigation.module.css';

const Navigation = ({navigateTo}) => {
    return (
        <nav>
            <ul className={styles.navigation}>
                <li><button onClick={() => navigateTo('home')}>Home</button></li>
                <li><button onClick={() => navigateTo('apple-music')}>Apple-music</button></li>
                <li><button onClick={() => navigateTo('spotify')}>Spotify</button></li>
            </ul>
        </nav>
    );
};

export default Navigation;