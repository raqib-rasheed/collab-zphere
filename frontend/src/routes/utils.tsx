import { Route } from "react-router-dom";
import { ReactFlowProvider } from "react-flow-renderer";
import {
    TaskWorkspace,
    SpecialDayTaskForm,
    Home,
    Login,
    Profile,
    BotsWrokspace,
    SpecialDayTaskList,
    EmailTemplateEditor,
    EmailTemplateList,
} from "routes";
import { Layout } from "components";

export enum PathNames  {
    home = 'home',
    botsWorkspace = 'botsWorkspace',
    taskWorkspace = 'taskWorkspace',
    specialDayCreate = 'specialDayCreate',
    specialDayUpdate = 'specialDayUpdate',
    specialDayList = 'specialDayList',
    emailTemplate = 'emailTemplate',
    emailTemplateEditor = 'emailTemplateEditor',
    login = 'login',
    user = 'user',
}

export type Route = {
    path?: string;
    name?: PathNames;
    element?: JSX.Element;
    routes?: {
        [key: string]: Route;
    };
};

export type Routes = {
    [key: string]: Route;
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
            taskWorkspace: {
                path: "tasks-workspace/",
                routes: {
                    index: {
                        path: "",
                        name: PathNames.taskWorkspace,
                        element: <TaskWorkspace />,
                    },
                    specialDayCreate: {
                        path: "special-day/",
                        name: PathNames.specialDayCreate,
                        element: <SpecialDayTaskForm />,
                    },
                    specialDayUpdate: {
                        path: "special-day/:id/",
                        name: PathNames.specialDayUpdate,
                        element: <SpecialDayTaskForm />,
                    },
                    specialDayList: {
                        path: "special-day-list/",
                        name: PathNames.specialDayList,
                        element: <SpecialDayTaskList />,
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
                element: <Login />,
            },
            user: {
                path: "user/",
                name: PathNames.user,
                element: <Profile />,
            },
        },
    },
};

export const makeRoutesFromObject = (route: Route, rootRouteName: string | null) => {
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
};

export const getRoutePath = (name: PathNames, route: Route, rootRouteName: string | null) => {
    const keys = Object.keys(route);
    var path = '';
    for (var i = 0; i < keys.length; i++) {
        const newRootPath = rootRouteName !== null ? rootRouteName + route[keys[i]].path : route[keys[i]].path;
        console.log(keys[i]);
        if (route[keys[i]].name === name) {
            path = newRootPath;
            console.log("founds");
            break;
        } else if (route[keys[i]].routes) path = getRoutePath(name, route[keys[i]].routes, newRootPath);
    }
    return path;
};

export default routes;
