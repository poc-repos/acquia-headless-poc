const getRouterSearchParam = () => {
    const param = window.location.hash.split("?")[1];
  
    if (param != null) {
      return `?${param}`;
    }
    return "";
  }; // router way of getting searchParam
  
  export default getRouterSearchParam;
  