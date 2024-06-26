import React from 'react'

const Img = ({ src, alt, className, style }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={className}
            style={style}
        />
    )
}

export default Img;