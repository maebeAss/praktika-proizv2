import styles from "./page.module.css";
import Link from "next/link";
import Header from "@/app/components/header/header";

export default function Sales() {
    return (
        <div className={styles.page}>
            <Header></Header>
        </div>
    ) 
}