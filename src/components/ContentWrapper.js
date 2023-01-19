import React from 'react';
import ContentRowTop from "./ContentRowTop";
import TopBar from "./TopBar"
import Footer from "./Footer"

function ContentWrapper() {
    return (
        <React.Fragment>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                </div>
                <Footer />
            </div>
        </React.Fragment>
    );
}

export default ContentWrapper;