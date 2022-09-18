import { FC, useEffect, useState } from "react";
import { Table, Box } from "@mantine/core";
import {RichTextEditor} from '@mantine/rte';
import {useNavigate} from 'react-router-dom';
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

import { getAxiosInstance } from "bot/helpers/AxiosInstance";
import { faIcons } from "bot/helpers/assets/Images";
import {getTempDate} from 'bot/helpers/utils';

export type Task = {
    id: string;
    name: string;
    workspace: {
        name: string;
        description: string;
    };
    timezone: string;
    date: string;
    isActive: boolean;
    leadEmails: string[];
    subject: string;
    message: string;
};

export const SpecialDayTaskList: FC = () => {
    const axiosInstance = getAxiosInstance();
    const navigator = useNavigate();

    const [tasks, setTasks] = useState<Task[]>([]);
    dayjs.extend(localizedFormat);


    const getDate = (date: string)  => {
        const tempDate = getTempDate(date);
        return dayjs(tempDate).format('lll')
    }

    useEffect(() => {
        axiosInstance
            .get("/tasks/")
            .then((response) => {
                if (response.status === 200) {
                    setTasks(response.data);
                }
            })
            .then((error:any) => {
                console.log(error);
            });
    }, []);

    return (
        <Box sx={{ maxWidth: 1000 }} mx="auto">
            <h2>Task available</h2>
            <hr />
            <Table striped highlightOnHover>
                <thead>
                    <tr>
                        <th>Wokspace name</th>
                        <th>Task name</th>
                        <th>Date and time</th>
                        <th>Leads Email</th>
                        <th>Subject</th>
                        <th>Message</th>
                        <th>Timezone</th>
                        <th>Is active</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, i) => (
                        <tr key={task.id} onClick={() => navigator(`/tasks-workspace/special-day/${task.id}/`)}>
                            <td>{task.workspace.name}</td>
                            <td>{task.name}</td>
                            {/* <td>{dayjs(task.date).format("YYYY-MM-DDTHH:mm:ss[Z]")}</td> */}
                            <td>{getDate(task.date)}</td>
                            <td>
                                {task.leadEmails.map((leadEmail) => (
                                    <>
                                        {leadEmail}  <br />
                                    </>
                                ))}
                            </td>
                            <td>{task.subject}</td>
                            {/* <td>{task.message}</td> */}
                            <td>
                                <RichTextEditor readOnly value={task.message} onChange={() => {}} />
                            </td>
                            <td>{task.timezone}</td>
                            <td>{task.isActive ? <img src={faIcons.faCheckSquare} width="20px" alt="active-icon" /> : null}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Box>
    );
};

export default SpecialDayTaskList;
