import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PasswordInput, TextInput } from "@mantine/core";
import axios from "axios";
import { apiUrl, host, timezone } from "helpers/settings";
import { setCookie } from "helpers/utils";
import { loginIcons } from "helpers/assets/Images";
import { getRoutePath, routes } from "routes";
import { PathNames } from "helpers/types";
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

    const navigator = useNavigate();

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
                        navigator(getRoutePath(PathNames.home, routes, null));
                    } else {
                        // if running separatly
                        setCookie("AUTHORIZATION", response.data.token, 10);
                        navigator(getRoutePath(PathNames.home, routes, null));
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
            <div className="row">
                <div className="col-xl-8 col-lg-8 col-md-8 offset-lg-2 m-t-100px">
                    <div className="login-form-container text-center">
                        <h2>Login</h2>
                        <form onSubmit={onSubmitHandler}>
                            <div className="form-group">
                                <TextInput
                                    icon={<img src={loginIcons.emailIcon} className="w-13px" alt="icon" />}
                                    name="email"
                                    type="email"
                                    id="email"
                                    // label="Email"
                                    placeholder="Your email"
                                    onChange={onChangeHandler}
                                    value={formData.email}
                                    size="lg"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <PasswordInput
                                    icon={<img src={loginIcons.passwordIcon} className="w-13px" alt="icon" />}
                                    name="password"
                                    value={formData.password}
                                    onChange={onChangeHandler}
                                    placeholder="Password"
                                    // label="Type out your password"
                                    description="Password must include at least one letter, number and special character"
                                    size="lg"
                                    style={{ marginBottom: "10px" }}
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
                </div>
            </div>
        </div>
    );
};

export default Login;
