import "./topbar.css"
import { Link } from "react-router-dom"

export default function Topbar() {
    const user = false;
    return (
        <div className="top">
          <div className="topleft">
              <i className="topIcon fab fa-facebook-square" aria-hidden="true"></i>
              <i className="topIcon fab fa-twitter-square" aria-hidden="true"></i>
              <i className="topIcon fab fa-instagram" aria-hidden="true"></i>
              <i className="topIcon fab fa-pinterest-square" aria-hidden="true"></i>
          </div>
          <div className="topcenter"><ul className="topList">
              <li className="topListItem">
                  <Link className="link" to="/">HOME</Link>
              </li>
              <li className="topListItem">
              <Link className="link" to="/singlePost">ABOUT</Link>
              </li>
              <li className="topListItem">
              <Link className="link" to="/settings">SETTINGS</Link>
              </li>
              <li className="topListItem">
              <Link className="link" to="/write">WRITE</Link>

              </li>
              <li className="topListItem">
                  {user && "LOGOUT"}
              </li>
             
              </ul>
              </div>
          <div className="topright">
              {
                  user ? (
                    <img className="topImg" src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" srcset=""/>
                  ) : (
                      <ul className="topList">
                          <li className="topListItem">
                          <Link className="link" to="/login">LOGIN</Link>
                          </li>
                          <li className="topListItem">
                          <Link className="link" to="/register">REGISTER</Link>
                          </li>
                      </ul>
                  )
              }
              
              <i className="topSearchIcon fas fa-search" aria-hidden="true"></i>
          </div>
        </div>
    )
}
