import React from "react";

const NotFoundPage = () => {
    return (
        <>
            <center>
                <div className="container">
                    <img src="/img/pageNotFound.jpg" alt="PageNotFound" title="PageNotFound" width={500} height={500} />
                </div>
                <div className="container">
                    <h1>404: Page Not Found</h1>
                </div>
            </center>
        </>
    )
}

export default NotFoundPage;