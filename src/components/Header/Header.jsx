import { Link } from "wouter";
import { useEffect, useState, useRef } from "react";
import styles from "./Header.module.css";
function Header() {
  return (
    <div id="header" className={styles.header}>
      <Link href="/" className="active">
        Home
      </Link>
      <Link href="/bus-stop/1" className="active">
        BusStop
      </Link>
    </div>
  );
}

export default Header;
