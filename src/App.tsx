
import './App.css'
import  {myProfile} from './types'
import  Introduction from './introduction'
import  Education from './education'
import Skill from './skills'
import Certification from './certifications'
import SideProjects from './sideProject'
import Langs from './langs'

function App() {
  const profile = myProfile
  console.log(profile.introduction)

  return (
    <>
      <div className="app-container">
          <div className="intro-section">
            <Introduction input={profile.introduction} />
          </div>
          
          <div className="education-section">
            <Education input={profile.educations} />
          </div>
          
          <div className="side-by-side-section">
            <div className='lang_skill_div'>
              <div className="languages-card">
                <h3>Languages</h3>
                <div className="card-content">
                  <Langs input={profile.languages}/>
                </div>
              </div>

              <div className="skills-card">
                <h3>Skills</h3>
                <div className="card-content">
                  <Skill input={profile.skillsets}></Skill>
                </div>
              </div>
            </div>
            <div className="certifications-card">
              <Certification input = {profile.certifications}></Certification>
            </div>
          </div>
          
          <div className="side-projects-section">
            <SideProjects input ={profile.sideProjects}></SideProjects>
          </div>
      </div>
    </>
  )
}

export default App
