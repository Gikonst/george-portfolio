import React from 'react';
import { Helmet } from 'react-helmet';
const SeoImage = ({ customImage }) => {
    // Use the absolute URL to the image in the public folder
    const imageUrl = customImage || `https://Gikonst.github.io/george-portfolio/preview_image.jpg`;

    return (
        <Helmet>
            <meta property="og:image" content={imageUrl} />
            <meta property="og:image:width" content="1775" />
            <meta property="og:image:height" content="875" />
            <meta property="og:image:type" content="image/jpeg" />
        </Helmet>
    );
};

export default SeoImage;
