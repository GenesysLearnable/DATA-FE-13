import LogoImage from "../Assets/Logo Text.svg"
import styles from './Logo.module.css'


function Logo(){
    return(
        <main className={styles.logo}>
            <img src={LogoImage} className={styles.logoImage} alt="logo"/>
            <span className={styles.logoText}>
                Media Hub
            </span>
        </main>
    );
}
export default Logo