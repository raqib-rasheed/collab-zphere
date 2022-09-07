import React, { FC } from "react";

const Search: FC = () => {
    return (
        <section>
            <div className="search-bar">
                <input type="text" name="workflow" id="workflow-search" placeholder="Search workflow" />
            </div>
        </section>
    );
};

export default Search;
