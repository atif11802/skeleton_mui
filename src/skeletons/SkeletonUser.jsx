import React from 'react'

import Skeleton from '@material-ui/lab/Skeleton';
import Avatar from '@material-ui/core/Avatar';

const SkeletetonArticle = () => {
    return (
        <div>
            <div className="skeletonArticle__h3">
            <Skeleton variant="circle" width={40} height={40} />
            </div>
            <div className="skeleton__caption">
            <Skeleton animation="wave"  variant="text" />
            </div>
            <div className="skeleton__caption">
            <Skeleton animation="wave"   variant="text" />
            </div>
            <div className="skeleton__caption">
            <Skeleton animation="wave"   variant="text" />
            </div>
             
            
        </div>
    )
}

export default SkeletetonArticle
