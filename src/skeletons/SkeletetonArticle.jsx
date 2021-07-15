import React from 'react'

import Skeleton from '@material-ui/lab/Skeleton';

const SkeletetonArticle = () => {
    return (
        <div>
            <div className="skeletonUser__h3">
            <Skeleton  variant="text"  />
            </div>
            <div className="skeleton__caption">
            <Skeleton animation="wave"  variant="text" />
            </div>
            <div className="skeleton__caption">
            <Skeleton animation="wave"   variant="text" />
            </div>
             
            
        </div>
    )
}

export default SkeletetonArticle
