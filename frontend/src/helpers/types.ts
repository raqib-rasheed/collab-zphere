export interface DragableElementsFields {
    name: string;
    icon: string;
}
export interface DragableElements {
    triggers: Array<DragableElementsFields>;
    conditions: Array<DragableElementsFields>;
    actions: Array<DragableElementsFields>;
}
