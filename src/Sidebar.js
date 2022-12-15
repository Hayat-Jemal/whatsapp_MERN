import React from "react";
import "./Sidebar.css";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import { Avatar, IconButton } from "@material-ui/core";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from "./SidebarChat";
const Sidebar = () => {
  return (
    
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton> 
            {/* the IconButton it makes clickable */}
            < DonutLargeIcon />
          </IconButton>
          <IconButton>
          <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreHorizIcon/>
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchIcon />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
      
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        

      </div>
    </div>
  );
};

export default Sidebar;
