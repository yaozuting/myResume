import type { skillsets} from "./types";



function Skill({ input }: { input:  skillsets }) {
    
    return (
      <div className="skills-grid">
        {input.list_skills.map((el, i) => (
          <div key={i} style={{ position: 'relative' }}>
            <img src={el.url} alt="skill_icon" />
            <div className="text-hover">
              <div className="text">{el.name}</div>
            </div>
          </div>
        ))}
      </div>
    )
}

export default Skill