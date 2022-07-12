import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { getAxiosInstance } from "helpers/AxiosInstance";
import { Node, Edge, useEdges, useNodes, useStore } from "react-flow-renderer";

const ActionButtons: FC = () => {
    const axiosInstance = getAxiosInstance();
    const params = useParams();
    const nodes = useNodes();
    const edges = useEdges();

    const setNodes = useStore((store) => store.setNodes);
    const setEdges = useStore((store) => store.setEdges);

    const onSaveClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        console.log(nodes, edges);
        await saveRequest(nodes, edges);
    };

    const onRestClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setNodes([]);
        setEdges([]);
    };

    const saveRequest = async (nodes: Node[], edges: Edge[]) => {
        await axiosInstance
            .post(`/workspace/${params["botId"]}/`, { nodes, edges })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => console.log(err));
    };
    return (
        <section>
            <div className="button-section">
                <button className="btn-save" onClick={onSaveClick}>
                    <i className="fa fa-check-square-o btn-i"></i> Save
                </button>
                <button className="btn-reset" onClick={onRestClick}>
                    <i className="fa fa-refresh btn-i"></i> Reset
                </button>
                {/* <button className="btn-delete"><i className="fa fa-close objects_umbrella-13 btn-i"></i> Delete</button>
            <button className="btn-undo"><i className="fa fa-mail-reply btn-i"></i> Undo</button>
            <button className="btn-redo"><i className="fa fa-mail-forward btn-i"></i> Redo</button> */}
            </div>
        </section>
    );
};

export default ActionButtons;
