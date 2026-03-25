
import type{educations} from './types'
import ProjectFile from './view'

function Education({ input }: { input: educations }) {


  return (
    <section >
      <h3>Education</h3>
      {input.list_edu.map((element, index) => (
        <div className='timeline-item' key={index}>
            {/* timeline graph */}
             <div className="timeline-left">
                <div className="timeline-icon">
                    <span className="material-symbols-outlined">school</span>
                </div>
                <div className="timeline-line" />
            </div>
            {/* education  */}
            <div className='timeline-card'>
                <div className='text'>
                    <h6 className="timeline-date">{element.duration}</h6>
                    <h5>{element.school_name}</h5>
                    
                    {element.course ? (
                        <h6>{element.course}</h6>) : (
                        <></>
                        )
                    }
                    <h6><b>{element.result}</b></h6>
                </div>

                <div className="school-pic-container">
                    <img src={element.img} alt="school_pic" />
                </div>

                <ProjectFile p ={element.views}></ProjectFile>
            </div>
          
        </div>
      ))}
    </section>
  )
}

export default Education