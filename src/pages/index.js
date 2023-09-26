"use client";

import Data from "../app/components/data";
import styles from "../app/page.module.css";
import ArticleCard from '../app/components/ArticleCard';

export default function Home() {
  const projectName = "I Love Articles!!";
  

  return (
    <main className={styles.main}>
    
        <h1>{projectName}</h1>
        {Data.map ((article) => (
        <ArticleCard 
        key={article.id}
        title={article.title} 
        description = {article.blurb}
        date = {new Date (article.publishedDate).toDateString()} 
        imageSrc = {article.image.url} 
        imageAlt={article.image.alt} 
        id = {article.id}
        />
      ))}
    </main>
  )
}
