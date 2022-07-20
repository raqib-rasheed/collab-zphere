import { FC } from "react";
import {useStoreState} from 'helpers/store'
import EqualToForm from "routes/BotsWorkspace/Drawer/Forms/EqualToForm";
import { useTargetNode } from "routes/BotsWorkspace/utils";

const EqualToDrawer: FC = () => {
    const drawerState = useStoreState((state) => state.defaultStore.drawerState)
    const targetNode = useTargetNode(drawerState);
    return (
        <div className="contents">
            {targetNode ? (
                <EqualToForm drawerState={drawerState} />
            ) : (
                <h3>You need connect the node to see the form!</h3>
            )}
        </div>
    );
};

export default EqualToDrawer;
