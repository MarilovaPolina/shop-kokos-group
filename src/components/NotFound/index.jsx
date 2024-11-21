import styles from "./NotFound.module.scss"
export default function NotFound() {
    return (
        <main className={styles.root}>
            <p className="not_found_error">Ошибка 404</p>
        </main>
    );
  }
  