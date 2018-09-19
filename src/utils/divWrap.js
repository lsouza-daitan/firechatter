import React from 'react';

export default function divWrap(klass) {
    return (child) => (
        <div className={klass}>
            {child}
        </div>
    );
};
