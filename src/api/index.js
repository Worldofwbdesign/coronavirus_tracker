const URL = 'https://covid19.mathdro.id/api';

export const getGlobalStats = () => fetch(URL).then(res => res.json());

export const getCountriesList = () =>
  fetch(`${URL}/countries`).then(res => res.json());

export const getCountriesStats = country =>
  fetch(`${URL}/countries/${country}`).then(res => res.json());

export const getDailyData = () => fetch(`${URL}/daily`).then(res => res.json());
