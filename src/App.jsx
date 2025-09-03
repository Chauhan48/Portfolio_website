import About from "./components/About"
import Education from "./components/Education"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import WorkExperience from "./components/WorkExperience"

function App() {

  return (
    <>
      <Navbar />
      <div id="about">
        <About />
      </div>
      <div id="workExperience">
        <WorkExperience />
      </div>
      <div id="project">
        <Project />
      </div>
      <div id="education">
        <Education />
      </div>
    </>
  )
}

export default App
