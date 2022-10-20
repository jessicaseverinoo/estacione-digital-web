import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Table,
  Space,
  Switch,
  Radio,
  Popconfirm,
  RadioChangeEvent,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import Layout, { Content } from "antd/lib/layout/layout";
import HeaderTop from "../../components/HeaderTop/HeaderTop";

import React, { useEffect, useState } from "react";
import "./ListVehicles.scss";
import AvailableHours from "../../components/AvailableHours/AvailableHours";
import VehicleService from "../../services/VehicleService";
import AuthService from "../../services/AuthService";

const ListVehicles: React.FC = () => {
  const [listVehicle, setlistVehicle] = useState([]);
  
  useEffect(() => {
    VehicleService.listVehicle(AuthService.getCurrentUser().uuidUsuario).then(
      (response) => {
        setlistVehicle(response);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(resMessage);
      }
    );
  }, []);

  const onFinish = (values: any) => {
    console.log("valores recebidos:", values);
    VehicleService.addVehicle(
      AuthService.getCurrentUser().uuidUsuario,
      values.placa,
      "CARRO",
      values.modelo,
      false
    ).then(
      (response) => {
        console.log("Success:", values);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(resMessage);
      }
    );
  };

  
  const onChangeTipoVeiculo = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
   
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onChangeFavorito = (checked: boolean) => {
    console.log(`Switch to ${checked}`);
  };

  const handleDelete = (stid: any) => {
    console.log(stid);
  };

  interface IData {
    uuidVeiculo: string;
    tipoVeiculo: string;
    placa: string;
    favorito: string;
  }

  function defineTypeImageVehicle(typeVehicle: string) {
    switch (typeVehicle) {
      case "CARRO":
        return (
          <img
            className="icon-table"
            src="/src/assets/icons/vehicle.svg"
            alt="Carro"
          />
        );
      case "CAMINHAO":
        return (
          <img
            className="icon-table"
            src="/src/assets/icons/truck.svg"
            alt="Caminhão"
          />
        );
      case "ONIBUS":
        return (
          <img
            className="icon-table"
            src="/src/assets/icons/buss.svg"
            alt="Ônibus"
          />
        );
    }
  }

  const columns: ColumnsType<IData> = [
    {
      title: "Tipo Veículo",
      dataIndex: "tipoVeiculo",
      key: "tipoVeiculo",
      render: (_, { tipoVeiculo }) => defineTypeImageVehicle(tipoVeiculo),
    },
    {
      title: "Placa",
      dataIndex: "placa",
      key: "placa",
    },
    {
      title: "Favorito",
      dataIndex: "favorito",
      key: "favorito",
      render: (_, { favorito }) =>
        favorito === "true" ? (
          <img
            className="icon-table"
            src="/src/assets/icons/star.svg"
            alt="Favorito"
          />
        ) : (
          <img
            className="icon-table"
            src="/src/assets/icons/star.svg"
            alt="Favorito"
          />
        ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <img
            className="icon-table"
            src="/src/assets/icons/edit.svg"
            alt="Editar"
          />
          <Popconfirm
            title="Tem certeza de que deseja deletar?"
            okText="Sim"
            cancelText="Cancelar"
            onConfirm={() => handleDelete(record.uuidVeiculo)}
          >
            <img
              className="icon-table"
              src="/src/assets/icons/delete.svg"
              alt="Deletar"
            />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const data: IData[] = listVehicle;

  return (
    <div className="listVehicles">
      <HeaderTop />
      <Content className="main-content">
        <Layout style={{ backgroundColor: "#FFFFFF" }}>
          <Row justify="center">
            <Col>
              <AvailableHours></AvailableHours>
            </Col>
          </Row>
          <Row justify="center" align="top">
            <Col span={7}>
              <div className="form-list-vehicle">
                <h2>Lista de Veículos</h2>
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
                  <Table
                    dataSource={data}
                    columns={columns}
                    pagination={false}
                    showHeader={false}
                  />
                </Form>
              </div>
            </Col>
            <Col offset={1} span={1}>
              <Divider type="vertical" style={{ height: "100vh" }} />
            </Col>
            <Col span={7}>
              <div className="form-edit-vehicle">
                <h2>Adicionar Veículo</h2>
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
                    label="Placa do veículo"
                    name="placa"
                    rules={[
                      {
                        required: true,
                        message: "Por favor, insira a placa do veículo",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Modelo do veículo"
                    name="modelo"
                    rules={[
                      {
                        required: true,
                        message: "Por favor, insira o modelo do veículo",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    className="switch"
                    label="Favorito"
                    name="favorito"
                  >
                    <Switch onChange={onChangeFavorito} />
                  </Form.Item>

                  <Form.Item
                    label="Tipo do veículo"
                    rules={[
                      {
                        required: true,
                        message: "Por favor, selecione o tipo do veículo",
                      },
                    ]}
                  >
                    <Radio.Group defaultValue={"CARRO"} onChange={onChangeTipoVeiculo} > 
                      <Radio.Button className="type-vehicle" value="CARRO" >
                        <img
                          className="icon-radio-button"
                          src="/src/assets/icons/vehicle.svg"
                          alt="Carro"
                        />
                      </Radio.Button>
                      <Radio.Button className="type-vehicle" value="CAMINHAO">
                        <img
                          className="icon-radio-button"
                          src="/src/assets/icons/truck.svg"
                          alt="Caminhão"
                        />
                      </Radio.Button>
                      <Radio.Button className="type-vehicle" value="ONIBUS">
                        <img
                          className="icon-radio-button"
                          src="/src/assets/icons/buss.svg"
                          alt="Onibus"
                        />
                      </Radio.Button>
                    </Radio.Group>
                  </Form.Item>

                  <Form.Item>
                    <Button type="primary" size="large" block htmlType="submit">
                      Adicionar Veículo
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Col>
          </Row>
        </Layout>
      </Content>
    </div>
  );
};

export default ListVehicles;
