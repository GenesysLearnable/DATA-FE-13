import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import styles from "./FaqComponent.module.css"
import { FaQ } from "react-icons/fa6";

function FAQComponent({title, answer}){
    const [answerVisible, setAnswerVisible] = useState(true);
    return(
        <>
            <header className={styles.answerHeader} onClick={() => setAnswerVisible(!answerVisible)}>
                <h2 className={styles.answerHeading}>{title}</h2>
                <div>
                    {
                       answerVisible ?   <FaChevronUp/> : <FaChevronDown/>
                    }
                </div>
            </header>
            <div className={ answerVisible ? styles.answerHidden : styles.answerExpanded}>
                {answer}
            </div>
            {/* <article>
                    <section>
                        <header className={styles.answerHeader}>
                            <h2 className={styles.answerHeading}>What  is the purpose of Media Hub?</h2>
                            <div onClick={() => setAnswerVisible(!answerVisible)}>
                                {
                                   answerVisible ?   <FaChevronUp/> : <FaChevronDown/>
                                }
                            </div>
                        </header>
                        <div className={ answerVisible ? styles.answerContent : styles.answerExpanded}>
                            Media Hub is a centralized platform where users can manage their playlists and access content from multiple streaming services in one convenient location. It aims to streamline the browsing and playback experience, eliminating the need to switch between various apps.
                        </div>
                    </section>
                    <section>
                        <header className={styles.answerHeader}>
                            <h2 className={styles.answerHeading}>What streaming platform does  Media Hub support?</h2>
                            <div onClick={() => setAnswerVisible(!answerVisible)}>
                                {
                                   answerVisible ?   <FaChevronUp/> : <FaChevronDown/>
                                }
                            </div>
                        </header>
                        <div className={ answerVisible ? styles.answerContent : styles.answerExpanded}>
                            Media Hub integrates with a wide range of popular streaming services, including Netflix and Spotify,. We continuously work to expand our list of supported platforms to cater to the diverse preferences of our users.
                        </div>
                    </section>
                    <section>
                        <header className={styles.answerHeader}>
                            <h2 className={styles.answerHeading}>How can I access my existing playlist from other streaming platforms on Media Hub?</h2>
                            <div onClick={() => setAnswerVisible(!answerVisible)}>
                                {
                                   answerVisible ?   <FaChevronUp/> : <FaChevronDown/>
                                }
                            </div>
                        </header>
                        <div className={ answerVisible ? styles.answerContent : styles.answerExpanded}>
                            Users can create, customize, and organize playlists across different content categories, such as music, movies, series, and podcasts. They have the flexibility to add, remove, or reorder items within their playlists and can even collaborate with others by sharing playlists.
                        </div>
                    </section>
                    <section>
                        <header className={styles.answerHeader}>
                            <h2 className={styles.answerHeading}>Is there a limit to the number of streaming accounts I can link to Media Hub?</h2>
                            <div onClick={() => setAnswerVisible(!answerVisible)}>
                                {
                                   answerVisible ?   <FaChevronUp/> : <FaChevronDown/>
                                }
                            </div>
                        </header>
                        <div className={ answerVisible ? styles.answerContent : styles.answerExpanded}>
                            There is no limit to the number of streaming accounts you can link to the media hub. Whether you have one or multiple accounts across different platforms, you can connect them all to enjoy a unified streaming experience.
                        </div>
                    </section>
                    <section>
                        <header className={styles.answerHeader}>
                            <h2 className={styles.answerHeading}>Is Media Hub available on all devices?</h2>
                            <div onClick={() => setAnswerVisible(!answerVisible)}>
                                {
                                   answerVisible ?   <FaChevronUp/> : <FaChevronDown/>
                                }
                            </div>
                        </header>
                        <div className={ answerVisible ? styles.answerContent : styles.answerExpanded}>
                            Our media hub is designed to be accessible across a wide range of devices, including smartphones, tablets, computers, smart TVs, and streaming devices. You can enjoy seamless access to your playlists and content from anywhere, anytime
                        </div>
                    </section>
                    <section>
                        <header className={styles.answerHeader}>
                            <h2 className={styles.answerHeading}>How does  Media Hub ensure privacy and security?</h2>
                            <div onClick={() => setAnswerVisible(!answerVisible)}>
                                {
                                   answerVisible ?   <FaChevronUp/> : <FaChevronDown/>
                                }
                            </div>
                        </header>
                        <div className={ answerVisible ? styles.answerContent : styles.answerExpanded}>
                            We prioritize the privacy and security of our users' data. Our platform adheres to strict security protocols and encryption standards to safeguard personal information and account details. Additionally, we offer robust privacy settings and controls for users to manage their data preferences effectively.
                        </div>
                    </section>
                    <section>
                        <header className={styles.answerHeader}>
                            <h2 className={styles.answerHeading}>How frequently is the Media Hub updated with new features?</h2>
                            <div onClick={() => setAnswerVisible(!answerVisible)}>
                                {
                                   answerVisible ?   <FaChevronUp/> : <FaChevronDown/>
                                }
                            </div>
                        </header>
                        <div className={ answerVisible ? styles.answerContent : styles.answerExpanded}>
                            We are committed to continually improving and enhancing the media hub experience for our users. Our team regularly releases updates with new features, performance optimizations, and bug fixes to ensure a seamless and enjoyable streaming experience.
                        </div>
                    </section>
                    <section>
                        <header className={styles.answerHeader}>
                            <h2 className={styles.answerHeading}>How can I provide feedback or report issues with the Media Hub?</h2>
                            <div onClick={() => setAnswerVisible(!answerVisible)}>
                                {
                                   answerVisible ?   <FaChevronUp/> : <FaChevronDown/>
                                }
                            </div>
                        </header>
                        <div className={ answerVisible ? styles.answerContent : styles.answerExpanded}>
                            We welcome feedback from our users and encourage you to reach out to our support team with any questions, suggestions, or concerns. You can easily submit feedback or report issues through our website or within the media hub app itself. Your input helps us enhance the platform and provide the best possible experience for all users.
                        </div>
                    </section>
                </article> */}
        </>
    );
}
export default FAQComponent;