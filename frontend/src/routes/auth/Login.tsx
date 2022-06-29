import React, { FC, useState } from "react";
import { PasswordInput,TextInput } from "@mantine/core";
import axios from "axios";
import { apiUrl, host, timezone } from "helpers/settings";
import { setCookie } from "helpers/utils";
import {loginIcons} from 'helpers/assets/Images';
import "./login.css";
interface LoginFormData {
    email: string;
    password: string;
    timezone: string;
}

const Login: FC = () => {
    const [formData, setFormData] = useState<LoginFormData>({
        email: "",
        password: "",
        timezone,
    });

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios
            .post(`${apiUrl}/user/login/`, formData)
            .then((response) => {
                if (response.status === 200) {
                    if (window.location.host === host) {
                        // if we are running on same django session
                        window.location.replace("/");
                    } else {
                        // if running separatly
                        setCookie("AUTHORIZATION", response.data.token, 10);
                        window.location.replace("/");
                    }
                }
                console.log(response);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <div className="container">
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <TextInput
                        icon={<img src={loginIcons.emailIcon} className="w-13px" alt="icon"/>}
                        name="email"
                        type="email"
                        id="email"
                        label= "Email"
                        onChange={onChangeHandler}
                        value = {formData.email}
                        required
                     />
                </div>

                <div className="form-group">
                    <PasswordInput
                        icon={<img src={loginIcons.passwordIcon} className="w-13px" alt="icon"/>}
                        name="password"
                        value={formData.password}
                        onChange={onChangeHandler}
                        placeholder="Password"
                        label="Type out your password"
                        description="Password must include at least one letter, number and special character"
                        required
                    />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
