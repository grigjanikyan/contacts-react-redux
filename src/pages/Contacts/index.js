import React, {useState, useEffect} from 'react';
import withDataContext from "../../context/consumers/DataConsumer";

import { Button } from 'antd'
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons'
import Page from '../../components/Page'
import FilterBar from './components/FilterBar'
import Tiled from './components/Tiled'
import Tabular from './components/Tabular'


const Contacts = ({ getData, data, loading, pagination, onPagination, onFilter }) => {
    const [viewMode, setViewMode] = useState(true);

    useEffect(() => {
        getData();
    }, [ window.innerWidth ]);

    return (
        <Page className='contacts' loading={loading}>
            <div className='page-header'>
                <h1 className='page-title'>Contacts</h1>
                <div className='buttons'>
                    <Button 
                      className={`${!viewMode ? 'active' : ''}`} 
                      onClick={() => setViewMode(false)} 
                      shape="circle"
                      icon={ <AppstoreOutlined/> }
                    />
                    <Button 
                      className={`${viewMode ? 'active' : ''}`} 
                      onClick={() => setViewMode(true)} 
                      shape="circle"
                      icon={ <BarsOutlined/> }
                    />
                </div>
            </div>
            <div className='main-page'>
                <FilterBar onFilter={onFilter} />
                { 
                    viewMode 
                        ? <Tabular list={data} pagination={pagination} onPagination={onPagination}/> 
                        : <Tiled list={data} />
                }
            </div>
        </Page>
    )
}

export default withDataContext(Contacts, ['getData', 'data', 'loading', 'pagination', 'onPagination','onFilter']);