export interface DragableElementsFields {
    name: string;
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
    // saveToDraft: boolean;
    pricing: emailTemplatePricing,
    price: number | null;
    tags: string[],
    category: string;
}
