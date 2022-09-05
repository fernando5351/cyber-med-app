//Envio de los datos de usuarios como objetos
export const isValidObjField = (obj) => {
  return Object.values(obj).every((value) => value.trim());
};
//Mensaje de error para mostrarlo en pantalla en los forms
export const updateError = (error, stateUpdater) => {
  stateUpdater(error);
  setTimeout(() => {
    stateUpdater("");
  }, 2000);
};
//Validacion de si es un Email correcto
export const isEmailValid = (value) => {
  const regx = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  return regx.test(value);
};
