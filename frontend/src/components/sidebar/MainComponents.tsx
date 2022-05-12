import React, { FC, useState } from "react";

enum mainComponents {
    Triggers = "Triggers",
    Conditions = "Conditions",
    Actions = "Actions",
}

const elements = {
    events: [
        // triggers
        {
            name: "Client Created",
        },
    ],
    actions: [
        {
            name: "Send email",
        },
    ],
};

const Triggers: FC = () => {
    return (
        <div className="tab-pane active" id="home" role="tabpanel">
            <div className="row">
                {elements.events.map((event, i) => (
                    <div className="col-md-6" key={i}>
                        <div className="drag-item-t"> {event.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Conditions: FC = () => {
    return (
        <div className="tab-pane active" id="home" role="tabpanel">
            <div className="row">
                <div className="col-md-6">
                    <div className="drag-item-t"> condition 1</div>
                </div>
                <div className="col-md-6">
                    <div className="drag-item-t"> condition 2</div>
                </div>
            </div>
        </div>
    );
};

const Actions: FC = () => {
    return (
        <div className="tab-pane active" id="home" role="tabpanel">
            <div className="row">
                {elements.actions.map((action, i) => (
                    <div className="col-md-6" key={i}>
                        <div className="drag-item-t"> {action.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const MainComponents: FC = () => {
    const [isTrigger, setIsTrigger] = useState(true);
    const [isConditions, setIsConditions] = useState(false);
    const [isActions, setIsActions] = useState(false);

    const setStateFunction = (trigger: boolean, condition: boolean, action: boolean) => {
        setIsTrigger(trigger);
        setIsConditions(condition);
        setIsActions(action);
    };

    const toggleOptionOnClickListener = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        component: mainComponents
    ) => {
        e.preventDefault();
        if (component === mainComponents.Triggers) setStateFunction(true, false, false);
        else if (component === mainComponents.Conditions) setStateFunction(false, true, false);
        else setStateFunction(false, false, true);
    };

    return (
        <div className="card">
            <div className="card-header">
                <ul className="nav nav-tabs justify-content-center" role="tablist">
                    <li className={`nav-item ${isTrigger ? " active" : ""}`}>
                        <a
                            onClick={(e) => toggleOptionOnClickListener(e, mainComponents.Triggers)}
                            className="nav-link"
                            role="tag"
                        >
                            <i className="fa fa-gear"></i> {mainComponents.Triggers}
                        </a>
                    </li>
                    <li className={`nav-item ${isConditions ? " active" : ""}`}>
                        <a
                            onClick={(e) => toggleOptionOnClickListener(e, mainComponents.Conditions)}
                            className="nav-link"
                            role="tag"
                        >
                            <i className="fa fa-edit"></i> {mainComponents.Conditions}
                        </a>
                    </li>
                    <li className={`nav-item ${isActions ? " active" : ""}`}>
                        <a
                            onClick={(e) => toggleOptionOnClickListener(e, mainComponents.Actions)}
                            className="nav-link"
                            role="tag"
                        >
                            <i className="fa fa-code"></i> {mainComponents.Actions}
                        </a>
                    </li>
                </ul>
            </div>
            <div className="card-body">
                <div className="tab-content text-center">
                    {isTrigger && <Triggers />}
                    {isConditions && <Conditions />}
                    {isActions && <Actions />}
                </div>
            </div>
        </div>
    );
};

export default MainComponents;
