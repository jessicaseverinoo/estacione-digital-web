import { Link } from "react-router-dom";
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
                  key: "/veiculo/lista",
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
  );
};

export default HeaderTop;
