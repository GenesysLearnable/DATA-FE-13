import styles from "./SignUpHeader.css"
import Logo from "./Logo";

function SignUpHeader(){
    return(
        <main className={styles.header}>
            <Logo/>
            <button className={styles.signup}>
                Sign up
            </button>
        </main>
    );
}
export default SignUpHeader