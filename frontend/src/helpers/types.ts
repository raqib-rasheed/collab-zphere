import { iconsName } from "helpers/assets/Images";

export enum PathNames {
    home = "home",
    botsWorkspace = "botsWorkspace",
    botsDashboard = "botsDashboard",
    taskWorkspace = "taskWorkspace",
    specialDayCreate = "specialDayCreate",
    specialDayUpdate = "specialDayUpdate",
    specialDayList = "specialDayList",
    emailTemplate = "emailTemplate",
    emailTemplateEditor = "emailTemplateEditor",
    login = "login",
    user = "user",
}

export enum ElementNames {
    statusChange = "Status Change",
    sendProposal = "Send Proposal",
    newClient = "New Client",
    handShake = "Hand Shake",
    reminderEmail = "Reminder Email",
    dateNTime = "Date & Time",
    equalTo = "Equal to",
    greaterThan = "Greater than",
    createValue = "Create Value",
    leadStatus = "Lead status",
    dealStatus = "Deal status",
    selectLeads = "Select Leads",
    selectDeals = "Select Deals",
    selectStaff = "Select Staff",
    sendEmail = "Send Email",
}
export interface DragableElementsFields {
    name: ElementNames;
    iconName: iconsName;
    icon: string;
}
export interface DragableElements {
    triggers: Array<DragableElementsFields>;
    conditions: Array<DragableElementsFields>;
    actions: Array<DragableElementsFields>;
}

// EmailTemplateEditor
export enum emailTemplatePricing {
    Free = "F",
    Paid = "P",
}
export interface EmailTemplateFormValues {
    name: string;
    description: string;
    isGlobal: boolean;
    body: string;
    subject: string;
    // saveToDraft: boolean;
    pricing: emailTemplatePricing;
    price: number | null;
    tags: string[];
    category: string;
}

export interface EmailTemplate extends EmailTemplateFormValues {
    id: number;
    updatedAt: string;
}

export interface Workspace {
    name: string;
    description: string;
}

export interface Bot {
    id: string;
    name: string;
    workspace: Workspace;
    isActive: boolean;
    img: string;
}

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

export interface DrawerState {
    isOpen: boolean;
    elementName: ElementNames | null;
    nodeId: string | null;
}

export interface NodeData {
    componentName: ElementNames;
    nodeId: string;
    data: {
        [key: string]: string;
    };
}
