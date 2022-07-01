import { FC, useEffect, useState } from "react";
import { Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "helpers/settings";
import { getCookie } from "helpers/utils";
import {makeRoutesFromObject, routes, getRoutePath, PathNames} from 'routes';

import "./styles/css/index.css";
// import "./styles/css/otherstyles.css"

const App: FC = () => {
    const [routesElements, setRoutes] = useState<JSX.Element[]>([]);

    let navigate = useNavigate();
    const token = getCookie("AUTHORIZATION");
    const axiosInstance = axios.create({
        baseURL: apiUrl,
        timeout: 20000,
        headers: {
            Authorization: token as string,
            "Content-Type": "application/json",
            accept: "application/json",
        },
    });

    useEffect(() => {
        axiosInstance
            .get("/user/")
            .then((response) => {
                if (response.status !== 200) {
                    navigate(getRoutePath(PathNames.user, routes, null));
                }
            })
            .catch((e) => navigate(getRoutePath(PathNames.login, routes, null)));
        setRoutes(makeRoutesFromObject(routes, null)) // store this routes to redux to avoid calling makeroutesfromobject
    }, []);

    // console.log(getRoutePath('home', routes, null))

    return (
        <Routes>
            {/* <Route path="/app">
                <Route
                    index
                    element={
                        <Layout>
                            <Home />
                        </Layout>
                    }
                ></Route>
                <Route
                    path="bots-workspace"
                    element={
                        <ReactFlowProvider>
                            <BotsWrokspace />
                        </ReactFlowProvider>
                    }
                />
                <Route path="tasks-workspace">
                    <Route path="special-day" element={<SpecialDayTaskForm />} />
                    <Route path="special-day/:id/" element={<SpecialDayTaskForm />} />
                    <Route path="special-day-list" element={<SpecialDayTaskList />} />
                    <Route index element={<TaskWorkspace />} />
                </Route>
                <Route path="admin-template-create" element={<AdminInterface />} />
                <Route path="email-templates">
                    <Route path="editor" element={<EmailTemplateEditor />} />
                    <Route index element={<EmailTemplateList />} />
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="user" element={<Profile />} />
            </Route> */}
            {routesElements}
        </Routes>
    );
};

export default App;
