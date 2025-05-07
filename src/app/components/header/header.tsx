import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css"

export default function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <Link
                href="/">
                    <Image
                    width={153}
                    height={50}
                    className={styles.logo}
                    src="./png/Logo.png"
                    alt="Сочи стройка logo"
                    priority>
                    </Image>
                </Link>
                <ul>
                    <li>
                        <Link
                        href="/catalog"
                        className={styles.navLink}>
                            Каталог
                        </Link>
                    </li>
                    <li>
                        <Link
                        href="/portfolio"
                        className={styles.navLink}>
                            Портфолио
                        </Link>
                    </li>
                    <li>
                        <Link
                        href="/sales"
                        className={styles.navLink}>
                            Акции
                        </Link>
                    </li>
                    <li>
                        <Link
                        href="/aboutUs"
                        className={styles.navLink}>
                            О компании
                        </Link>
                    </li>
                    <li>
                        <Link
                        href="/contacts"
                        className={styles.navLink}>
                            Контакты
                        </Link>
                    </li>
                </ul>
                <div className={styles.navCont}>
                    <p>+7 (931) 724 09 42</p>
                    <p className={styles.orderButt}>Оформить заявку</p>
                </div>
            </nav>
        </header>
    ) 
}