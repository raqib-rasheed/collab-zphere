import React, { FC, useEffect, useState } from "react";
import {
    Textarea,
    Checkbox,
    Button,
    Group,
    Box,
    MultiSelect,
    Badge,
    Select,
    Alert,
    TextInput,
    ThemeIcon,
} from "@mantine/core";
import { TimeInput, DatePicker } from "@mantine/dates";
import { useForm } from "@mantine/form";
import dayjs from "dayjs";
import dayjstimezone from "dayjs/plugin/timezone";
import dayjsutc from "dayjs/plugin/utc";
import { useNavigate, useParams } from "react-router-dom";

import { getAxiosInstance } from "helpers/AxiosInstance";
import { EmptyFieldError, timezone } from "helpers/settings";
import { timeZones } from "helpers/timezones";
import { faBell } from "helpers/assets/Images";

import { Task } from "./SpecialDayTaskList";
import {getTempDate} from 'helpers/utils';

export type LeadList = {
    value: string;
    label: string;
    disabled: boolean;
};

export type Errors = {
    name: null | string;
};

const SpecialDayTaskForm: FC = () => {
    const axiosInstance = getAxiosInstance();
    const selectAllLead = {
        value: "__all__",
        label: "Select all",
        disabled: false,
    };
    const defaultErrors = {
        name: null,
    };

    const params = useParams();
    const navigator = useNavigate();
    const [leadList, setLeadLists] = useState<LeadList[]>([]);
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [time, setTime] = useState<Date>(new Date()); // setting default time resolves error while setting value with setUpdateValues method
    const [errors, setErrors] = useState<Errors>(defaultErrors);

    const form = useForm({
        initialValues: {
            time: new Date(), // setting default time resolves error while setting value with setUpdateValues method
            date: {} as Date,
            timezone: timezone,
            isActive: true,
            message: "",
            name: "",
            leads: [] as string[],
        },
        validate: {
            name: (value) => (value === null ? EmptyFieldError : null),
            time: (value) => (value === null ? EmptyFieldError : null),
            date: (value) => (value === null ? EmptyFieldError : null),
            timezone: (value) => (value === null || value === "" ? EmptyFieldError : null),
            // leads: (value) => {
            //     if (value.length === 0) {
            //         return "Select any leads";
            //     } else if (value.find((data) => data === "__all__")) {
            //         if (value.length > 1) {
            //             return "You cannot select 'Select all' and other leads";
            //         }
            //     } else {
            //         const valueList = leadList.reduce((prev, current) => {
            //             prev.push(current.value)
            //             return prev
            //         }, [] as string[])
            //         const invalidValues = value.filter((v) => !valueList.includes(v))
            //         console.log(invalidValues);
            //         return "invalid"
            //     }
            //     return null
            // },
            // leads: (values) =>
            //     values.length === 0
            //         ? "Select any, cannot be empty"
            //         : values.find((data) => data === "__all__")
            //         ? values.length > 1
            //             ? "You cannot select 'Select all and other leads'"
            //             : null
            //         : null,
        },
    });
    const onTimeChangeHandler = (value: Date, form) => {
        console.log(value.getDate());
        form.setFieldValue("time", value);
    };

    const setUpdateValues = (task: Task) => {
        form.setFieldValue("date", new Date(getTempDate(task.date)));
        // form.setFieldValue("time", new Date(dayjs(task.date).tz(task.timezone).toString()));
        form.setFieldValue("time", new Date(getTempDate(task.date)))
        form.setFieldValue("name", task.name);
        form.setFieldValue("leads", task.leadEmails);
        form.setFieldValue("isActive", task.isActive);
        form.setFieldValue("message", task.message);
        form.setFieldValue("timezone", task.timezone);
    };

    const onSubmitHandler = (values: typeof form.values, event: React.FormEvent<Element>) => {
        event.preventDefault();
        setShowAlert(false);
        setErrors(defaultErrors);
        const tempDate = dayjs(values.date);
        const time = {
            hours: values.time.getHours(),
            minutes: values.time.getMinutes(),
        };
        const day = {
            day: tempDate.date(),
            month: tempDate.month(), // month starts from 0 index
            year: tempDate.year(),
        };

        // Date object will call toIsoString function by default when we pass it to axios
        // this function will convert to UTC we don't need that
        const datetimeString = dayjs(new Date(day.year, day.month, day.day, time.hours, time.minutes)).format(
            "YYYY-MM-DDTHH:mm:ss[Z]"
        );
        const timeString = dayjs(values.time).format("YYYY-MM-DDTHH:mm:ss[Z]");
        const dateString = dayjs(values.date).format("YYYY-MM-DDTHH:mm:ss[Z]");

        if (params.id) {
            axiosInstance
                .patch(`tasks/${params.id}/`, {
                    ...values,
                    datetime: datetimeString,
                    time: timeString,
                    date: dateString,
                })
                .then((response) => console.log(response))
                .catch((error) => console.log(error));
        } else
            axiosInstance
                .post("tasks/", { ...values, datetime: datetimeString, time: timeString, date: dateString })
                .then((response) => {
                    if (response.status === 201) {
                        navigator("/tasks-workspace/special-day-list/");
                    }
                })
                .catch((err) => {
                    console.log(err);
                    if (err.response.data.datetime) {
                        setShowAlert(true);
                    } else if (err.response.data.name) {
                        setErrors({ name: err.response.data.name });
                    }
                });
        console.log(values);
    };

    const dropDownlistOnChangeHandler = (values: string[]) => {
        /**
         * if all is selected then disable others
         *  **/
        if (values.find((lead) => lead === "__all__")) {
            const newLeads = leadList.reduce((prev, current) => {
                if (current.value !== "__all__")
                    prev.push({
                        ...current,
                        disabled: true,
                    });
                else prev.push(current);
                return prev;
            }, [] as LeadList[]);
            setLeadLists(newLeads);
            // set leads value to form
            form.setFieldValue("leads", ["__all__"]);
        } else {
            const newLeads = leadList.reduce((prev, current) => {
                prev.push({
                    ...current,
                    disabled: false,
                });
                return prev;
            }, [] as LeadList[]);
            setLeadLists(newLeads);
            // set leads value to form
            form.setFieldValue("leads", values);
        }
    };

    useEffect(() => {
        if (leadList.length === 0)
            axiosInstance
                .get("/leads/")
                .then((response) => {
                    const datas: LeadList[] = [];
                    response.data.forEach((lead: { name: string; email: string }) => {
                        datas.push({
                            label: lead.email,
                            value: lead.email,
                            disabled: false,
                        });
                    });
                    setLeadLists([selectAllLead, ...datas]);
                })
                .catch((error) => {
                    console.log(error);
                });
        if (params.id) {
            axiosInstance
                .get(`tasks/${params.id}/`)
                .then((response) => {
                    if (response.status === 200) {
                        setUpdateValues(response.data as Task);
                    }
                })
                .catch((error) => console.log(error));
        }
    }, []);

    return (
        <div className="container">
            <Box sx={{ maxWidth: 300 }} mx="auto">
                <h1>{params.id ? "Update task" : "Create a task"}</h1>
                <form onSubmit={form.onSubmit((values, event) => onSubmitHandler(values, event))}>
                    {showAlert && (
                        <Alert
                            icon={
                                <ThemeIcon variant="outline" color="red">
                                    <img src={faBell} />
                                </ThemeIcon>
                            }
                            title="Date and time is not valid!"
                            color="red"
                            onClose={() => setShowAlert(!showAlert)}
                            withCloseButton
                        >
                            You cannot add events to past Date and time
                        </Alert>
                    )}
                    <TextInput
                        label="Name"
                        placeholder="Enter a name for task.."
                        error={errors.name}
                        {...form.getInputProps("name")}
                        required
                    />
                    <TimeInput
                        // onTimeUpdate={}
                        clearable={true}
                        format={"12"}
                        label="Pick time"
                        // value = {task ? new Date() : {}}
                        // value = {time}
                        // onChange = {(value) => onTimeChangeHandler(value, form)}
                        {...form.getInputProps("time")}
                        required
                    />
                    <DatePicker clearable={true} label="Pick date" {...form.getInputProps("date")} required />
                    <Select
                        label="Select Timezone"
                        data={timeZones}
                        searchable
                        nothingFound="No options"
                        required
                        {...form.getInputProps("timezone")}
                    />
                    <Textarea
                        label="Enter a message"
                        placeholder="Enter a message you want to send"
                        {...form.getInputProps("message")}
                        required
                    />
                    <MultiSelect
                        label="Select leads"
                        placeholder="Send to all"
                        data={leadList}
                        value={form.values.leads}
                        onChange={dropDownlistOnChangeHandler}
                        limit={10}
                        nothingFound="Nothing found"
                        // {...form.getInputProps("leads")}
                        clearable
                        searchable
                        required
                    />
                    <Checkbox label="Is active" {...form.getInputProps("isActive", { type: "checkbox" })} />
                    <Group position="right" mt="md">
                        <Button type="submit">Submit</Button>
                    </Group>
                </form>
            </Box>
        </div>
    );
};

export default SpecialDayTaskForm;
