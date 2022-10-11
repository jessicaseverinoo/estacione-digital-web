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
          <div className="content-available-hours">
            <Row justify="center">
              <div className="content_available-hours">
                <HourglassOutlined
                  style={{ fontSize: "32px", color: "#08c" }}
                />
                <div className="divider_available-hours">
                  <Divider type="vertical" />
                </div>
                <p className="text_available-hours">
                  Você tem 2 horas disponíveis para utilizar
                </p>
              </div>
            </Row>
          </div>
          <div className="content-cards">
            <Row justify="center">
              <Col>
                <div className="card-hour-open">
                  <div className="card-hour-open__content">
                    <div className="card-hour-open__content-title">
                      <img
                        className="card-hour-open__icon"
                        src="src\assets\icons\time.svg"
                        alt="Icone Relógio"
                      />
                      <h2 className="card-hour-open__title">
                        Horário de funcionamento
                      </h2>
                    </div>
                    <img
                      className="card-hour-open__icon"
                      src="src\assets\icons\pin.svg"
                      alt="Icone Fixar"
                    />
                  </div>
                  <div className="card-hour-open__text">
                    <p>De segunda a sexta das 8h00 às 18h00.</p>
                    <p>Aos sábados das 8h00 às 12h00.</p>
                    <p>Domingo e feriados livre.</p>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="card-info">
                  <div className="card-info__content">
                    <div className="card-info__content_title">
                      <img
                        className="card-info__icon-attention"
                        src="src\assets\icons\warning.svg"
                        alt="Icone Atenção"
                      />
                      <h3 className="card-info__title">Fique atento</h3>
                    </div>
                    <img
                      className="card-info__icon-close"
                      src="src\assets\icons\close.svg"
                      alt="Icone Fechar"
                    />
                  </div>
                  <div className="card-info__text">
                    <p>Para mais informações de uso e</p>
                    <p>
                      esclarecimentos sobre <b>fracionamento</b>
                    </p>
                    <p>
                      <b>tolerância</b> e <b>pós-utilização</b>,
                      <a href="#">clique aqui</a>.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <Row justify="center">
            <Col>
              <div className="card-time">
                <img
                  className="card-periodo-image"
                  src="src\assets\icons\hourglass.svg"
                  alt="Icone Ampulheta"
                />
                <Divider type="vertical" />
                <div className="card-time__time">
                  <h2 className="card-time__time__hour">59:00</h2>
                  <p className="card-time__time__text">tempo restante</p>
                </div>
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
