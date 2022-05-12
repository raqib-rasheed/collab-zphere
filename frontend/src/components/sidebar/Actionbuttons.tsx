import React, {FC} from 'react';

const ActionButtons = () => {
    return <section>
        <div className="button-section">
            <button className="btn-save"><i className="fa fa-check-square-o btn-i"></i> Save</button>
            <button className="btn-reset"><i className="fa fa-refresh btn-i"></i> Reset</button>
            <button className="btn-delete"><i className="fa fa-close objects_umbrella-13 btn-i"></i> Delete</button>
            <button className="btn-undo"><i className="fa fa-mail-reply btn-i"></i> Undo</button>
            <button className="btn-redo"><i className="fa fa-mail-forward btn-i"></i> Redo</button>
        </div>
    </section>
}

export default ActionButtons;