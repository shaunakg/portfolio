
import styles from '../styles/Header.module.css';

const Header = ({ imgurl, link, imgalt = "Main srg.codes logo" }) => (
    <header className={styles.header}>
        <a title="Link back to srg.codes" href={link || "https://srg.codes"}>
            <img alt={imgalt} src={imgurl || "https://cdn.srg.codes/images/icon/icon-512.png"}/>
        </a>
    </header>
)

export default Header