import type { sideProjects } from "./types";
import type{project} from "./types"
import ProjectFile from './view'

function SideProjects({input}:{input:sideProjects}){

    const ProjectImg= ({p}:{p:project}) => (
            <div className="projectImg">
                 <video controls width="98%" >
                    <source  src={p.pic}/>
                 </video>
            </div>
    )

    const ProjectText = ({p}:{p:project}) => (
           <div className="project_text">
               <h5>{p.name}</h5>
               <div>
                 {p.labels.map((label, idx) =>(
                    <span key={idx}>{label}</span>
                 ))}
               </div>
               <p>{p.brief_summary}</p>
           </div>
    )
 

     return (
        <section>
        <h3>Side Projects</h3>
        <div className="projects-scroll-container">
          {input.list_project.map((project, idx) => (
      
              <div className="project_row" key={idx}>
                  <>
                  <ProjectImg p={project} />
                  <ProjectText p={project} />
                  <ProjectFile p={project.views}/>
                  </>
              </div>
          ))}
          
        </div>
        </section>
         )
}

export default SideProjects