import {faIcons, iconsName} from 'helpers/assets/Images';
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
            iconName: iconsName.faExchange,
            icon: faIcons.faExchange,
        },
        {
            name: "Send Proposal",
            iconName: iconsName.faText,
            icon: faIcons.faText,
        },
        {
            name: "New Client",
            iconName: iconsName.faEnvelope,
            icon: faIcons.faEnvelope,
        },
        {
            name: "If proposal value more than",
            iconName: iconsName.faPlayCircle,
            icon: faIcons.faPlayCircle,
        },
        {
            name: "Hand shake",
            iconName: iconsName.faHandShake,
            icon: faIcons.faHandShake,
        },
        {
            name: "Reminder email",
            iconName: iconsName.faEnvelope,
            icon: faIcons.faEnvelope,
        },
    ],
    conditions: [
        {
            name: "Date & Time",
            iconName: iconsName.faCalender,
            icon: faIcons.faCalender,
        },
        {
            name: "Equal to",
            iconName: iconsName.faBars,
            icon: faIcons.faBars,
        },
        {
            name: "Greater than",
            iconName: iconsName.faPlayCircle,
            icon: faIcons.faPlayCircle,
        },
        {
            name: "Create value",
            iconName: iconsName.faFont,
            icon: faIcons.faFont,
        },
        {
            name: "Lead status",
            iconName: iconsName.faCheckSquare,
            icon: faIcons.faCheckSquare,
        },
        {
            name: "Deal satus",
            iconName: iconsName.faCheckSquare,
            icon: faIcons.faCheckSquare,
        },
        {
            name: "Select Leads",
            iconName: iconsName.faUserPlus,
            icon: faIcons.faUserPlus,
        },
        {
            name: "Select Deals",
            iconName: iconsName.faUserPlus,
            icon: faIcons.faUserPlus,
        },
        {
            name: "Select Staff",
            iconName: iconsName.faUserPlus,
            icon: faIcons.faUserPlus,
        },
    ],
    actions: [
        {
            name: "Send Email",
            iconName: iconsName.faEnvelope,
            icon: faIcons.faEnvelope,
        }
    ]
};

export default elements;
