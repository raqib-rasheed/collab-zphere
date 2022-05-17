import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { ReactFlowProvider } from "react-flow-renderer";
import BotsWrokspace from "./routes/BotsWorkspace";
import TasksWorkspace, { SpecialDayTaskForm } from "./routes/TasksWorkspace";
import {AdminInterface} from './routes/EmailTemplate';

import "./styles/css/index.css";

const App: FC = () => {
    return (
        <Routes>
            <Route
                path="/bots-workspace"
                element={
                    <ReactFlowProvider>
                        <BotsWrokspace />
                    </ReactFlowProvider>
                }
            />
            <Route path="/tasks-workspace">
                <Route path="special-day" element={<SpecialDayTaskForm />} />
                <Route index element={<TasksWorkspace />} />
            </Route>
            <Route path="/admin-template-create" element={<AdminInterface />} />
        </Routes>
    );
};

export default App;
