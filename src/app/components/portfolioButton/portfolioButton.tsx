import styles from "./portfolioButton.module.css";
import Link from "next/link";

export default function PortfolioButton() {
    return (
        <Link href="/portfolio">
            <div className={styles.portfolioButton}>
                Все проекты
            </div>
        </Link>
    ) 
}