import React from 'react'
import PerfectAvatar from './PerfectAvatar'
import avatar from '../../logo.png'

function PerfectAvatarFrame() {
    return (
        <div
        className="container perfect-avatar-frame"
        style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            padding: '20px 20px',
            background: '#262526',
            zIndex: 0
        }}
        >
            <PerfectAvatar name="MA" />
            <PerfectAvatar src={avatar} />
            <PerfectAvatar isActive />
            <PerfectAvatar isActive hasBadge />
        </div>
    )
}

export default PerfectAvatarFrame
