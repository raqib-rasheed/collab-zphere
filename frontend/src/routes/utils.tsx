import { Route } from "react-router-dom";
import { ReactFlowProvider } from "react-flow-renderer";
import {
    TaskWorkspace,
    SpecialDayTaskForm,
    Home,
    Login,
    Profile,
    BotsWrokspace,
    BotsDashboard,
    SpecialDayTaskList,
    EmailTemplateEditor,
    EmailTemplateList,
} from "routes";
// import Home from 'routes/home/Home';
import { Layout } from "components";
import { PathNames } from "helpers/types";

/*
    never import like 'routes/utils'
    always import from 'routes'
    else will hit error : Uncaught TypeError: Cannot read properties of undefined (reading 'default') | ReferenceError: Cannot access '__WEBPACK_DEFAULT_EXPORT__' before initialization
    days wasted to find solution: 2 days
 */

export type TRoute = {
    path?: string;
    name?: PathNames;
    element?: JSX.Element;
    routes?: {
        [key: string]: TRoute;
    };
};

export type Routes = {
    [key: string]: TRoute;
};

export const routes: Routes = {
    main: {
        path: "/app/",
        routes: {
            index: {
                path: "",
                name: PathNames.home,
                element: (
                    <Layout>
                        <Home />
                    </Layout>
                ),
            },
            botsWorkspace: {
                path: "bots-workspace/",
                name: PathNames.botsWorkspace,
                element: (
                    <ReactFlowProvider>
                        <BotsWrokspace />
                    </ReactFlowProvider>
                ),
            },
            botsDashboard: {
                path: "bots-dashboard/",
                name: PathNames.botsDashboard,
                element: (
                    <Layout>
                        <BotsDashboard />
                    </Layout>
                ),
            },
            taskWorkspace: {
                path: "tasks-workspace/",
                routes: {
                    index: {
                        path: "",
                        name: PathNames.taskWorkspace,
                        element: (
                            <Layout>
                                <TaskWorkspace />
                            </Layout>
                        ),
                    },
                    specialDayCreate: {
                        path: "special-day/",
                        name: PathNames.specialDayCreate,
                        element: (
                            <Layout>
                                <SpecialDayTaskForm />
                            </Layout>
                        ),
                    },
                    specialDayUpdate: {
                        path: "special-day/:id/",
                        name: PathNames.specialDayUpdate,
                        element: (
                            <Layout>
                                <SpecialDayTaskForm />
                            </Layout>
                        ),
                    },
                    specialDayList: {
                        path: "special-day-list/",
                        name: PathNames.specialDayList,
                        element: (
                            <Layout>
                                <SpecialDayTaskList />
                            </Layout>
                        ),
                    },
                },
            },
            emailTemplate: {
                path: "email-template/",
                routes: {
                    index: {
                        path: "",
                        name: PathNames.emailTemplate,
                        element: <EmailTemplateList />,
                    },
                    emailTemplateEditor: {
                        path: "editor/",
                        name: PathNames.emailTemplateEditor,
                        element: <EmailTemplateEditor />,
                    },
                },
            },
            login: {
                path: "login/",
                name: PathNames.login,
                element: (
                    <Layout>
                        <Login />
                    </Layout>
                ),
            },
            user: {
                path: "user/",
                name: PathNames.user,
                element: <Profile />,
            },
        },
    },
};

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

export function getRoutePath(
    name: PathNames | string,
    route: TRoute = routes,
    rootRouteName: string | null = null
) {
    const keys = Object.keys(route);
    var path = "";
    for (var i = 0; i < keys.length; i++) {
        const newRootPath = rootRouteName !== null ? rootRouteName + route[keys[i]].path : route[keys[i]].path;
        if (route[keys[i]].name === name) {
            path = newRootPath;
            console.log("founds");
            break;
        } else if (route[keys[i]].routes) path = getRoutePath(name, route[keys[i]].routes, newRootPath);
    }
    return path;
}

export default routes;
