import React from "react";

function TotalAwards() {
    return (
        <React.Fragment>
            <div className="col-md-4 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1"> Total awards</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">79</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-award fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default TotalAwards;