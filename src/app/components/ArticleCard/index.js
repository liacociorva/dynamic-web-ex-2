"use client";
import Link from "next/link"
import styles from "./articleCard.module.css";
const ArticleCard = ({description, title, date, imageAlt, imageSrc, id}) => {
    
    return (
        <div className={styles.articleCard}>
            <div className={styles.articleImage}>
                <img src={imageSrc} alt={imageAlt}/>
            </div>
            <div className={styles.articleContent}>
            <h2>{title}</h2>
            <p>{date}</p>
            <p>{description}</p>
            <p><Link href={`article/${id}`}>Read More</Link></p>
            </div>
        </div>
    );
};

export default ArticleCard;