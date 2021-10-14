import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://images.pexels.com/photos/6469/red-hands-woman-creative.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" srcset="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, velit, soluta quaerat voluptas
                     quia blanditiis, ipsam corrupti id delectus eligendi officia illo nisi quidem tempore natus veritatis 
                     asperiores? Ab, facilis!</p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook-square" aria-hidden="true"></i>
              <i className="sidebarIcon fab fa-twitter-square" aria-hidden="true"></i>
              <i className="sidebarIcon fab fa-instagram" aria-hidden="true"></i>
              <i className="sidebarIcon fab fa-pinterest-square" aria-hidden="true"></i>
            </div>
            </div>
        </div>
    )
}
