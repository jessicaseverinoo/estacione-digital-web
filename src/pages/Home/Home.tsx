import "./Home.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/Constants";

import {
  MenuOutlined,
  HomeOutlined,
  HistoryOutlined,
  WalletOutlined,
  CarOutlined,
  UserOutlined,
  HourglassOutlined,
} from "@ant-design/icons";
import { Divider, DrawerProps, Menu, RadioChangeEvent } from "antd";
import { Col, Layout, Row, Button, Drawer } from "antd";
import { Avatar } from "antd";
import React, { useState } from "react";

const { Header, Content } = Layout;

const Home: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  return (
    <Layout className="home">
      <Layout className="site-layout">
        <Header className="header">
          <Row justify="space-between">
            <Col>
              <Button type="text" onClick={showDrawer}>
                <MenuOutlined style={{ color: "#ffffff" }} />
              </Button>
              <Drawer
                title=""
                placement={placement}
                closable={false}
                onClose={onClose}
                open={open}
                key={placement}
              >
                <Menu
                  defaultSelectedKeys={["1"]}
                  items={[
                    {
                      key: "1",
                      icon: <HomeOutlined />,
                      label: "Início",
                    },
                    {
                      key: "2",
                      icon: <HistoryOutlined />,
                      label: "Histórico",
                    },
                    {
                      key: "3",
                      icon: <WalletOutlined />,
                      label: "Carteira",
                    },
                    {
                      key: "4",
                      icon: <CarOutlined />,
                      label: "Veículos",
                    },
                    {
                      key: "5",
                      icon: <UserOutlined />,
                      label: "Perfil",
                    },
                  ]}
                />
              </Drawer>
            </Col>
            <Col>
              <Row align="middle">
                <p className="wellcome-user">Olá, Jessica</p>
                <Avatar shape="square" size="large" icon={<UserOutlined />} />
              </Row>
            </Col>
          </Row>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Row justify="center">
            <div className="content_available-hours">
              <HourglassOutlined style={{ fontSize: "32px", color: "#08c" }} />
              <div className="divider_available-hours">
                <Divider type="vertical" />
              </div>
              <p className="text_available-hours">
                Você tem 2 horas disponíveis para utilizar
              </p>
            </div>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
