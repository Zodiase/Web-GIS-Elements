import * as querystring from 'querystring';

/**
 * @type {Object.<isSet: boolean, val: string -> *>}
 * @readonly
 */
export const commonAttributeToPropertyConverters = {
  bool: (isSet) => isSet,
  string: (isSet, val) => isSet ? val.trim() : null,
  number: (isSet, val) => isSet ? parseFloat(val) : null,
  array_number: (isSet, val) => isSet
    ? val.split(',')
      .map((v) => v.trim())
      .map((v) => parseFloat(v))
    : null,
  getQueryStringParser: (sep = '&', eq = '=') => (isSet, val) =>
    isSet
      ? querystring.parse(val, sep, eq)
      : {},
};

export const createBooleanPropertyToAttributeConverter = (propName) =>
  (val) => ({
    isSet: Boolean(val),
    value: propName,
  });

/**
 * @type {Object.<* -> {isSet: boolean, value: string}>}
 * @readonly
 */
export const commonPropertyToAttributeConverters = {
  disabled: createBooleanPropertyToAttributeConverter('disabled'),
  invisible: createBooleanPropertyToAttributeConverter('invisible'),
  array_simple: (val) => ({
    isSet: !(val === null),
    value: (val === null) ? '' : val.join(', '),
  }),
  getQueryStringBuilder: (sep = '&', eq = '=') => (val) => ({
    isSet: !(val === null),
    value: querystring.stringify(val, sep, eq),
  }),
};

/**
 * @type {Object.<a: *, b: * -> boolean>}
 * @readonly
 */
export const commonPropertyComparators = {
  array: (a, b) => a !== null && b !== null && a.length === b.length && a.every((x, i) => x === b[i]),
};

const charDashCharRegex = /([a-z0-9])-([a-z])/i;

export const camelizeString = (str) => {
  let finalStr = str;
  let match = null;

  while (match = finalStr.match(charDashCharRegex)) {
    finalStr = finalStr.replace(match[0], `${match[1]}${match[2].toUpperCase()}`);
  }

  return finalStr;
};

/**
 * Convert `some-property-name` to `somePropertyName`.
 * @param {Object} obj
 */
export const toCamelCasedObject = (obj) => Object.entries(obj).reduce((acc, [key, value]) => {
  const camelKey = camelizeString(key);

  return {
    ...acc,
    [camelKey]: value,
  };
}, {});
