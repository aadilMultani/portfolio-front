import React from 'react';
import Skeleton from 'react-loading-skeleton';

function CardSkeleton() {
    return (
        <div className='wrapper-skeleton'>
            <div className="left-col">
                <Skeleton width={500} height={22} count={5} style={{ marginBottom: '1.5rem' }} />
            </div>
            <div className="right-col">
                <Skeleton count={5} height={22} style={{ marginBottom: '1.5rem' }} />
            </div>
        </div>
    )
}

export default CardSkeleton;