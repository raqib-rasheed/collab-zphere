import { Route } from "react-router-dom";
import { PathNames, TRoute } from "helpers/types";
import { routes } from "routes";

/*
    never import like 'routes/utils'
    always import from 'routes'
    else will hit error : Uncaught TypeError: Cannot read properties of undefined (reading 'default') | ReferenceError: Cannot access '__WEBPACK_DEFAULT_EXPORT__' before initialization
    days wasted to find solution: 2 days
 */

export function makeRoutesFromObject(route: TRoute, rootRouteName: string | null) {
    // console.log('make called')
    return Object.keys(route).map((r, i) => {
        const path = rootRouteName !== null ? rootRouteName + route[r].path : route[r].path;
        if (r === "index") return <Route element={route[r].element} key={i} index />;
        return (
            <Route
                path={route[r].path !== "" ? path : null}
                index={route[r].index ? true : false}
                element={route[r].element}
                key={i}
            >
                {route[r].routes && makeRoutesFromObject(route[r].routes, path)}
            </Route>
        );
    });
}

export function getRoutePath(name: PathNames, route: TRoute = routes, rootRouteName: string | null = null) {
    const keys = Object.keys(route);
    var path = "";
    for (var i = 0; i < keys.length; i++) {
        const newRootPath = rootRouteName !== null ? rootRouteName + route[keys[i]].path : route[keys[i]].path;
        if (route[keys[i]].name === name) {
            path = newRootPath;
            break;
        } else if (route[keys[i]].routes) path = getRoutePath(name, route[keys[i]].routes, newRootPath);
    }
    return path;
}