import styles from "styles/layout.module.css";

export const Layout = ({ children }) => {
  return <div style={styles.container}>{children}</div>;
};

export default Layout;
