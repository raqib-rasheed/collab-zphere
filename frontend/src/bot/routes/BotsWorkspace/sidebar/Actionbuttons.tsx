import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { Node, Edge, useEdges, useNodes } from "react-flow-renderer";
import {NodeData} from 'bot/helpers/types';
import { getAxiosInstance } from "bot/helpers/AxiosInstance";
import {useStoreState} from 'bot/helpers/store';

const ActionButtons: FC = () => {
    const axiosInstance = getAxiosInstance();
    const params = useParams();
    const nodes = useNodes();
    const edges = useEdges();

    const datas = useStoreState((state) => state.defaultStore.nodeDatas);

    const setNodes = useStoreState((state) => state.rfstateStore.setNodes);
    const setEdges = useStoreState((state) => state.rfstateStore.setEdges);

    const onSaveClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        console.log(nodes, edges);
        await saveRequest(nodes, edges, datas);
    };

    const onRestClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setNodes([]);
        setEdges([]);
    };

    const saveRequest = async (nodes: Node[], edges: Edge[], datas: NodeData[]) => {
        await axiosInstance
            .post(`/workspace/${params["botId"]}/`, { nodes, edges, datas })
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
