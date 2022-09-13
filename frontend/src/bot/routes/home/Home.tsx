import { FC } from "react";
import { Link } from "react-router-dom";
import { getRoutePath } from "bot/routes";
import { PathNames } from "bot/helpers/types";

const Home: FC = () => {
    console.log(getRoutePath(PathNames.taskWorkspace))
    return (
        <>
            <div className="container">
                {/* <Link to={getRoutePath(PathNames.botsWorkspace)}>Bot workspace</Link> */}
                <br />
                <Link to={getRoutePath(PathNames.botsDashboard)}>bots Dashbaord</Link>
                <br />
                <Link to="/app/tasks-workspace/">Task workspace</Link>
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
