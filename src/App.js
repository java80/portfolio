
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Aboutme from "./components/Aboutme/Aboutme";
import './App.css';
import Projects from "./components/Projects/Projects";
import RecentProject from "./components/RecentProject/RecentProject";


function App() {
  const headings = {
    language: "Languages",
     os: "OS",
    framework: "Frameworks",
    tools: "Tools/SDKs"
  };
  return (
    <div className="App">
      
      <Header />
      <div className = "main-container">
        <Aboutme headings={headings} />
        <RecentProject/>
        <Projects/>
      </div>
      <Footer />
      
    </div>
  );
}

export default App;
