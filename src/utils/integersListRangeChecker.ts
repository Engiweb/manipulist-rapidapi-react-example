const sortAb = (a: number, b: number): number => a - b;

const integersListRangeChecker = (value: string): boolean => {
  if (!value || value === "") {
    return false;
  }

  const valueIntegers = value
    .toString()
    .split(/[,|-]/)
    .map((num) => parseInt(num));

  if (valueIntegers.includes(NaN) || valueIntegers.length < 1) {
    return false;
  }

  const reversed = valueIntegers.slice().reverse().join(",");
  const sorted = valueIntegers.sort(sortAb).reverse().join(",");

  if (sorted !== reversed) {
    return false;
  } else {
    for (let index = 0; index < valueIntegers.length; index++) {
      if (Number.isNaN(valueIntegers[index])) {
        return false;
      }
    }
  }

  return true;
};

export default integersListRangeChecker;
