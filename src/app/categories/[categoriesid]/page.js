import React from 'react';

const DynamicNewsRoute = ({params,searchParams}) => {
    return (
        <div>
            <h1>{searchParams.category}</h1>
        </div>
    );
};

export default DynamicNewsRoute ;