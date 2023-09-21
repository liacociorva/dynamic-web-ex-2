"use client";

import styles from "./articleCard.module.css";
const ArticleCard = ({description, title, date, imageAlt, imageSrc, link}) => {
    
    return (
        <div className={styles.articleCard}>
            <div className={styles.articleImage}>
                <img src={imageSrc} alt={imageAlt}/>
            </div>
            <div className={styles.articleContent}>
            <h2>{title}</h2>
            <p>{date}</p>
            <p>{description}</p>
            <p>{link}</p>
            </div>
        </div>
    );
};

export default ArticleCard;