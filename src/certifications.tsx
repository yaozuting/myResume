import type { certifications } from "./types";
import ProjectFile from './view'

function Certification ({input}:{input:certifications}){
    return(
        <section>
            <h3>Certifications</h3>
            <div className="card-content">
              {input.list_cert?.map((Element, idx)=>(
                  <div key={idx} className="cert-item">
                      <p className="cert-item-name">{Element.name}</p>
                      <p className="cert-item-date">Issued: <span>{Element?.secured_year}</span></p>
                      <ProjectFile p={Element.views}></ProjectFile>
                  </div>
              ))}
            </div>
        </section>
    )
}
export default Certification