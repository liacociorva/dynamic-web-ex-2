
import {useRouter} from "next/router";
import Data from '../../app/components/data';
import styles from '../../app/page.module.css'

export default function Article() {

    const router = useRouter();
    const slug = router.query.slug;
    const articleData = Data.find((val) => val.id === slug)

    if (!articleData) return null;

    return (
        <main className = {styles.main} >
            <h1>Article</h1>
            <p>{articleData.title}</p>
            <p>{new Date (articleData.publishedDate).toDateString()} </p>
            <p>{articleData.blurb}</p>
            <p className = {styles.articleContent}> {articleData.articleText.map((text) => (<p>{text.data}</p>))} </p>

        </main>
    );
}