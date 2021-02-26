import styles from '../styles/Layout.module.css'
import Link from 'next/link'

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <p className={styles.my_mail}>shahin.mahmud.dev@gmai.com</p>
                {children}
                {/* <div className={styles.main}> */}
                    <div>
                        <Link href="/" className={styles.link}>
                            Home
                        </Link>
                        <Link href="/about" className={styles.link}>
                            About
                        </Link>
                    </div>
                {/* </div> */}
            </main>
        </div>
    );
};

export default Layout;