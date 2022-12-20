import React from "react";
import Navbar from "../../components/Navbar";
import Theme from "../../components/Theme";

const Home: React.FC = () => {
  return (
    <Theme>
      <div>
        <Navbar />
        <h3>Buy me a Chocolate</h3>
      </div>
    </Theme>
  );
};

export default Home;
