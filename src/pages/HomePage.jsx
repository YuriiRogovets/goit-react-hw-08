import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1>Your Phone Book</h1>
    </div>
  );
};

export default HomePage;
