"use client";
import styles from './Example13.module.css';
export default function UserProfile(){
    return(
        <div>
            <h1 classsName={styles.h1}>User Profile</h1>
            <p classsName={styles.name}>Name:MaSu</p>
            <input className={styles.userInput}/>
        </div>
    );
}