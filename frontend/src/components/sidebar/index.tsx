import React, { DragEvent, FC } from "react";
import Search from './Search';
import ActionButtons from './Actionbuttons';
import MainComponents from './MainComponents';


const Sidebar: FC = () => {
  return (
    <div className="sidebar">
        <Search />
        <ActionButtons />
        <MainComponents />
      {/* <div className="component-title">Events</div>
      {sidebarComponents.events.map((element) => (
        <div
          className="component"
          onDragStart={(event: DragEvent) => onDragStart(event, element)}
          draggable
        >
          {element.name}
        </div>
      ))}
      <div className="component-title">Actions</div>
      {sidebarComponents.actions.map((element) => (
        <div
          className="component"
          onDragStart={(event: DragEvent) => onDragStart(event, element)}
          draggable
        >
          {element.name}
        </div>
      ))} */}
    </div>
  );
};

export default Sidebar;
