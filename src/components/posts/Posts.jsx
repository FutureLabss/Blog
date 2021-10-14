import Post from "../post/Post"
import "./posts.css"
import {useState, useEffect} from 'react'
import { collection, getDocs, getDocsFromServer } from "firebase/firestore"; 
import { db } from "../../firebase";
 

export default function Posts() {


    const [posts, setposts] = useState([])

    useEffect( async()=>{
        const posts = await getDocs(collection(db, "posts"))
        const allPost = []
        if(posts.docs.length){
            posts.docs.forEach((post)=>{
                allPost.push(post.data())
            })
            setposts(allPost)
        }
        console.log(allPost.length)
    },[])
    return (
        <div className="posts">
            {
                posts.map((post)=>{
                    return <Post post={post} />
                })
            } 
        </div>
    )
}
