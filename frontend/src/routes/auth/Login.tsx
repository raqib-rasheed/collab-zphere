import React, { FC, useState } from "react";
import axios from "axios";
import { apiUrl, host } from "helpers/settings";
import { setCookie } from "helpers/utils";
import './login.css'
interface LoginFormData {
    email: string;
    password: string;
}

const Login: FC = () => {
    const [formData, setFormData] = useState<LoginFormData>({
        email: "",
        password: "",
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
                    <label htmlFor="email">Email Address:</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        onChange={onChangeHandler}
                        value={formData.email}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={onChangeHandler}
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
