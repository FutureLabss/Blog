import "./post.css"
import { Link } from "react-router-dom"

export default function Post(props) {
    return (
       
        <div className="post">
             <Link to="/single">
            <img className="postImg" src="https://images.pexels.com/photos/4288671/pexels-photo-4288671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" srcset=""/>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCats">MUSIC  |</span>
                    <span className="postCats">|LIFESTYLE</span>
                </div>
                <span className="postTitle">
                    {props.post.title}
                </span>
                <hr/>
                <span className="postDate">20 seconds ago</span>
            </div>
            <p className="postDesc"> {props.post.description} </p>
            </Link>
        </div>
      
    )
}

