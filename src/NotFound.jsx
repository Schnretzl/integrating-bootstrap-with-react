// Task 3: Error Page Management

//     Create a new component NotFound to handle undefined routes.
//     Configure your routing to display the NotFound component for any undefined paths.

import React from 'react';

const NotFound = () => {
    return (
        <div>
            <h2>404 Not Found</h2>
            <p>Sorry, the page you are looking for does not exist.</p>
        </div>
    );
};

export default NotFound;