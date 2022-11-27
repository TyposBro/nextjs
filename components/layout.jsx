import styles from "styles/layout.module.css";

export const Layout = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Layout;
