import React from 'react';
import './PerfectAvatar.css'

function PerfectAvatar({ src, name, isActive, hasBadge }) {

    const classes = isActive ? "active-styles styled-wrapper" : "styled-wrapper";

    return (
        <span className={classes}
        isActive={isActive}
        >
            {hasBadge && <span className="styled-badge" />}
            {src ? (
                <img className="avatar-styles styled-image"
                alt={name}
                src={src} />
            ) : (
                <span className="avatar-styles styled-span">
                {name}
                </span>
            )}
        </span>
    )
}

export default PerfectAvatar
