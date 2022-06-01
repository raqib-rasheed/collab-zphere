import axios from "axios";
import { apiUrl } from "helpers/settings";
import { getCookie } from "helpers/utils";

export const getAxiosInstance = () => {
    const token = getCookie("AUTHORIZATION");
    const axiosInstance = axios.create({
        baseURL: apiUrl,
        timeout: 20000,
        headers: {
            Authorization: token as string,
            "Content-Type": "application/json",
            accept: "application/json",
        },
    });
    return axiosInstance
}
