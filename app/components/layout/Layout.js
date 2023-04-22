import Link from 'next/link'
import styles from './Layout.module.css'
const Layout = ({ children }) => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.left}>
                    <Link href='/'>BotoFood</Link>
                </div>
                <div className={styles.right}>
                    <Link href='/menu'>Menu</Link>
                    <Link href='/categories'>Categories</Link>
                </div>
            </header>
            <div className={styles.container}>
                {children}
            </div>
            <footer className={styles.footer}>
                <a href='https://Botostart.ir' target='_blank' rel='noreferrer'>BotoFood</a>
                <span>BotoFood|&copy;</span>
            </footer>
        </>
    )
}

export default Layout