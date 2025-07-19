export const convertUnits = (val: number) => {
  if (val >= 1000000) {
    return Math.floor(val / 1000000) + "M";
  } else if (val >= 1000) {
    return Math.floor(val / 1000) + "K";
  } else {
    return val.toString();
  }
};

export const convertISODuration = (val: any) => {
  const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
  const [, h = null, m = null, s = null] = val.match(regex);

  const pad = (num: any) => String(num).padStart(2, "0");

  let parts = [];

  if (h) parts.push(pad(h));
  if (m || h) parts.push(pad(m || 0)); // include minutes if hours exist
  if (s || m || h)
    parts.push(pad(s || 0)); // always show seconds if any other part exists
  else if (s) parts.push(pad(s)); // only seconds

  return parts.join(":");
};
