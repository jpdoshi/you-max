export const convertUnits = (val: number) => {
  if (val >= 1000000) {
    return Math.floor(val / 1000000) + "M";
  } else if (val >= 1000) {
    return Math.floor(val / 1000) + "K";
  } else {
    return val.toString();
  }
};
