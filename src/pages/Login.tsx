import React, {FC} from 'react';
import {Card, Layout, Row} from "antd";
import {LoginForm} from "../components/LoginForm";

export const Login: FC = () => {
    return (
        <Layout>
            <Row justify={'center'} align={'middle'} style={{height: '900px'}} >
                <Card>
                    <LoginForm/>
                </Card>
            </Row>
        </Layout>
    );
};

