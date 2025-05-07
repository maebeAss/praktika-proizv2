import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css"

export default function Footer () {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <Image
                width={153}
                height={50}
                className={styles.logo}
                src="./png/Logo.png"
                alt="Сочи стройка logo"
                priority
                ></Image>
                <div className={styles.text}>
                    <Link href="/gdpr" id={styles.gdpr}>Политика конфиденциальности</Link>
                    <p>©️ 2017 - 2023 Сочи-Ремонт. Все права защищены.</p>
                    <p>Разработано Студией Сайтов</p>
                </div>
            </div>
            <section className={styles.navMenu}>
                <div className={styles.service}>
                    <Link href="/catalog" className={styles.link}>Все услуги</Link>
                    <Link href="/capital" className={styles.link}>Капитальный ремонт</Link>
                    <Link href="/" className={styles.link}>Офисный ремонт</Link>
                    <Link href="/" className={styles.link}>Черновой ремонт</Link>
                    <Link href="/" className={styles.link}>Евроремонт</Link>
                </div>
                <div className={styles.navMenuContent}>
                    <Link href="/sales" className={styles.link}>Акции</Link>
                    <Link href="/aboutUs" className={styles.link}>О нас</Link>
                    <Link href="/feedback" className={styles.link}>Отзывы</Link>
                    <Link href="/portfolio" className={styles.link}>Вопрос-ответ</Link>
                    <Link href="/blog" className={styles.link}>Блог</Link>
                    <Link href="/contacts" className={styles.link}>Контакты</Link>
                    <Link href="/map" className={styles.link}>Карта сайта</Link>
                </div>
            </section>
            <section className={styles.footerContacts}>
                <div className={styles.footerContactsInfo}>
                    <div className={styles.contactsInfo}>
                        <div className={styles.textInfoCard}>
                            <p>E-mail</p>
                            <p><span>sochi-repair@gmail.com</span></p>
                        </div>
                        <div className={styles.textInfoCard}>
                            <p>Номер телефона</p>
                            <p><span>+7 (931) 724 09 42</span></p>
                        </div>
                    </div>
                    <div className={styles.quickIcoLinks}>
                        <Link href="/"><Image src="./svg/vk.svg" alt="vk logo" width={40} height={40}></Image></Link>
                        <Link href="/"><Image src="./svg/tg.svg" alt="tg logo" width={40} height={40}></Image></Link>
                        <Link href="/"><Image src="./svg/whtsapp.svg" alt="whatsapp logo" width={40} height={40}></Image></Link>
                        <Link href="/"><Image src="./svg/youtube.svg" alt="youtube logo" width={40} height={40}></Image></Link>
                        <Link href="/"><Image src="./svg/ok.svg" alt="ok logo" width={40} height={40}></Image></Link>
                    </div>
                </div>
                <div className={styles.contactButton}>
                    <p>Обратный звонок</p>
                </div>
            </section>
        </footer>
    )
}