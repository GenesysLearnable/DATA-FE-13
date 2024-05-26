// import { useState } from "react";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import FAQComponent from "../Components/FaqComponent";

import NavBar from "../Components/NavBar";
import styles from "./faq.module.css";

function Faq() {
  return (
    <>
      <div className={styles.body}>
        <NavBar />
        <main className={styles.main}>
          <h1 className={styles.header}>Frequently Asked Questions (FAQ)</h1>
          <article>
            <FAQComponent
              title="What  is the purpose of Media Hub?"
              answer="Media Hub is a centralized platform where users can manage their playlists and access content from multiple streaming services in one convenient location. It aims to streamline the browsing and playback experience, eliminating the need to switch between various apps."
            />

            <FAQComponent
              title="What streaming platform does  Media Hub support?"
              answer="Media Hub integrates with a wide range of popular streaming services, including Netflix and Spotify,. We continuously work to expand our list of supported platforms to cater to the diverse preferences of our users."
            />

            <FAQComponent
              title="How can I access my existing playlist from other streaming platforms on Media Hub?"
              answer="Users can create, customize, and organize playlists across different content categories, such as music, movies, series, and podcasts. They have the flexibility to add, remove, or reorder items within their playlists and can even collaborate with others by sharing playlists."
            />

            <FAQComponent
              title="Is there a limit to the number of streaming accounts I can link to Media Hub?"
              answer="There is no limit to the number of streaming accounts you can link to the media hub. Whether you have one or multiple accounts across different platforms, you can connect them all to enjoy a unified streaming experience."
            />

            <FAQComponent
              title="Is Media Hub available on all devices?"
              answer="Our media hub is designed to be accessible across a wide range of devices, including smartphones, tablets, computers, smart TVs, and streaming devices. You can enjoy seamless access to your playlists and content from anywhere, anytime."
            />

            <FAQComponent
              title="How does  Media Hub ensure privacy and security?"
              answer=" We prioritize the privacy and security of our users' data. Our platform adheres to strict security protocols and encryption standards to safeguard personal information and account details. Additionally, we offer robust privacy settings and controls for users to manage their data preferences effectively."
            />

            <FAQComponent
              title="How frequently is the Media Hub updated with new features?"
              answer="We are committed to continually improving and enhancing the media hub experience for our users. Our team regularly releases updates with new features, performance optimizations, and bug fixes to ensure a seamless and enjoyable streaming experience."
            />

            <FAQComponent
              title="How can I provide feedback or report issues with the Media Hub?"
              answer="We welcome feedback from our users and encourage you to reach out to our support team with any questions, suggestions, or concerns. You can easily submit feedback or report issues through our website or within the media hub app itself. Your input helps us enhance the platform and provide the best possible experience for all users."
            />
          </article>
        </main>
      </div>
    </>
  );
}
export default Faq;
