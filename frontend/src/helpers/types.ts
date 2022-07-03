import {iconsName} from 'helpers/assets/Images';
export interface DragableElementsFields {
    name: string;
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
    pricing: emailTemplatePricing,
    price: number | null;
    tags: string[],
    category: string;
}

export interface EmailTemplate extends EmailTemplateFormValues {
    id: number;
    updatedAt: string;
} 
