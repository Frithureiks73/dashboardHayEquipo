import React from "react";
import LastMovieInDb from "./LastMovieInDb";
import CiudadesInDb from "./CiudadesInDb";

function ContentRowLastM() {
    return (
        <React.Fragment>
            <div className="row">
                <LastMovieInDb />
                <CiudadesInDb />
            </div>
        </React.Fragment>
    );
}

export default ContentRowLastM;