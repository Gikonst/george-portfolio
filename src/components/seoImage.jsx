import * as React from 'react'

import featuredImage from '../assets/preview_image.jpg' 

export const FeaturedImage = (props) => {
    
    <>
    {
        props.customImage ? (
            <meta property="og:image" content={props.customImage} />
        )
        :
        (
            <meta name="og:image" content={"https://gikonst.github.io/george-portfolio/" + featuredImage} />
        )
    }
    </>
}


export default FeaturedImage;