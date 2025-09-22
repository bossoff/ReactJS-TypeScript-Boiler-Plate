import requestService from "../request/api.request";

export const listCountriesAction = async () => {
  const countries = await requestService.get("/basic/countries");
  return countries;
};