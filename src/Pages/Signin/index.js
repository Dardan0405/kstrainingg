import React, { lazy, Suspense } from 'react';
import Loading from '../../Components/Shared/Loading/Loading';
const LazyLoaded = lazy(() => import('./Signin'));
function Signin(){
    return(
        <Suspense fallback={<Loading/>}>
            <LazyLoaded/>
        </Suspense>
    );
}
export default Signin