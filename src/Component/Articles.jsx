import React,{useState,useEffect} from 'react';
import  SkeletetonArticle from "../skeletons/SkeletetonArticle"

const Articles = () => {

    const [articles, setArticles] = useState(null)

    useEffect(() => {
       
        setTimeout( async() => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();
            console.log(data)
            setArticles(data);
        }, 4000);

    }, [])


    return (
        <div className="article">
           <h2>Articles</h2>

            {
                articles && articles.map((article)=>(
                    <div className="article__post" key={article.id}>
                <h3>{article.title}</h3>
                <p>{article.body}</p>
           </div>

                ))
            }

            {
                !articles && [1,2,3,4,5,6,7,8].map((n,ind)=> <SkeletetonArticle key={ind} /> ) 
            }

           

        </div>
    )
}

export default Articles
