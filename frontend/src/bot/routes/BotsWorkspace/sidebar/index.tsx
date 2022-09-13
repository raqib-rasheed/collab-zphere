import React, { FC } from "react";
import Search from './Search';
import ActionButtons from './Actionbuttons';
import DragableComponents from 'bot/routes/BotsWorkspace/sidebar/DragableComponents';


const Sidebar: FC = () => {
  return (
    <div className="sidebar">
        <Search />
        <ActionButtons />
        <DragableComponents />
    </div>
  );
};
// should export below this
export {default as elements} from 'bot/routes/BotsWorkspace/sidebar/DragableElements'

export default Sidebar;
