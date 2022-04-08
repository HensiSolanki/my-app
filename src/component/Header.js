// import './Header.css'

// function Header(props){
//     console.log("props ::",props.data);
//     return <div id="header">{props.data}</div>;
// }
// export default Header;



//import useState hook to create menu collapse state
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";


const Header = (props) => {
      const history = useHistory();
      const location = useLocation();
      // console.log("Test", location.pathname);
    // const { location } = props;
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)
    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  const logout = () => {
    // console.log("logout");
    localStorage.removeItem('LoginUser');
    history.push('/');
  };

  return (
    <>
    
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={location.pathname === '/about1'} icon={<FiHome />}>
               <Link to="/about1">Home</Link>
              </MenuItem>
              <MenuItem icon={<FaList />} active={ location.pathname === "/about"} ><Link to="/about">About</Link></MenuItem>
              <MenuItem icon={<FaRegHeart />} active={ location.pathname === "/parent"} ><Link to="/parent">Parent</Link></MenuItem>
              <MenuItem icon={<RiPencilLine />} active={ location.pathname === "/useStateArray"} ><Link to="/useStateArray">UseState</Link></MenuItem>
              <MenuItem icon={<BiCog />} active={ location.pathname === "/useEffect"} ><Link to="/useEffect">UseEffect</Link></MenuItem>
              <MenuItem icon={<BiCog />} active={ location.pathname === "/useStateObject"} ><Link to="/useStateObject">UseStateObject</Link></MenuItem>
              <MenuItem icon={<BiCog />} active={ location.pathname === "/clone"} ><Link to="/clone">Clone</Link></MenuItem>
              <MenuItem icon={<RiPencilLine />} active={ location.pathname === "/lifecycle"} ><Link to="/lifecycle">Life Cycle</Link></MenuItem>
              <MenuItem icon={<RiPencilLine />} active={ location.pathname === "/map"} ><Link to="/map">Map Method</Link></MenuItem>
              <MenuItem icon={<FaRegHeart />} active={ location.pathname === "/purecomponent"} ><Link to="/purecomponent">PureComponent</Link></MenuItem>
              <MenuItem icon={<FaRegHeart />} active={ location.pathname === "/usememo"} ><Link to="/usememo">UseMemo</Link></MenuItem>
              <MenuItem icon={<FaRegHeart />} active={ location.pathname === "/getapi"} ><Link to="/getapi">Get Api</Link></MenuItem>
             
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />} onClick={logout}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;