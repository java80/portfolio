
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Aboutme from "./components/Aboutme/Aboutme";
import './App.css';
import Projects from "./components/Projects/Projects";
import RecentProject from "./components/RecentProject.jsx/RecentProject";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";


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
  <div className = "main-container">
         <Header />
        <table>
    <tbody>
        <tr>
            <td className ="One"><Aboutme headings={headings} /></td>
              <td className="second"> <Contact /></td>   
            </tr>
            <tr>
            <td className ="One"> <RecentProject/></td>
              <td className="second"> <Education/></td>   
            </tr>
            <tr>
            <td className ="One"> <Projects listOfProjects={listOfProjects} /></td>
              <td className="second"> <Projects listOfProjects={listOfProjects} /></td>   
            </tr>         
    </tbody>
</table>
<Footer />


</div>
      
    </div>
  );
}

export default App;
