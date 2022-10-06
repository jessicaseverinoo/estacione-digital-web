import { Button, Checkbox, Col, Divider, Form, Input, Row, Image } from "antd";
import Layout from "antd/lib/layout/layout";
import React from "react";
import './Home.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/Constants';

function Home() {
    return (
        <Layout style={{ minHeight: "100vh", backgroundColor: "#FFFFFF" }}>
        <Row justify="center" align="middle"  >
          <Col>
            <div className="card">
              <h3>
                <img className="card-icon" src="src\assets\icons\time.svg" alt="Icone Relógio" /> &nbsp;
                Horário de funcionamento
                <img className="card-icon" src="src\assets\icons\pin.svg" alt="Icone Fixar" align="right" />
              </h3>
              <p>De segunda a sexta das 8h00 às 18h00.<br />
                Aos sábados das 8h00 às 12h00.<br />
                Domingo e feriados livre.
              </p>
            </div>
          </Col>
          <Col>
            <div className="card" id="card-info">
              <h3>
                <img className="card-icon" src="src\assets\icons\warning.svg" alt="Icone Atenção" /> &nbsp;
                Fique atento
                <img className="card-icon-action" src="src\assets\icons\close.svg" alt="Icone Fechar" align="right" />
              </h3>
              <p>Para mais informações de uso e<br />
                esclarecimentos sobre <b>fracionamento</b>,<br />
                <b>tolerância</b> e <b>pós-utilização</b>, <a>clique aqui</a>.
              </p>
            </div>
          </Col>
          <Col>
            <div className="card" id="card-periodo">
              <div id="periodo">
                <img className="card-periodo-image" src="src\assets\icons\hourglass.svg" alt="Icone Ampulheta" />
                <div><h1>59:00</h1><p>tempo restante</p></div>
              </div>
            </div>
            <Divider type="vertical" />
          </Col>
        </Row>
  </Layout>
    )
}

export default Home