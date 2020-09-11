import React from 'react';

import {Form, Row, Col, Input, Select, Checkbox, Button} from 'antd';
import {CloseOutlined} from '@ant-design/icons'

const {Search} = Input;
const {Option} = Select;

const FilterBar = ({onFilter}) => {
    return (
        <Form>
            <Row gutter={20}>
                <Col lg={8} md={24}>
                    <Form.Item>
                        <Search onSearch={value => onFilter({name: value})}/>
                    </Form.Item>
                </Col>
                <Col lg={4} xs={24} md={12}>
                    <Form.Item>
                        <Select>
                            <Option>

                            </Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col lg={4} xs={2}>
                    <Form.Item>
                        <Select placeholder={'Gender'} onChange={(value => onFilter({gender: value}))}>
                            <Option value={'male'}>Male</Option>
                            <Option value={'female'}>Female</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col lg={4} xs={12}>
                    <Checkbox>I am creator</Checkbox>
                </Col>
                <Col lg={4} xs={12}>
                    <Button disabled>
                        <CloseOutlined/>
                        <span>Clear</span>
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default FilterBar;