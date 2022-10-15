import { Button, Checkbox, Col, Divider, Form, Input, Row, Image } from "antd";
import Layout from "antd/lib/layout/layout";
import React from "react";
import "./Login.scss";

const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#FFFFFF" }}>
      <Row justify="center" align="middle">
        <Col span={7}>
          <div className="form-login">
            <Form
              name="basic"
              layout="vertical"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="CPF ou CNPJ"
                name="cpfCnpj"
                rules={[
                  {
                    required: true,
                    message: "Por favor, insira seu CPF ou CNPJ",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Senha"
                name="password"
                rules={[{ required: true, message: "Senha inválida" }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ span: 24 }}
              >
                <Checkbox>Lembra-me</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ span: 24 }}>
                <Button type="primary" htmlType="submit">
                  Entrar
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
        <Col offset={1} span={1}>
          <Divider type="vertical" style={{ height: "100vh" }} />
        </Col>
        <Col span={7}>
          <img
            width="100%"
            src="src/assets/images/logo.jpg"
            alt="Estacione Digital"
          />
        </Col>
      </Row>
    </Layout>
  );
};

export default Login;
