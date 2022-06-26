import React, { FC, useEffect, useState } from "react";
import { TextInput, Textarea, Checkbox, Chips, Chip, NumberInput, InputWrapper } from "@mantine/core";
import { useForm } from "@mantine/form";
import { RichTextEditor } from "@mantine/rte";

import { EmailTemplateFormValues, emailTemplatePricing } from "helpers/types";
import {getAxiosInstance} from 'helpers/AxiosInstance';

export const EmailTemplateEditor: FC = () => {
    const [showPriceField, setShowPriceField] = useState(false);

    const axiosInstance = getAxiosInstance();

    const form = useForm<EmailTemplateFormValues>({
        initialValues: {
            name: "",
            description: "",
            isGlobal: true,
            body: "",
            // saveToDraft: false,
            pricing: emailTemplatePricing.Free,
            price: null,
            tags: [],
            category: "",
        },
    });

    const onSubmitHandler = (values: EmailTemplateFormValues, event: React.FormEvent<Element>) => {
        event.preventDefault();
        axiosInstance.post('emails/', {
            ...values,
            is_global: values.isGlobal,
        }).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        if (form.values.pricing === emailTemplatePricing.Free && showPriceField) {
            setShowPriceField(false);
        } else if (form.values.pricing === emailTemplatePricing.Paid && !showPriceField) {
            setShowPriceField(true);
        }
    }, [form]);

    return (
        <div className="container email-template-editor">
            <h1>Email template editor</h1>
            <form onSubmit={form.onSubmit((values, event) => onSubmitHandler(values, event))}>
                <TextInput
                    label="Name"
                    placeholder="Enter a name for email template"
                    required
                    {...form.getInputProps("name")}
                />
                <Textarea
                    label="Description"
                    placeholder="Do you have any description for this template?"
                    {...form.getInputProps("description")}
                />
                <Checkbox
                    label="Is it global to all users"
                    {...form.getInputProps("isGlobal")}
                    style={{ margin: "5px 0px" }}
                />
                <InputWrapper label="Do you cost it?">
                    <Chips multiple={false} {...form.getInputProps("pricing")}>
                        <Chip value={emailTemplatePricing.Free}>Free</Chip>
                        <Chip value={emailTemplatePricing.Paid}>Paid</Chip>
                    </Chips>
                </InputWrapper>
                {showPriceField && (
                    <NumberInput
                        label="Price"
                        placeholder="Enter the price of template"
                        required
                        {...form.getInputProps("price")}
                    />
                )}
                <InputWrapper label="Template" required>
                    <RichTextEditor
                        controls={[
                            ["bold", "italic", "underline", "link"],
                            ["unorderedList", "orderedList", "h1", "h2", "h3"],
                            ["sup", "sub"],
                            ["alignLeft", "alignCenter", "alignRight"],
                            ["blockquote", "codeBlock"],
                        ]}
                        {...form.getInputProps("body")}
                        style={{ minHeight: "50vh" }}
                    />
                </InputWrapper>
                <button type="submit" className="btn btn-primary button">
                    Save
                </button>
            </form>
        </div>
    );
};

export default EmailTemplateEditor;
