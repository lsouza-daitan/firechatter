export default function makeEnum(keys) {
    const enumObj = { _keys: keys };
    keys.forEach(k => enumObj[k] = k.toLowerCase());
    return enumObj;
};
