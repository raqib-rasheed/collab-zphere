import { FC, memo } from "react";
import { Node, Handle, Position } from "react-flow-renderer";
import { getIconUrl } from "helpers/assets/Images";

const CustomNode: FC<Node> = ({ data }) => {
    return (
        <div className="dragable-element custom-node">
            <div className="icon-container" style={{ backgroundColor: data.color }}>
                <img src={getIconUrl(data.iconName)} alt="bell icon" draggable={false} />
                {/* if draggable is not set we can drag the icons from flow space   */}
            </div>
            <p>{data.label}</p>
            <div className="node-buttons">
                <>
                    <div className="node-button">
                        <span className="fas fa-trash"></span>
                    </div>
                    <div className="node-button">
                        <span
                            className="fas fa-edit"
                            // onClick={() => {
                            //     props.data.drawSidebar(props.data.label, props.id);
                            //     // tour?.show("model")
                            // }}
                        ></span>
                    </div>
                </>
            </div>
            <Handle type="source" id="left" position={Position.Left} />
            <Handle type="source" id="right" position={Position.Right} />
        </div>
    );
};

export default memo(CustomNode);
