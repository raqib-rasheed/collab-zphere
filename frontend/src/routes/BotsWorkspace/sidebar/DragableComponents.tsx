import React, { FC, useState } from "react";
import {elements} from 'routes/BotsWorkspace/sidebar';

enum mainComponents {
    Triggers = "Triggers",
    Conditions = "Conditions",
    Actions = "Actions",
}

const Triggers: FC = () => {
    return (
        <div className="tab-pane active" id="home" role="tabpanel">
            <div className="row">
                {elements.triggers.map((trigger, i) => (
                    <div className="col-md-6 dragable-element trigger-element" key={i} draggable>
                        <div className="icon-container">
                            <img src={trigger.icon} alt="bell icon" />
                        </div>
                        <p>{trigger.name}</p>
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
                {elements.conditions.map((condition, i) => (
                    <div className="col-md-6 dragable-element condition-element" key={i} draggable>
                        <div className="icon-container">
                            <img src={condition.icon} alt="bell icon" />
                        </div>
                        <p>{condition.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Actions: FC = () => {
    return (
        <div className="tab-pane active" id="home" role="tabpanel">
            <div className="row">
                {elements.actions.map((action, i) => (
                    <div className="col-md-6 dragable-element action-element" key={i} draggable>
                        <div className="icon-container">
                            <img src={action.icon} alt="bell icon" />
                        </div>
                        <p>{action.name}</p>
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
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
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
                        <button
                            onClick={(e) => toggleOptionOnClickListener(e, mainComponents.Triggers)}
                            className="nav-link"
                        >
                            <i className="fa fa-gear"></i> {mainComponents.Triggers}
                        </button>
                    </li>
                    <li className={`nav-item ${isConditions ? " active" : ""}`}>
                        <button
                            onClick={(e) => toggleOptionOnClickListener(e, mainComponents.Conditions)}
                            className="nav-link"
                        >
                            <i className="fa fa-edit"></i> {mainComponents.Conditions}
                        </button>
                    </li>
                    <li className={`nav-item ${isActions ? " active" : ""}`}>
                        <button
                            onClick={(e) => toggleOptionOnClickListener(e, mainComponents.Actions)}
                            className="nav-link"
                        >
                            <i className="fa fa-code"></i> {mainComponents.Actions}
                        </button>
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
