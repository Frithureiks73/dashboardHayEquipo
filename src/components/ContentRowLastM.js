import React from "react";
import LastMovieInDb from "./LastMovieInDb";
import GenresInDb from "./GenresInDb";

function ContentRowLastM() {
    return (
        <React.Fragment>
            <div className="row">
                <LastMovieInDb />
                <GenresInDb />
            </div>
        </React.Fragment>
    );
}

export default ContentRowLastM;