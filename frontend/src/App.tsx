import React, { FC, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ReactFlowProvider } from "react-flow-renderer";
import axios from "axios";
import {
    TaskWorkspace,
    SpecialDayTaskForm,
    AdminInterface,
    Home,
    Login,
    Profile,
    BotsWrokspace,
    SpecialDayTaskList,
    EmailTemplateEditor,
} from "routes";
import { apiUrl } from "helpers/settings";
import { getCookie } from "helpers/utils";
import { Layout } from "components";

import "./styles/css/index.css";
// import "./styles/css/otherstyles.css"

const App: FC = () => {
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
        console.log("called");
        axiosInstance
            .get("/user/")
            .then((response) => {
                if (response.status !== 200) {
                    navigate("/login");
                }
            })
            .catch((e) => navigate("/app/login"));
    }, []);

    return (
        <Routes>
            <Route path="/app">
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
                <Route path="emaileditor" element={<EmailTemplateEditor />} />
                <Route path="login" element={<Login />} />
                <Route path="user" element={<Profile />} />
            </Route>
        </Routes>
    );
};

export default App;
