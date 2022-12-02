import React from 'react';
const NotFound = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?size=626&ext=jpg&ga=GA1.2.2070732989.1658662197&semt=sph")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Page Not Found</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;