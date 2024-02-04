import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <p className={styles.copyrigth}>
        &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
      </p>
    </footer>
  );
}
export default Footer;
