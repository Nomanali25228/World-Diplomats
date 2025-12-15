import { getNames, getCode } from "country-list";

export const countryOptions = getNames().map((name) => {
  const code = getCode(name);
  return {
    value: name,
    label: name,
    code: code,
  };
});
