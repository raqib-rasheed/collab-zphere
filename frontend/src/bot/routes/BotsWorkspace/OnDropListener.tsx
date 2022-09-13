import { FC, useEffect } from "react";
import { useActions } from "bot/helpers/store";
import { ElementNames } from "bot/helpers/types";

type Props = {
    droppedNode: {
        nodeId: string | null;
        componentName: string | null;
    }
};
// this use of this component it to set datas by default when an element is dropped
const OnDropListener: FC<Props> = ({ droppedNode }) => {
    const setData = useActions((actions) => actions.defaultStore.setData);

    useEffect(() => {
        if (droppedNode.nodeId)
            setData({
                componentName: droppedNode.componentName as ElementNames,
                nodeId: droppedNode.nodeId,
                data: {},
            });
    }, [droppedNode]);

    return <></>;
};

export default OnDropListener;
