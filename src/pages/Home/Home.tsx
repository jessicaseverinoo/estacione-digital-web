import "./Home.scss";

import { HourglassOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import { Col, Layout, Row } from "antd";
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import AvailableHours from "../../components/AvailableHours/AvailableHours";

const { Content } = Layout;

const Home: React.FC = () => {
  return (
    <div className="home">
      <HeaderTop />
      <Content className="main-content">
        <AvailableHours></AvailableHours>
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
    </div>
  );
};

export default Home;
