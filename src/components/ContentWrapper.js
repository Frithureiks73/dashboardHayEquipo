import React from 'react';
import ContenidoPrincipal from "./ContenidoPrincipal";
import TopBar from "./TopBar"
import Footer from "./Footer"

function ContentWrapper() {
    return (
        <React.Fragment>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <TopBar />
                    <ContenidoPrincipal />
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    );
}

export default ContentWrapper;