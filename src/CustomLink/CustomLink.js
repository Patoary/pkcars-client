import React from 'react';

import { Link, useMatch, useResolvedPath } from 'react-router-dom';
const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{
                    color: match ? '#116466' : '',
                    padding:'2px 10px',
                    borderBottom:match? '1px solid #116466' : '',
                    borderRadius:'10px'

                }}
                to={to}
                {...props}
            >
                {children}
            </Link>

        </div>
    );
};

export default CustomLink;