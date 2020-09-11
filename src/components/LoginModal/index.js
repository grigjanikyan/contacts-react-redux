import React, {useState} from "react";

import {Modal, Button, Form, Input, Row} from "antd";
import {LoginOutlined, UserOutlined, LockOutlined} from "@ant-design/icons";

import withAccountContext from "../../context/consumers/AccountConsumer";

const LoginModal = ({login}) => {
    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();

    const onFinish = (values) => {
        login(values.email);
        setVisible(!visible);
    };

    const handleCancel = (e) => {
        setVisible(!visible);
    };

    return (
        <>
            <Button type="primary" onClick={() => setVisible(!visible)}>
                <LoginOutlined style={{color: '#fff'}}/>
                Sign In
            </Button>
            <Modal title="Sign In" visible={visible} footer={null} onCancel={() => handleCancel()}>
                <Form
                    form={form}
                    name="normal_login"
                    className="login-form"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="email"
                        rules={[{required: true, message: "The email field is required."}]}
                    >
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon"/>}
                            placeholder="Username"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{required: true, message: "The password field is required."}]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            size='large'
                        >
                            Sign In
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default withAccountContext(LoginModal, ['login']);
