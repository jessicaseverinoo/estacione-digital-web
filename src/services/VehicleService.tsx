import { instance } from "./api";

class VehicleService {
  listVehicle(uuidUsuario: string) {
    const URL_USUARIO = "/usuarios/" + uuidUsuario;

    return instance.get(URL_USUARIO).then((response) => {
      if (response.data.listVeiculo) {
        console.log(response.data.listVeiculo);
        localStorage.setItem(
          "listVeiculo",
          JSON.stringify(response.data.listVeiculo)
        );
      }

      return response.data.listVeiculo;
    });
  }

  addVehicle(
    uuidUsuario: string,
    placa: string,
    tipoVeiculo: string,
    modelo: string,
    favorito: boolean
  ) {
    let payload = {
      placa: placa,
      tipoVeiculo: tipoVeiculo,
      modelo: modelo,
      favorito: favorito,
    };
    const URL_ADD_VEHICLE = "/usuarios/" + uuidUsuario + "/veiculos";

    return instance.post(URL_ADD_VEHICLE, payload).then((response) => {
      return response;
    });
  }
}

export default new VehicleService();
