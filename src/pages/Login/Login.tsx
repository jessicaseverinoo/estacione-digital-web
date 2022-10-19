import { Button, Checkbox, Col, Divider, Form, Input, Row } from "antd";
import Layout from "antd/lib/layout/layout";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.scss";
import AuthService from "../../services/AuthService";

const Login: React.FC = () => {
  const URL_LOGIN = "/login";
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (valuesForm: any) => {
    setIsLoading(true);
    AuthService.login(valuesForm.cpfCnpj, valuesForm.password)
      .then(
        () => {
          navigate("/inicio");
          window.location.reload;
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setIsLoading(false);
        }
      )
      .finally(() => setIsLoading(false));
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
              onFinish={onSubmit}
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
                <Button type="primary" htmlType="submit" disabled={isLoading}>
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
