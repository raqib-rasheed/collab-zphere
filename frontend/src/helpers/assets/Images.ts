import { baseURL, isDevelopment } from "helpers/settings";

const getUrl = (isDevelopment: boolean, fileName: string, staticURL: boolean = true):string => {
    // function to return image urls
    if (isDevelopment) {
        if (staticURL) {
            const staticURL = "/static/";
            const rootUrl = baseURL + staticURL;
            return rootUrl + fileName;
        }
    }
    return ''
};

export enum iconsName  {
    faBell = 'fa-fa-bell.svg',
    faEnvelope = 'fa-fa-envelope.svg',
    faExchange = 'fa-fa-exchange.svg',
    faText = 'fa-fa-file-text.svg',
    faHandShake = 'fa-fa-handshake-o.svg',
    faPlayCircle = 'fa-fa-play-circle-o.svg',
    faBars = 'fa-fa-bars.svg',
    faCalender = 'fa-fa-calendar.svg',
    faCheckSquare = 'fa-fa-check-square-o.svg',
    faFont = 'fa-fa-font.svg',
    faUserPlus = 'fa-fa-user-plus.svg',

}

export const getIconUrl = (name: string) => {
    return getUrl(isDevelopment, `icons/${name}`);
}

// icons
const iconsPath = "icons";
export const faBell = getUrl(isDevelopment, `${iconsPath}/${iconsName.faBell}`);
export const faEnvelope = getUrl(isDevelopment, `${iconsPath}/${iconsName.faEnvelope}`);
export const faExchange = getUrl(isDevelopment, `${iconsPath}/${iconsName.faExchange}`);
export const faText = getUrl(isDevelopment, `${iconsPath}/${iconsName.faText}`);
export const faHandShake = getUrl(isDevelopment, `${iconsPath}/${iconsName.faHandShake}`);
export const faPlayCircle = getUrl(isDevelopment, `${iconsPath}/${iconsName.faPlayCircle}`);
export const faBars = getUrl(isDevelopment, `${iconsPath}/${iconsName.faBars}`);
export const faCalender = getUrl(isDevelopment, `${iconsPath}/${iconsName.faCalender}`);
export const faCheckSquare = getUrl(isDevelopment, `${iconsPath}/${iconsName.faCheckSquare}`);
export const faFont = getUrl(isDevelopment, `${iconsPath}/${iconsName.faFont}`);
export const faUserPlus = getUrl(isDevelopment, `${iconsPath}/${iconsName.faUserPlus}`);
export const emailIcon = getUrl(isDevelopment, `${iconsPath}/email.svg`);
export const passwordIcon = getUrl(isDevelopment, `${iconsPath}/password.svg`);
export const zphereIcon = getUrl(isDevelopment, `${iconsPath}/zphere-logo.png`);

export const zphereBgImg = getUrl(isDevelopment, 'img/1.jpg')


export const faIcons = {
    faBell,
    faBars,
    faEnvelope,
    faExchange,
    faText,
    faHandShake,
    faPlayCircle,
    faCalender,
    faCheckSquare,
    faFont,
    faUserPlus,
};

export const loginIcons = {
    emailIcon,
    passwordIcon,
}

