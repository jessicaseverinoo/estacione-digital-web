import "./Home.scss";

import { Col, Layout, Row, Modal, Divider, Button, Select } from "antd";
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import AvailableHours from "../../components/AvailableHours/AvailableHours";
import React, { useEffect, useState } from "react";
import Paragraph from "antd/lib/skeleton/Paragraph";

const { Content } = Layout;

const Home: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [totalTimeInseconds, setTotalTimeInSeconds] = useState(0);
  const [selectedTime, setSelectedTime] = useState(0);
  const { Option } = Select;

  const listHours = {
    availableHours: [
      {
        hour: 1,
        name: "Hora",
      },
      {
        hour: 2,
        name: "Horas",
      },
      {
        hour: 3,
        name: "Horas",
      },
      {
        hour: 4,
        name: "Horas",
      },
      {
        hour: 5,
        name: "Horas",
      },
      {
        hour: 6,
        name: "Horas",
      },
      {
        hour: 7,
        name: "Horas",
      },
      {
        hour: 8,
        name: "Horas",
      },
      {
        hour: 9,
        name: "Horas",
      },
      {
        hour: 10,
        name: "Horas",
      },
    ],
  };

  let hour = 0;
  let minutes = 0;
  let seconds = 0;
  let minutesAux = 0;

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
    setSelectedHour();
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleChangeSelect = (value: string) => {
    console.log(`selected ${value}`);
  };

  function setSelectedHour() {
    minutesAux = minutes;
    if (minutesAux == 0 && selectedTime == 0)
      alert("Favor escolher a quantidade de horas");
    else {
      if (minutesAux != 0) alert("Favor aguardar o término do ticket atual");
      else {
        setTotalTimeInSeconds((selectedTime + minutesAux) * 3600);
      }
    }
  }

  hour = Math.floor(totalTimeInseconds / 3600);
  minutes = Math.floor((totalTimeInseconds % 3600) / 60);
  seconds = totalTimeInseconds % 60;

  useEffect(() => {
    if (totalTimeInseconds == 0) {
    } else {
      setTimeout(() => {
        setTotalTimeInSeconds(totalTimeInseconds - 1);
      }, 1000);
    }
  }, [totalTimeInseconds]);

  return (
    <div className="home">
      <HeaderTop />
      <Content className="main-content">
        <AvailableHours></AvailableHours>
        <Row justify="center" align="middle">
          <Col span={6}>
            <Button
              type="primary"
              className="select-ticket"
              onClick={showModal}
            >
              Utilizar Tickets
            </Button>
          </Col>
        </Row>
        <div className="content-cards">
          <Row justify="center" align="middle">
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
            <Col>
              <div className="card-time">
                <img
                  className="card-time-image"
                  src="src\assets\icons\hourglass.svg"
                  alt="Icone Ampulheta"
                />
                <Divider type="vertical" />
                <div className="card-time__time">
                  <h2 className="card-time__time__hour">
                    {hour.toString().padStart(2, "0")}:
                    {minutes.toString().padStart(2, "0")}:
                    {seconds.toString().padStart(2, "0")}
                  </h2>
                  <p className="card-time__time__text">tempo restante</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Modal
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          width={1000}
        >
          <h3>Selecione a hora para utilizar</h3>
          <Row>
            <Col span={12}>
              <Row>
                {listHours["availableHours"].map((hour) => (
                  <Col>
                    <div className="btn-hour">
                      <Button
                        onClick={function () {
                          setSelectedTime(hour.hour);
                        }}
                      >
                        {hour.hour}
                        <br />
                        {hour.name}
                      </Button>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col offset={2} span={10}>
              <h3>Selecione um veículo</h3>
              <div className="div-select">
                <Select
                  defaultValue="Selecione um veículo"
                  style={{ width: 180 }}
                  onChange={handleChangeSelect}
                >
                  <Option value="ABC-1234">ABC-1234</Option>
                  <Option value="ABC-1234">ABC-1234</Option>
                  <Option value="ABC-1234">ABC-1234</Option>
                  <Option value="ABC-1234">ABC-1234</Option>
                  <Option value="ABC-1234">ABC-1234</Option>
                </Select>
              </div>
            </Col>
          </Row>
        </Modal>
      </Content>
    </div>
  );
};

export default Home;
