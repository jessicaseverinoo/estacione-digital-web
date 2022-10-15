import "./Home.scss";

import { HourglassOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import { Col, Layout, Row } from "antd";
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import AvailableHours from "../../components/AvailableHours/AvailableHours";
import React, { useEffect, useState } from "react";

const { Content } = Layout;

const Home: React.FC = () => {
  let hour = 0, minutes = 0, seconds = 0, tempoEscolhido = 0
  let minutesAux = 0
  const [totalTimeInseconds, setTotalTimeInSeconds] = useState(0)

  const shoot = () => {
    minutesAux = minutes
    if (minutesAux == 0 && tempoEscolhido == 0)
      alert("Favor escolher a quantidade de horas")
    else {
      if (minutesAux != 0)
        alert("Favor aguardar o término do ticket atual")
      else {
        setTotalTimeInSeconds((tempoEscolhido + minutesAux) * 3600)
      }
    }
  }

  const set1 = () => { tempoEscolhido = 1 }
  const set2 = () => { tempoEscolhido = 2 }
  const set3 = () => { tempoEscolhido = 3 }
  const set4 = () => { tempoEscolhido = 4 }
  const set5 = () => { tempoEscolhido = 5 }
  const set6 = () => { tempoEscolhido = 6 }
  const set7 = () => { tempoEscolhido = 7 }
  const set8 = () => { tempoEscolhido = 8 }
  const set9 = () => { tempoEscolhido = 9 }
  const set10 = () => { tempoEscolhido = 10 }

  hour = Math.floor(totalTimeInseconds / 3600)
  minutes = Math.floor((totalTimeInseconds % 3600) / 60)
  seconds = (totalTimeInseconds % 60)

  useEffect(() => {
    if (totalTimeInseconds == 0) { } else {
      setTimeout(() => {
        setTotalTimeInSeconds(totalTimeInseconds - 1)
      }, 1000)
    }
  }, [totalTimeInseconds])

  return (
    <div className="home">
      <HeaderTop />
      <Content className="main-content">
        <AvailableHours></AvailableHours>
        <div>
          <Row justify="center" align="middle">
            <Col>
              <a href="#open-modal"><button className="button" id="button-ticket">Utilizar Tickets</button></a>
            </Col>
          </Row>
        </div>
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
              <input type="checkbox" id="function-close"></input>
              <div className="checkbox-wrapper">
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
                    <label for="function-close">
                      <img
                        className="card-info__icon-close"
                        src="src\assets\icons\close.svg"
                        alt="Icone Fechar"
                      />
                    </label>
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
      </Content>
      <Content>
        <div className="modal" id="open-modal">
          <div>
            <Row justify="end" align="top">
              <Col>
                <a href="#fechar">
                  <img className="card-icon-action" src="src\assets\icons\close.svg" alt="Icone Fechar" />
                </a>
              </Col>
            </Row>
            <Row justify="space-evenly" align="top">
              <Col>
                <div className="div-modal">
                  <p>Selecione a hora para utilizar</p>
                  <div className="lista-botoes">
                    <button onClick={set1}>1<br />hora</button>
                    <button onClick={set2}>2<br />horas</button>
                    <button onClick={set3}>3<br />horas</button>
                    <button onClick={set4}>4<br />horas</button>
                    <button onClick={set5}>5<br />horas</button>
                    <button onClick={set6}>6<br />horas</button>
                    <button onClick={set7}>7<br />horas</button>
                    <button onClick={set8}>8<br />horas</button>
                    <button onClick={set9}>9<br />horas</button>
                    <button onClick={set10}>10<br />horas</button>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="div-modal">
                  <p>Selecione um veículo</p>
                  <div className="div-select">
                    <select>
                      <option>Veículo 1</option>
                      <option>Veículo 2</option>
                      <option>Veículo 3</option>
                    </select>
                  </div>
                </div>
              </Col>
            </Row>
            <Row justify="center" align="middle">
              <div id="div-confirmar">
                <a href="#fechar">
                  <button className="button" id="button-confirmar" onClick={shoot}>Confirmar</button>
                </a>
              </div>
            </Row>
          </div>
        </div>
      </Content>
    </div>
  );
};

export default Home;