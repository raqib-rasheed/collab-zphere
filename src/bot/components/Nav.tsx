import { FC } from "react";
import { Link } from "react-router-dom";
import { zphereIcon } from "bot/helpers/assets/Images";
import { getRoutePath, routes } from "bot/routes";
import { PathNames } from "bot/helpers/types";
import { useStoreState } from "bot/helpers/store";
import { zphereBgImg } from "bot/helpers/assets/Images";

type Props = {
    showBottomSection: boolean;
};

export const Nav: FC<Props> = ({ showBottomSection }) => {
    const user = useStoreState((state) => state.userStore.user);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <div className="navbar-left">
                        <a className="navbar-brand" href="#">
                            <img src={zphereIcon} alt="icon" />
                        </a>
                    </div>
                    <div className="navbar-right">
                        {user === null && <Link to={getRoutePath(PathNames.login, routes, null)}>Login</Link>}
                        {user !== null && <Link to={getRoutePath(PathNames.apiKey)}>Api key</Link>}
                        {user !== null && <a href="#">Logout</a>}
                    </div>
                </div>
            </nav>

            {showBottomSection && (
                <div className="nav-bottom-section" style={{ backgroundImage: `url(${zphereBgImg})` }}></div>
            )}
        </>
    );
    // return head
};

export default Nav;
