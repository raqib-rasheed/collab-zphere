import {faIcons, iconsName} from 'bot/helpers/assets/Images';
import {DragableElements, ElementNames} from 'bot/helpers/types';

export enum dragableElementsColors {
    triggers = "#ed2553",
    conditions = "orange",
    actions = "#26c4fc",
}

export const elements: DragableElements = {
    triggers: [
        // triggers
        {
            name: ElementNames.statusChange,
            iconName: iconsName.faExchange,
            icon: faIcons.faExchange,
        },
        {
            name:  ElementNames.sendProposal,
            iconName: iconsName.faText,
            icon: faIcons.faText,
        },
        {
            name:  ElementNames.newClient,
            iconName: iconsName.faEnvelope,
            icon: faIcons.faEnvelope,
        },
        // {
        //     name: "If proposal value more than",
        //     iconName: iconsName.faPlayCircle,
        //     icon: faIcons.faPlayCircle,
        // },
        {
            name:  ElementNames.handShake,
            iconName: iconsName.faHandShake,
            icon: faIcons.faHandShake,
        },
        {
            name:  ElementNames.reminderEmail,
            iconName: iconsName.faEnvelope,
            icon: faIcons.faEnvelope,
        },
    ],
    conditions: [
        {
            name:  ElementNames.dateNTime,
            iconName: iconsName.faCalender,
            icon: faIcons.faCalender,
        },
        {
            name:  ElementNames.equalTo,
            iconName: iconsName.faBars,
            icon: faIcons.faBars,
        },
        {
            name:  ElementNames.greaterThan,
            iconName: iconsName.faPlayCircle,
            icon: faIcons.faPlayCircle,
        },
        {
            name:  ElementNames.createValue,
            iconName: iconsName.faFont,
            icon: faIcons.faFont,
        },
        {
            name:  ElementNames.leadStatus,
            iconName: iconsName.faCheckSquare,
            icon: faIcons.faCheckSquare,
        },
        {
            name:  ElementNames.dealStatus,
            iconName: iconsName.faCheckSquare,
            icon: faIcons.faCheckSquare,
        },
        {
            name:  ElementNames.selectLeads,
            iconName: iconsName.faUserPlus,
            icon: faIcons.faUserPlus,
        },
        {
            name:  ElementNames.selectDeals,
            iconName: iconsName.faUserPlus,
            icon: faIcons.faUserPlus,
        },
        {
            name:  ElementNames.selectStaff,
            iconName: iconsName.faUserPlus,
            icon: faIcons.faUserPlus,
        },
    ],
    actions: [
        {
            name:  ElementNames.sendEmail,
            iconName: iconsName.faEnvelope,
            icon: faIcons.faEnvelope,
        }
    ]
};

export default elements;
