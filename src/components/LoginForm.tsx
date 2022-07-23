import React, {FC, useState} from 'react';
import {Button, Form, Input} from "antd";
import {rules} from "../utils/rules";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

export const LoginForm: FC = () => {

    const {error, isLoading} = useTypedSelector(state => state.auth)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {login} = useActions()

    const sumbit = () => {
       login(username, password)
    }



    return (
        <Form
            onFinish={sumbit}
        >
            {
                error && <div style={{color: 'red'}}> {error}</div>

            }
            <Form.Item
                label="Имя пользователя"
                name="username"
                rules={[rules.required('Пожалуйста введите имя пользователя')]}
            >
                <Input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </Form.Item>

            <Form.Item
                label="Пароль"
                name="password"
                rules={[rules.required('Пожалуйста введите пароль')]}
            >
                <Input.Password
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Item>

            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button loading={isLoading} type="primary" htmlType="submit">
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};

