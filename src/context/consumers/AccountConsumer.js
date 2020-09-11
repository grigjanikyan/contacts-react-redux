import React, {forwardRef} from 'react';
import {AccountConsumer} from "../providers/AccountProvider";
import {getContext} from '../../utils';

export default function withAccountContext(ConnectedComponent, properties = []) {
    return forwardRef((props, ref) => {
        return (
            <AccountConsumer>
                {context => {
                    let contextProps = properties.length ? getContext(context, properties) : {}
                    return <ConnectedComponent {...contextProps} {...props} ref={ref}/>
                }}
            </AccountConsumer>
        )
    });
}
