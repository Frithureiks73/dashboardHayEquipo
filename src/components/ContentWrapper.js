import React from 'react';
import ContentRowTop from "./ContentRowTop";
import TopBar from "./TopBar"
import Footer from "./Footer"
import Tabla from './Tabla';

function ContentWrapper() {
    return (
        <React.Fragment>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                    <Tabla/>
                </div>
                <Footer />
            </div>
        </React.Fragment>
    );
}

export default ContentWrapper;