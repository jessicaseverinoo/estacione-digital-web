import React from "react";
import { HourglassOutlined } from "@ant-design/icons";
import { Divider, Row } from "antd";
import "./AvailableHours.scss";

const AvailableHours: React.FC = () => {


  return (
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
    
  );
};

export default AvailableHours;
