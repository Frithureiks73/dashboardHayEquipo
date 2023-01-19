import React from "react";
import ActorsQuantity from "./ActorsQuantity";
import MoviesInDb from "./MoviesInDB";
import TotalAwards from "./TotalAwards";

function ContentRowMovies() {
    return (
        <React.Fragment>
            <div className="row">
                <MoviesInDb />
                <TotalAwards />
                <ActorsQuantity />
            </div>
        </React.Fragment>
    );
}

export default ContentRowMovies;