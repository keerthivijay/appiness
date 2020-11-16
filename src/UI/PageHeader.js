import React from 'react';

const PageHeader = props => {

    return(
        <div className="page-header">
            <h3>{props.title}</h3>
            <hr/>
        </div>
    );

}

export default PageHeader;