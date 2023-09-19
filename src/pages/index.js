"use client";
import styles from '../app/page.module.css'
import Data from "../app/components/data"
import ArticleCard from '../app/components/ArticleCard';

export default function Home() {
  const projectName = "Exercise Two";
  

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>{projectName}</h1>
        <ArticleCard title="Cool Title"/>
        <ArticleCard title="Another Cool Title" description="Cool description"/>
      </div>
    </main>
  )
}
