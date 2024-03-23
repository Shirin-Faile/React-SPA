import styles from './Spotify-Musicpage.module.css'

const MainSpotify = ({ songs }) => {
    return (
        <div className={styles.mainSpotify}>
            <h2>Top 10 Global Spotify Songs</h2>
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

export default MainSpotify;