import { useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import styles from './NewPassword.module.css'
import SignUpHeader from '../Components/SignupHeader';



function NewPassword(){
    const [password, setPassword] = useState('');
    const[confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    return(
        <main >
            <header>
                <SignUpHeader/>
            </header>
            <section className={styles.body}>
                <h1 className={styles.h1}>Set New Password !</h1>
                <form className={styles.form} id='form'> 
                    <p className={styles.label}>Set the new password for your account.</p>
                    <div className={styles.formGroup}>
                        <input 
                        id='password'
                        className={styles.input}  
                        type={ passwordVisible ? "text":"password"} 
                        value={password} 
                        placeholder="New Password" 
                        onChange={(e) => setPassword(e.target.value)} 
                        required >
                        </input>
                        <div className={styles.icon} onClick={() => setPasswordVisible(!passwordVisible)}>
                            {
                                passwordVisible ? <MdVisibilityOff/> : <MdVisibility/>
                            }
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <input 
                        id='confirm password'
                        className={styles.input}  
                        type={ confirmPasswordVisible ? "text":"password"} 
                        value={confirmPassword} 
                        placeholder="Confirm Password" 
                        onChange={(e) => setConfirmPassword(e.target.value)}  
                        required>
                        </input>
                        <div className={styles.icon} onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
                            {
                                confirmPasswordVisible ? <MdVisibilityOff/> : <MdVisibility/>
                            }
                        </div>
                    </div>
                    <button className={styles.button}>
                        Submit
                    </button>
                </form>
            </section>
        </main>
    );
}
export default NewPassword