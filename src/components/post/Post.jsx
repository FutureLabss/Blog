import "./post.css"

export default function Post(props) {
    return (
        <div className="post">
            <img className="postImg" src="https://images.pexels.com/photos/4049870/pexels-photo-4049870.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" srcset=""/>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCats">MUSIC</span>
                    <span className="postCats">LIFE</span>
                </div>
                <span className="postTitle">
                    {props.post.title}
                </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc"> {props.post.description} </p>

        </div>
    )
}
