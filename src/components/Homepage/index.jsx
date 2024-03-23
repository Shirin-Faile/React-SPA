import styles from './Homepage.module.css'
import gifImage from '/src/assets/musicGirl.gif'

const Homepage = () => {
    return (
        <div className={styles.homePage}>
            <img src={gifImage} alt="" />
        </div>
    );
};

export default Homepage;