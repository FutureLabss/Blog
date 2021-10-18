import Post from "../post/Post"
import "./posts.css"
import {useState} from 'react'
import { collection, getDocs,  } from "firebase/firestore"; 
import { db } from "../../firebase";
 

export default function Posts() {


    const [posts, setposts] = useState([])

    async function postThis() {
        const posts = await getDocs(collection(db, "posts"))
        const allPost = []
        if(posts.docs.length){
            posts.docs.forEach((post)=>{
                allPost.push(post.data())
            })
            setposts(allPost)
        }
        console.log(allPost.length)
    }
    postThis()
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
