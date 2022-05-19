import React, { FC } from "react";
import axios from "axios";
import { apiUrl } from "settings";
import { getCookie } from "utils";

const Profile: FC = () => {
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

    axiosInstance.get("/user/").then((response) => console.log(response));
    return <div className="container"></div>;
};

export default Profile;
