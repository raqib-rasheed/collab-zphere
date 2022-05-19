import React, { FC } from "react";
import { Link } from "react-router-dom";

const Home: FC = () => {
    return (
        <div className="container">
            <Link to="/bots-workspace">Bot workspace</Link>
            <br />
            <Link to="/tasks-workspace">Task workspace</Link>
            <br />
            <Link to="/admin-template-create">Create email template</Link>
            <br />
        </div>
    );
};

export default Home;
