import { FC } from "react";
import { Link } from "react-router-dom";
import { getRoutePath } from "routes";
import { PathNames } from "helpers/types";

const Home: FC = () => {
    return (
        <>
            <div className="container">
                <Link to={getRoutePath(PathNames.botsWorkspace)}>Bot workspace</Link>
                <br />
                <Link to={getRoutePath(PathNames.botsDashboard)}>bots Dashbaord</Link>
                <br />
                <Link to={getRoutePath(PathNames.taskWorkspace)}>Task workspace</Link>
                <br />
                <Link to={getRoutePath(PathNames.emailTemplateEditor)}>Create email template</Link>
                <br />
                <Link to={getRoutePath(PathNames.emailTemplate)}>Template list</Link>
                <br />
            </div>
        </>
    );
};

export default Home;
