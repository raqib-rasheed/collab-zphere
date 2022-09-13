import { FC } from "react";
import {useStoreState} from 'helpers/store'
import EmailForm from "routes/BotsWorkspace/Drawer/Forms/EmailForm";
import { useTargetNode } from "routes/BotsWorkspace/utils";

const EmailDrawer: FC = () => {
    const drawerState = useStoreState((state) => state.defaultStore.drawerState)
    const targetNode = useTargetNode(drawerState);
    return (
        <div className="contents">
            {targetNode ? (
                <EmailForm />
            ) : (
                <h3>You need connect the node to see the form!</h3>
            )}
        </div>
    );
};

export default EmailDrawer;
