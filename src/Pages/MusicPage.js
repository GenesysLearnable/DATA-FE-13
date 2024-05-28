import { AiOutlineSearch } from "react-icons/ai";
import NavBar from "../Components/NavBar";
import styles from "./MusicPage.module.css";

function MediaTracking() {
  return (
    <main className={styles.main}>
      <NavBar />
      <article className={styles.body}>
        <h1 className={styles.h1}> Add music manually</h1>
        <section className={styles.searchGroup}>
          <div className={styles.icon}>
            <AiOutlineSearch size={20} />
          </div>
          <input
            id="search"
            className={styles.input}
            type="search"
            placeholder="Search for the music you've listened to"
          ></input>
        </section>
        <section>
          <button className={styles.select}>Music</button>
          <button className={styles.select}>Movies</button>
        </section>
        <section>
          <select className={styles.genre} id="genre">
            <option value="0">Genre</option>
            <option value="1">Afro beat</option>
            <option value="2">Pop</option>
            <option value="3">Rap</option>
            <option value="4">Christian & Gospel</option>
            <option value="5">Hip hop</option>
            <option value="6">Rock</option>
            <option value="7">Christian & Gospel</option>
          </select>
        </section>
        <section>
          <h2>Added from search</h2>
        </section>
      </article>
    </main>
  );
}

export default MediaTracking;
