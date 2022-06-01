import React, { FC, useEffect, useState } from "react";
import { Textarea, Checkbox, Button, Group, Box, MultiSelect, Badge } from "@mantine/core";
import { TimeInput, DatePicker } from "@mantine/dates";
import { useForm } from "@mantine/form";
import dayjs from "dayjs";

import { getAxiosInstance } from "helpers/AxiosInstance";
import { EmptyFieldError, timezone } from "helpers/settings";


type LeadList = {
    value: string;
    label: string;
    disabled: boolean;
};

const SpecialDayTaskForm: FC = () => {
    const axiosInstance = getAxiosInstance();
    const selectAllLead = {
        value: "__all__",
        label: "Select all",
        disabled: false,
    };

    const [leadList, setLeadLists] = useState<LeadList[]>([]);

    const form = useForm({
        initialValues: {
            time: {} as Date,
            date: dayjs().toDate(),
            isActive: true,
            message: "",
            leads: [] as string[],
        },
        validate: {
            time: (value) => (value === null ? EmptyFieldError : null),
            date: (value) => (value === null ? EmptyFieldError : null),
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

    const onSubmitHandler = (values: typeof form.values, event: React.FormEvent<Element>) => {
        event.preventDefault();
        const tempDate = dayjs(values.date)
        const time = {
            hours: values.time.getHours(),
            minutes: values.time.getMinutes(),
        }
        const day = {
            day: tempDate.date(),
            month: tempDate.month() + 1,
            year: tempDate.year(),
        }
        const datetime = new Date(Date.UTC(day.year, day.month, day.day, time.hours, time.minutes))
        axiosInstance
            .post("tasks/", {...values, datetime, timezone})
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
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
    }, []);

    return (
        <div className="container">
            <Badge title="change timezone"/>
            <Box sx={{ maxWidth: 300 }} mx="auto">
                <h1>Create a task</h1>
                <form onSubmit={form.onSubmit((values, event) => onSubmitHandler(values, event))}>
                    <TimeInput
                        clearable={true}
                        format={"12"}
                        label="Pick time"
                        {...form.getInputProps("time")}
                        required
                    />
                    <DatePicker clearable={true} label="Pick date" {...form.getInputProps("date")} required />
                    <Checkbox label="Is active" {...form.getInputProps("isActive", { type: "checkbox" })} />
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
                    <Group position="right" mt="md">
                        <Button type="submit">Submit</Button>
                    </Group>
                </form>
            </Box>
        </div>
    );
};

export default SpecialDayTaskForm;
