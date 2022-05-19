import React, { FC } from "react";
import axios from "axios";
import { Node, Edge, useEdges, useNodes } from "react-flow-renderer";

// type Props = {
//     nodes: Node[],
//     edges: Edge[],
// }


export const url = "http://localhost:8000/api/workspace/";

const Action: FC = () => {
    const nodes = useNodes()
    const edges = useEdges()

    const btnClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        console.log(nodes, edges);
        await saveRequest(nodes, edges)
    }
    
  const saveRequest = async (nodes: Node[], edges: Edge[]) => {
    await axios
      .post(url, { nodes, edges })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="action-bar">
      <button className="btn btn-primary" onClick = {btnClick}>Save</button>
    </div>
  );
};

export default Action;
