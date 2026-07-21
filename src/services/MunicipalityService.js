// MunicipalityService.js
import api from "../config/api";

export const getMunicipalities = async () => {
  const response = await api.get("/municipality");
  return response.data;
};