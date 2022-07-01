import { FC, memo } from "react";
import { Node, Handle, Position } from "react-flow-renderer";

const CustomNode: FC<Node> = ({ data }) => {
    
    return (
        <div className="dragable-element custom-node">
            <div className="icon-container" style={{ backgroundColor: data.color }}>
                <img src={data.icon} alt="bell icon" />
            </div>
            <p>{data.label}</p>
            <Handle type="source" id="left" position={Position.Left} />
            <Handle type="source" id="right" position={Position.Right} />
        </div>
    );
};

export default memo(CustomNode);
