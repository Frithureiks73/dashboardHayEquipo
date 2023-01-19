import React from "react";
import ContentRowMovies from "./ContentRowMovies";
import ContentRowLastM from "./ContentRowLastM";

function ContentRowTop() {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Hay Equipo Dashboard</h1>
                </div>
                <ContentRowMovies />
                <ContentRowLastM />
            </div>
        </React.Fragment>
    );
}

export default ContentRowTop;