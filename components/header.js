
import styles from '../styles/Header.module.css';

const Header = ({ imgurl, link }) => (
    <header className={styles.header}>
        <a href={link || "https://srg.codes"}>
            <img src={imgurl || "https://cdn.srg.codes/images/icon/icon-512.png"}/>
        </a>
    </header>
)

export default Header