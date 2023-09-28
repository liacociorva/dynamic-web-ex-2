
import {useRouter} from "next/router";
import Data from '../../app/components/data';
import styles from "../article/article.module.css";
import "../../app/globals.css"

export default function Article() {

    const router = useRouter();
    const slug = router.query.slug;
    const articleData = Data.find((val) => val.id === slug)

    if (!articleData) return null;

    return (
        <main className = {styles.backgroundWrapper}>
        <div className = {styles.articleHeader} style={{backgroundImage: `url('${articleData.image.url}')`}} >
            <div className = {styles.articleWrapper}>
            <h1>{articleData.title}</h1>
            <p>{new Date (articleData.publishedDate).toDateString()} </p>
            <p className = {styles.articleHeaderBlurb}>{articleData.blurb}</p>
            </div>
            </div>
        <div className = {styles.articleContent}>  
        <div className = {styles.articleWrapper}>
            {articleData.articleText.map(
                (textChunk) => {
                    switch(textChunk.type){
                    case 'p':
                    return <p>{textChunk.data}</p>
                    case 'h2':
                    return <h2>{textChunk.data}</h2>
                    case 'h3':
                    return <h3>{textChunk.data}</h3>
                    default:          
                    return <p>{textChunk.data}</p>          }
                }
            )}

        </div>
        </div>
        </main>
    );
}