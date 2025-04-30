import Link from "next/link";
import styles from "./orderButton.module.css";

export default function OrderButton() {
    return (
        <Link href="/sales">
            <div className={styles.orderButton}>
                <p>Заказать ремонт</p>
            </div>
        </Link>
    ) 
}