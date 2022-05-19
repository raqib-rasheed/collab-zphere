import React, { FC } from "react";
import { Link } from "react-router-dom";

const TaskWorkspace: FC = () => {
    return (
        <div className="container">
            <h1>Tasks</h1>
            <Link to="/tasks-workspace/special-day">Special Day Task</Link>
            {/* <Outlet /> */}
        </div>
    );
};
export default TaskWorkspace;
