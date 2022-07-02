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

// icons
const iconsPath = "icons";
export const faBell = getUrl(isDevelopment, `${iconsPath}/fa-fa-bell.svg`);
export const faEnvelope = getUrl(isDevelopment, `${iconsPath}/fa-fa-envelope.svg`);
export const faExchange = getUrl(isDevelopment, `${iconsPath}/fa-fa-exchange.svg`);
export const faText = getUrl(isDevelopment, `${iconsPath}/fa-fa-file-text.svg`);
export const faHandShake = getUrl(isDevelopment, `${iconsPath}/fa-fa-handshake-o.svg`);
export const faPlayCircle = getUrl(isDevelopment, `${iconsPath}/fa-fa-play-circle-o.svg`);
export const faBars = getUrl(isDevelopment, `${iconsPath}/fa-fa-bars.svg`);
export const faCalender = getUrl(isDevelopment, `${iconsPath}/fa-fa-calendar.svg`);
export const faCheckSquare = getUrl(isDevelopment, `${iconsPath}/fa-fa-check-square-o.svg`);
export const faFont = getUrl(isDevelopment, `${iconsPath}/fa-fa-font.svg`);
export const faUserPlus = getUrl(isDevelopment, `${iconsPath}/fa-fa-user-plus.svg`);
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

