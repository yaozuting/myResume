import type {view} from "./types"

const ProjectFile = ({p}:{p:view}) =>(
             <div className="file-container">
                {p.isDownload ? 
                <a href={p.view} download>
                    {p.viewText}</a>:
                    <a href={p.view} >{p.viewText}</a>}
               
           </div>
    )

export default ProjectFile