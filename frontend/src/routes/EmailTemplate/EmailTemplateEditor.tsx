import React, { FC, useEffect, useState } from "react";
import { RichTextEditor } from '@mantine/rte';

export const EmailTemplateEditor: FC = () => {
    const [value, setValue] = useState<string>();
    useEffect(() => {
        console.log(value);
    }, [value])
    
    return <RichTextEditor value={value} onChange={setValue} />
}

export default EmailTemplateEditor;