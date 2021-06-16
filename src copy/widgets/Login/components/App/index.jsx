import React from "react";
import Footer from "__WIDGETS__/Footer/components";
import Header from "__WIDGETS__/Header/components/App";
import Banner from "__WIDGETS__/Banner/components/App";
import WelcomeMessage from "__WIDGETS__/Welcome/components/App";

const Login = (props) => {
  console.log(props);
  return (
    <>
      <Header {...props} />
      <Banner />
      <WelcomeMessage />
      <Footer {...props} />
    </>
  );
};

export default Login;
