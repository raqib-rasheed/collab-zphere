import { FC } from "react";
import {useStoreState} from 'bot/helpers/store'
import EqualToForm from "bot/routes/BotsWorkspace/Drawer/Forms/EqualToForm";
import { useTargetNode } from "bot/routes/BotsWorkspace/utils";

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
