import React, {memo as Memo} from "react";
import Loader from "../Loader";

const Page = Memo(({className, children, loading = false}) => {
    return (
        <div className={`page ${className}`}>
            {!loading ? children : <Loader/>}
        </div>
    )
});

export default Page;
