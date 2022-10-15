import { Button, Checkbox, Col, Divider, Form, Input, Row, Image } from "antd";
import Layout from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import './Home.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/Constants';

function Home() {

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
    <><script src="Home.js"></script><Layout style={{ minHeight: "100vh", backgroundColor: "#FFFFFF" }}>
      <div className="body">
        <Row justify="center" align="middle">
          <Col>
            <a href="#abrirModal"><button className="button" id="button-ticket">Utilizar Tickets</button></a>
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <Col>
            <div className="card">
              <h3>
                <img className="card-icon" src="src\assets\icons\time.svg" alt="Icone Relógio" /> &nbsp;
                Horário de funcionamento
                <img className="card-icon" id="icon-canto" src="src\assets\icons\pin.svg" alt="Icone Fixar" align="right" />
              </h3>
              <p>De segunda a sexta das 8h00 às 18h00.<br />
                Aos sábados das 8h00 às 12h00.<br />
                Domingo e feriados livre.
              </p>
            </div>
          </Col>
          <Col>
            <input type="checkbox" id="item-1"></input>
            <div className="checkbox-wrapper">
              <div className="card" id="card-info">
                <h3>
                  <img className="card-icon" src="src\assets\icons\warning.svg" alt="Icone Atenção" /> &nbsp;
                  Fique atento
                  <label for="item-1">
                    <img className="card-icon-action" src="src\assets\icons\close.svg" alt="Icone Fechar" align="right" />
                  </label>
                </h3>
                <p className="name">Para mais informações de uso e<br />
                  esclarecimentos sobre <b>fracionamento</b>,<br />
                  <b>tolerância</b> e <b>pós-utilização</b>, <a>clique aqui</a>.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="card" id="card-periodo">
              <div id="periodo">
                <img className="card-periodo-image" src="src\assets\icons\hourglass.svg" alt="Icone Ampulheta" />
                <div>
                  <h1>
                    {hour.toString().padStart(2, "0")}:
                    {minutes.toString().padStart(2, "0")}:
                    {seconds.toString().padStart(2, "0")}
                  </h1>
                  <p>tempo restante</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="modal" id="abrirModal">
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
    </Layout></>
  )
}

export default Home

function cetaTempo(valor: any, string: any) {
  throw new Error("Function not implemented.");
}
