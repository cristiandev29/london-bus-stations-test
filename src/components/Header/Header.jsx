import { Link, useRoute } from "wouter";
import styles from "./Header.module.css";
function Header() {
  const [match, params] = useRoute("/bus-station/:id/:name");

  console.log(match);
  return (
    <div id="header" className={styles.header}>
      <h2>London TFL</h2>

      {match && (
        <Link className={styles.backLink} href="/">
          {"< Volver"}
        </Link>
      )}
    </div>
  );
}

export default Header;
