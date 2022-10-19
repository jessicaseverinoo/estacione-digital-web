import { Alert } from "antd";

interface IAlerts {
  message: string;
  handleClose: () => {};
}

const CustomAlerts = (alerts: IAlerts) => {
  return (
    <>
      <Alert
        message={alerts.message}
        type="success"
        closable
        afterClose={alerts.handleClose}
      />
    </>
  );
};

export default CustomAlerts;
