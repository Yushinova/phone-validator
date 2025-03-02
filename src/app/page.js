"use client"
import {PhoneValidator} from "./component/ValidatorForm"
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.css';


export default function Home() {
  return (
    <div className={styles.page}>
     <PhoneValidator/>
    </div>
  );
}
