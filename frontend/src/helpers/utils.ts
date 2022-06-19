export const setCookie = (name: string, value: string, days: number) => {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
};

export const getCookie = (name: string): string | null => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};

export const getTempDate = (date: string) => {
    // removes timezone from datetime
    const firstPart = date.split("T")[0];
    const secondPart = date.split("T")[1];
    if (secondPart.includes("+")) {
        return firstPart + "T" + secondPart.split("+")[0];
    } else {
        return firstPart + "T" + secondPart.split("-")[0];
    }
};
