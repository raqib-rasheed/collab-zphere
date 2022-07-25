export { default as TaskWorkspace } from "routes/TasksWorkspace/TasksWorkspace";
export { default as BotsWrokspace } from "routes/BotsWorkspace/BotsWorkspace";
export { default as BotsDashboard } from "routes/BotsDashboard/BotsDashboard";
export { default as SpecialDayTaskForm } from "routes/TasksWorkspace/SpecialDayTaskForm";
export { default as SpecialDayTaskList } from "routes/TasksWorkspace/SpecialDayTaskList";
export { default as SpecialDayTaskFormRoute } from "routes/TasksWorkspace/SpecialDayTaskFormRoute";
export { default as EmailTemplateEditor } from "routes/EmailTemplate/EmailTemplateEditor";
export { default as EmailTemplateList } from "routes/EmailTemplate/EmailTemplateList";
export { default as Home } from "routes/home/Home";
export { default as AdminInterface } from "routes/EmailTemplate/AdminInterface";
export { default as Login } from "routes/auth/Login";
export { default as Profile } from "routes/auth/Profile";
export { default as APIKey} from "routes/APIKey/APIKey";
// always export routes about routes
export { default as routes } from "routes/routes";
export { makeRoutesFromObject, getRoutePath } from "./utils";
