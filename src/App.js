
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Aboutme from "./components/Aboutme/Aboutme";
import './App.css';
import Projects from "./components/Projects/Projects";
import RecentProject from "./components/RecentProject.jsx/RecentProject";


function App() {
  const headings = {
    language: "Languages",
     os: "OS",
    framework: "Frameworks",
    tools: "Tools/SDKs"
  };
  const listOfProjects = {
    title: "Project ",
    description: "Description",
    tools: "Tools",
    livesite: "LiveSite",
    github: "Github"

  };
  return (
    <div className="App">
      
      <Header />
      <div className = "main-container">
        <Aboutme headings={headings} />
        <RecentProject/>
        <Projects listOfProjects={listOfProjects}/>
      </div>
      <Footer />
      
    </div>
  );
}

export default App;
