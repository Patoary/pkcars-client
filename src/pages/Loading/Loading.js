import React from 'react';

const Loading = () => {
    return (
        <div>
            <div className="spinner-borde flex justify-center align-middle" style={{color:'#116466', height:'400px'}} role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;