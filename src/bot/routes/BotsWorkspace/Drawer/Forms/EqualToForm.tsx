import { FC, useEffect } from "react";

import { useForm } from "@mantine/form";
import { Select, Input } from "@mantine/core";
import { useStoreState, useActions } from "bot/helpers/store";
import { DrawerState } from "bot/helpers/types";

type Props = {
    drawerState: DrawerState;
};

const EqualToForm: FC<Props> = ({ drawerState }) => {
    const form = useForm({
        initialValues: {
            parameter: "",
            value: "",
        },
    });

    const datas = useStoreState((state) => state.defaultStore.nodeDatas);
    const updateData = useActions((actions) => actions.defaultStore.updateData);
    const addData = useActions((actions) => actions.defaultStore.setData)

    useEffect(() => {
        console.log('555 ')     
        updateData({
            componentName: drawerState.elementName!,
            nodeId: drawerState.nodeId!,
            data: {
                ...form.values,
            },
        }); 
    }, [form.values]);

    useEffect(() => {
        const data = datas.find((data) => data.nodeId === drawerState.nodeId);
        if (data) {
            form.setFieldValue("parameter", data.data.parameter);
            form.setFieldValue("value", data.data.value);
        } else {
            addData({
                componentName: drawerState.elementName!,
                nodeId: drawerState.nodeId!,
                data: {
                    parameter: '',
                    value: '',
                }
            })
        }
    }, []);

    return (
        <div className="status-change">
            <form>
                <Select
                    placeholder="Pick any value"
                    data={[
                        { value: "name", label: "Name" },
                        { value: "email", label: "Email" },
                        { value: "phone", label: "Phone" },
                        { value: "subject", label: "Subject" },
                    ]}
                    {...form.getInputProps("parameter")}
                />
                = <Input placeholder="type any" {...form.getInputProps("value")} />
            </form>
        </div>
    );
};

export default EqualToForm;
