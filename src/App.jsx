import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Projects } from "./components/projects";
import { Team } from "./components/team";
import JsonData from "./data/data.json";
import "./App.css";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Header data={landingPageData.Header} />
      <Navigation />
      <Projects data={landingPageData.Projects} />
<About data={landingPageData.About} />
      <Team data={landingPageData.Team} />
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; ∞ Billiam Wender and the <a href="https://github.com/LadueCS/laduecs.github.io/graphs/contributors">Ladue community</a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default App;