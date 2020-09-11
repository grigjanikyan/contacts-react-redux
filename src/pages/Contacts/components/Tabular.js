import React from 'react';
import Moment from 'react-moment';
import {Table} from 'antd';
import {CopyOutlined} from "@ant-design/icons";

const Tiled = ({list, pagination, onPagination}) => {

    const columns = [
        {
            title: 'Avatar',
            dataIndex: ['picture', 'thumbnail'],
            fixed: 'left',
            width: 100,
            render: (text, record) => (
                <img src={record.picture.thumbnail}/>
            )
        },
        {
            title: 'Full Name',
            dataIndex: ['name', 'first'],
            width: 150,
            render: (text, record) => (
                <h3>{`${record.name.title} ${record.name.first} ${record.name.last}`}</h3>
            )
        },
        {
            title: 'Birthday',
            dataIndex: ['dob', 'date'],
            width: 150,
            render: (text, record) => (
                <Moment format="YYYY/MM/DD">
                    <h3>{record.dob.date}</h3>
                </Moment>
            )
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            width: 250,
            render: (text, record) => (
                <div>
                    <CopyOutlined/>
                    <h3>{record.phone}</h3>
                </div>
            )
        },
        {
            title: 'Email',
            dataIndex: 'email',
            width: 250,
            render: (text, record) => (
                <div>
                    <CopyOutlined/>
                    <h3>{record.email}</h3>
                </div>
            )
        },
        {
            title: 'Location',
            dataIndex: ['location', 'country'],
            width: 250,
            render: (text, record) => (
                <div>
                    <CopyOutlined/>
                    <h3>{`${record.location.country} ${record.location.street.number} ${record.location.street.name} ${record.location.state}`}</h3>
                </div>
            )
        },
        {
            title: 'Nationality',
            dataIndex: 'nat',
            width: 100,
            render: (text, record) => (
                <h3>{record.nat}</h3>
            )
        },
    ];

    const footer = () => {
        return (
            <p>Footer</p>
        );
    }

    return (
        <Table
            columns={columns}
            rowKey={record => record.email}
            dataSource={list}
            scroll={{x: 1200}}
            footer={footer}
            pagination={pagination}
            onChange={(pagination) => onPagination(pagination)}
        />
    )
}

export default Tiled;