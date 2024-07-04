import "./App.css";
import HomePage from "./Pages/HomePage";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactPage from "./Pages/ContactPage";
import FooterPage from "./Pages/FooterPage";
const App = () => {
  return (
    <>
      <HomePage />
      <AboutUsPage />
      <ContactPage></ContactPage>
      <FooterPage></FooterPage>
    </>
  );
};

export default App;
