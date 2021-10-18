import "./singlePost.css"


export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src="https://images.pexels.com/photos/4049870/pexels-photo-4049870.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" srcset=""/>
                <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.  </h1>
                <div className="singlePostEdit">
                <i class="singlePostIcon far fa-edit" ></i>
                <i class="singlePostIcon far fa-trash-alt" ></i>
                </div>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Authors: <b>PEACEMAKER & BRYAN</b></span>
                    <span className="singlePostDate">1 hour ago  </span>
                  
                </div>
              <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Id corrupti esse excepturi explicabo amet nemo, 
                  velit ea repellendus blanditiis inventore magnam aperiam accusamus 
                  dolorum quidem est ab itaque quae facere!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Id corrupti esse excepturi explicabo amet nemo, 
                  velit ea repellendus blanditiis inventore magnam aperiam accusamus 
                  dolorum quidem est ab itaque quae facere!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Id corrupti esse excepturi explicabo amet nemo, 
                  velit ea repellendus blanditiis inventore magnam aperiam accusamus 
                  dolorum quidem est ab itaque quae facere!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Id corrupti esse excepturi explicabo amet nemo, 
                  velit ea repellendus blanditiis inventore magnam aperiam accusamus 
                  dolorum quidem est ab itaque quae facere!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Id corrupti esse excepturi explicabo amet nemo, 
                  velit ea repellendus blanditiis inventore magnam aperiam accusamus 
                  dolorum quidem est ab itaque quae facere!</p>

            </div>
        </div>
    )
}
