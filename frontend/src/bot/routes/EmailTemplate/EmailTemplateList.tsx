import React, { FC, useEffect, useState } from "react";
import dayjs from "dayjs";
import { Table, Box } from "@mantine/core";
import { EmailTemplate } from "bot/helpers/types";
import { getAxiosInstance } from "bot/helpers/AxiosInstance";
import {getTempDate} from 'bot/helpers/utils';

export const EmailTemplateList: FC = () => {
    const axiosInstance = getAxiosInstance();

    const [emails, setEmails] = useState<EmailTemplate[] | null>(null);

    useEffect(() => {
        if (emails === null) {
            axiosInstance
                .get("emails/")
                .then((response) => {
                    console.log(response)
                    setEmails(response.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [emails, axiosInstance, setEmails]);


    const getDate = (date: string)  => {
        const tempDate = getTempDate(date);
        return dayjs(tempDate).format('lll')
    }

    return (
        <div className="container">
            <Box sx={{ maxWidth: 1000 }} mx="auto">
                <h2>Available Templates</h2>
                <hr />
                <Table striped highlightOnHover>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>Pricing</th>
                            <th>Price</th>
                            <th>Is Global</th>
                            <th>Body</th>
                            <th>Updated at</th>
                        </tr>
                    </thead>
                    <tbody>
                        {emails && emails.map((email, i) => (
                            <tr
                                key={email.id}
                                // onClick={() => navigator(`/tasks-workspace/special-day/${task.id}/`)}
                            >
                                <td>{email.name}</td>
                                <td>{email.pricing}</td>
                                {/* <td>{getDate(task.date)}</td> */}
                                <td>{email.price}</td>
                                <td>{email.isGlobal}</td>
                                <td>{email.body}</td>
                                <td>{getDate(email.updatedAt)}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Box>
        </div>
    );
};

export default EmailTemplateList;
