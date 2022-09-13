export { default as TaskWorkspace } from "bot/routes/TasksWorkspace/TasksWorkspace";
export { default as BotsWrokspace } from "bot/routes/BotsWorkspace/BotsWorkspace";
export { default as BotsDashboard } from "bot/routes/BotsDashboard/BotsDashboard";
export { default as SpecialDayTaskForm } from "bot/routes/TasksWorkspace/SpecialDayTaskForm";
export { default as SpecialDayTaskList } from "bot/routes/TasksWorkspace/SpecialDayTaskList";
export { default as SpecialDayTaskFormRoute } from "bot/routes/TasksWorkspace/SpecialDayTaskFormRoute";
export { default as EmailTemplateEditor } from "bot/routes/EmailTemplate/EmailTemplateEditor";
export { default as EmailTemplateList } from "bot/routes/EmailTemplate/EmailTemplateList";
export { default as Home } from "bot/routes/home/Home";
export { default as AdminInterface } from "bot/routes/EmailTemplate/AdminInterface";
export { default as Login } from "bot/routes/auth/Login";
export { default as Profile } from "bot/routes/auth/Profile";
export { default as APIKey} from "bot/routes/APIKey/APIKey";
// always export routes about routes
export { default as routes } from "bot/routes/routes";
export { makeRoutesFromObject, getRoutePath } from "./utils";
