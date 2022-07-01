import {faIcons} from 'helpers/assets/Images';
import {DragableElements} from 'helpers/types';

export enum dragableElementsColors {
    triggers = "#ed2553",
    conditions = "orange",
    actions = "#26c4fc",
}

export const elements: DragableElements = {
    triggers: [
        // triggers
        {
            name: "Status Change",
            icon: faIcons.faExchange,
        },
        {
            name: "Send Proposal",
            icon: faIcons.faText,
        },
        {
            name: "New Client",
            icon: faIcons.faEnvelope,
        },
        {
            name: "If proposal value more than",
            icon: faIcons.faPlayCircle,
        },
        {
            name: "Hand shake",
            icon: faIcons.faHandShake,
        },
        {
            name: "Reminder email",
            icon: faIcons.faEnvelope,
        },
    ],
    conditions: [
        {
            name: "Date & Time",
            icon: faIcons.faCalender,
        },
        {
            name: "Equal to",
            icon: faIcons.faBars,
        },
        {
            name: "Greater than",
            icon: faIcons.faPlayCircle,
        },
        {
            name: "Create value",
            icon: faIcons.faFont,
        },
        {
            name: "Lead status",
            icon: faIcons.faCheckSquare,
        },
        {
            name: "Deal satus",
            icon: faIcons.faCheckSquare,
        },
        {
            name: "Select Leads",
            icon: faIcons.faUserPlus,
        },
        {
            name: "Select Deals",
            icon: faIcons.faUserPlus,
        },
        {
            name: "Select Staff",
            icon: faIcons.faUserPlus,
        },
    ],
    actions: [
        {
            name: "Send Email",
            icon: faIcons.faEnvelope,
        }
    ]
};

export default elements;
