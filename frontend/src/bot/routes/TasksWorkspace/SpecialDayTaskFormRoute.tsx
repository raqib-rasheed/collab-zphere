import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getAxiosInstance } from "bot/helpers/AxiosInstance";
import { Task } from "./SpecialDayTaskList";
import SpecialDayTaskForm from "./SpecialDayFormWithPrefetchedData";

export const SpecialDayTaskFormRoute: FC = () => {
    const axiosInstance = getAxiosInstance();
    const params = useParams();
    const navigator = useNavigate();

    const [fetchedData, setFetchedData] = useState<Task>(null);

    useEffect(() => {
        console.log("special day route");
        if (params.id) {
            console.log("id found");
            axiosInstance
                .get(`tasks/${params.id}/`)
                .then((response) => {
                    if (response.status === 200) {
                        setFetchedData(response.data);
                    }
                })
                .catch((error) => {
                    console.log(error);
                    if (error.response.status === 404) {
                        navigator("/tasks-workspace/special-day/");
                    }
                });
        }
    }, []);
    if (fetchedData) return <SpecialDayTaskForm fetchedData={fetchedData} />;
    else return <SpecialDayTaskFormRoute />;
};

export default SpecialDayTaskFormRoute;
