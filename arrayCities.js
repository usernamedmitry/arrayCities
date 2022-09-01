const gorod = (cities, index, defaultvalue = null) => {
    if (0 <= index && index < cities.length) {
      return cities[index];
    };
    return defaultvalue;
  };
  export default gorod;