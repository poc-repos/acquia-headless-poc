const getStyleType = (type, classes) => {
    let styleType;
    switch (type) {
      case 1:
        styleType = classes.type1;
        break;
      default:
        break;
    }
    return styleType;
  };
  
  export default getStyleType;
  