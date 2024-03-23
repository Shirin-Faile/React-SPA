import styles from './Apple-Musicpage.module.css'

const MainApple = ({ songs }) => {
    return (
        <div className={styles.mainApple}>
            <h2>Top 10 Global Apple Songs</h2>
            {songs.map((song, index) => (
                <div key={index} className={styles.song}>
                    <img src={song.image} />
                    <div className={styles.details}>
                        <h3>{song.title}</h3>
                        <p>{song.artist}</p>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default MainApple;