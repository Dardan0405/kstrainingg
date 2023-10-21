import React, { lazy, Suspense } from 'react';
import Loading from '../../Components/Shared/Loading/Loading';
const LazyLoaded = lazy(() => import('./Design'));

function Design(){
    return(
        <Suspense fallback={<Loading/>}>
            <LazyLoaded/>
        </Suspense>
    );
}
export default Design