import React from "react";
import styles from "./NotFound.module.scss"
const NotFound: React.FC = () => {
    return (
        <main className={styles.root}>
            <p className="not_found_error">Ошибка 404</p>
        </main>
    );
  }
  export default NotFound;