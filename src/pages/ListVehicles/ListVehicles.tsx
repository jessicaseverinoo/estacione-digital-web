import { DeleteFilled, DeleteOutlined, EditFilled, EditOutlined, StarFilled, StarOutlined, StarTwoTone } from "@ant-design/icons";
import { Button, Checkbox, Col, Divider, Form, Input, Row, Image, Table, Space, Tag, Switch, Radio } from "antd";
import type { ColumnsType } from 'antd/es/table';
import Layout from "antd/lib/layout/layout";

import React from "react";
import './ListVehicles.scss';






const ListVehicles: React.FC = () => {
    const onFinish = (values: any) => {
        console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    const onChangeFavorito = (checked: boolean) => {
        console.log(`switch to ${checked}`);
    };


    interface DataType {
        key: string;
        tipoVeiculo: string;
        placa: string;
        favorito: string;
    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'Tipo Veículo',
            dataIndex: 'tipoVeiculo',
            key: 'tipoVeiculo',
            render: (_, { tipoVeiculo }) => (

                tipoVeiculo === 'carro' ? <img
                    width="30%"
                    src="../src/assets/icons/vehicle.svg"
                    alt="Carro"
                /> : <img
                    width="30%"
                    src="../src/assets/icons/truck.svg"
                    alt="Caminhão"
                />
            ),

        },
        {
            title: 'Placa',
            dataIndex: 'placa',
            key: 'placa',
        },
        {
            title: 'Favorito',
            dataIndex: 'favorito',
            key: 'favorito',
            render: (_, { favorito }) => (
                favorito === 'true' ? <StarFilled style={{ color: '#FFE142' }} /> : <StarOutlined />
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <EditFilled style={{ color: '#555555' }} />
                    <DeleteFilled style={{ color: '#EB4444' }} />
                </Space>
            ),
        },
    ];

    const data: DataType[] = [
        {
            key: '1',
            tipoVeiculo: 'carro',
            placa: 'GGG-4444',
            favorito: 'true',

        },
        {
            key: '2',
            tipoVeiculo: 'caminhao',
            placa: 'AAA-4444',
            favorito: 'false',

        },

    ];


    return (
        <Layout style={{ minHeight: "100vh", backgroundColor: "#FFFFFF" }}>
            <Row justify="center" align="middle">
                <Col span={7}>
                    <div className="form-list-vehicle">
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
                            <label>Lista de Veículos</label>
                            <Table dataSource={data} columns={columns} pagination={false} showHeader={false} />

                        </Form>
                    </div>
                </Col>
                <Col offset={1} span={1}>
                    <Divider type="vertical" style={{ height: "100vh" }} />
                </Col>
                <Col span={7}>
                    <div className="form-edit-vehicle">
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
                                label="Favorito"
                                name="favorito"
                            >
                                <Switch onChange={onChangeFavorito} />
                            </Form.Item>

                            <Form.Item label="Tipo do veículo"  >
                                <Radio.Group >
                                    <Radio.Button value="carro" ><img
                                        width="30%"
                                        src="../src/assets/icons/vehicle.svg"
                                        alt="Carro"
                                    /></Radio.Button>
                                    <Radio.Button value="caminhao" ><img
                                        width="60%"
                                        src="../src/assets/icons/truck.svg"
                                        alt="Caminhão"
                                    /></Radio.Button>
                                    <Radio.Button value="onibus" ><img
                                        width="60%"
                                        src="../src/assets/icons/buss.svg"
                                        alt="Onibus"
                                    /></Radio.Button>
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item wrapperCol={{ span: 24 }}>
                                <Button type="primary" htmlType="submit">
                                    Adicionar Veículo
                                </Button>
                            </Form.Item>
                        </Form>

                    </div>

                </Col>
            </Row>
        </Layout>
    );
};

export default ListVehicles