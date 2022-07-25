import { FC, useEffect, useState } from "react";

import { useForm } from "@mantine/form";
import { RichTextEditor } from "@mantine/rte";
import { MultiSelect, TextInput } from "@mantine/core";
import { useStoreState, useActions } from "helpers/store";

const Email: FC = () => {
    const defaultData = {
        to: "",
        subject: "",
        emailBody: "",
    };
    const form = useForm({
        initialValues: defaultData,
    });

    const [dataList, setDataList] = useState<string[]>([]);
    const [emailBody, setEmailBody] = useState<string>(""); // this just fixes the richtext data loading when the compoenent renders

    const datas = useStoreState((state) => state.defaultStore.nodeDatas);
    const drawerState = useStoreState((state) => state.defaultStore.drawerState);

    const updateData = useActions((actions) => actions.defaultStore.updateData);
    const addData = useActions((actions) => actions.defaultStore.setData);

    useEffect(() => {
        updateData({
            componentName: drawerState.elementName,
            nodeId: drawerState.nodeId,
            data: {
                ...form.values,
            },
        });
    }, [form.values]);

    useEffect(() => {
        const data = datas.find((data) => data.nodeId === drawerState.nodeId);
        if (data) {
            form.setFieldValue("to", data.data.to);
            form.setFieldValue("emailBody", data.data.emailBody);
            form.setFieldValue("subject", data.data.subject);
            setEmailBody(data.data.subject);
        } else {
            addData({
                componentName: drawerState.elementName,
                nodeId: drawerState.nodeId,
                data: defaultData,
            });
        }
    }, []);

    return (
        <div className="status-change">
            <form>
                <MultiSelect
                    label="To"
                    {...form.getInputProps("to")}
                    data={dataList}
                    getCreateLabel={(query) => `+ Add ${query}`}
                    onCreate={(query) => setDataList((current) => [...current, query])}
                    searchable
                    creatable
                />
                <TextInput label="Subject" {...form.getInputProps("subject")} />
                {emailBody && (
                    <RichTextEditor
                        placeholder="Type your email"
                        controls={[
                            ["bold", "italic", "underline", "link"],
                            ["unorderedList", "orderedList", "h1", "h2", "h3"],
                            ["sup", "sub"],
                            ["alignLeft", "alignCenter", "alignRight"],
                            ["blockquote", "codeBlock"],
                        ]}
                        {...form.getInputProps("emailBody")}
                    />
                )}
            </form>
        </div>
    );
};

export default Email;
