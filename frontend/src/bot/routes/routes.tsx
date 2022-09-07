
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
    APIKey,
} from "routes";
// import Home from 'routes/home/Home';
import { Layout } from "components";
import { PathNames, Routes } from "helpers/types";

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
                path: "bots-workspace/:botId/",
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
            apiKey: {
                path: "generate-api-key/",
                name: PathNames.apiKey,
                element: (
                    <Layout>
                        <APIKey />
                    </Layout>
                )
            }
        },
    },
};

export default routes;