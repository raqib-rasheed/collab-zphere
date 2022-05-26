import React, { FC } from "react";
import Search from './Search';
import ActionButtons from './Actionbuttons';
import DragableComponents from 'routes/BotsWorkspace/sidebar/DragableComponents';


const Sidebar: FC = () => {
  return (
    <div className="sidebar">
        <Search />
        <ActionButtons />
        <DragableComponents />
    </div>
  );
};


export {default as elements} from 'routes/BotsWorkspace/sidebar/DragableElements'
export default Sidebar;
