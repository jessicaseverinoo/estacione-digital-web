import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { ROUTES } from "../../constants/Constants";

import { Avatar, Button, Drawer, DrawerProps, Menu } from "antd";
import { Col, Row } from "antd/lib/grid";
import { Header } from "antd/lib/layout/layout";
import {
  MenuOutlined,
  HomeOutlined,
  HistoryOutlined,
  WalletOutlined,
  CarOutlined,
  UserOutlined,
} from "@ant-design/icons";

import "./HeaderTop.scss";

const HeaderTop: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  return (
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
              onClick={({ key }) => {
                navigate(key);
              }}
              items={[
                {
                  key: ROUTES.HOME,
                  icon: <HomeOutlined />,
                  label: "Início",
                },
                {
                  key: ROUTES.HISTORY,
                  icon: <HistoryOutlined />,
                  label: "Histórico",
                },
                {
                  key: ROUTES.WALLET,
                  icon: <WalletOutlined />,
                  label: "Carteira",
                },
                {
                  key: ROUTES.VEHICLE.LIST,
                  icon: <CarOutlined />,
                  label: "Veículos",
                },
                {
                  key: ROUTES.PROFILE,
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
  );
};

export default HeaderTop;
