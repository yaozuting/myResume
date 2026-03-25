
import type{introduction} from './types'

function Introduction({ input }: { input: introduction }) {
  const intro_text = (
    <div className="intro-text">
      <h3>{input.name}</h3>
      <p>
        <span className="material-symbols-outlined">mail</span>
        <a href={`mailto:${input.email}`} target="_blank" rel="noopener noreferrer">
  {input.email}
</a>
      </p>
      <p>
        <span className="material-symbols-outlined">phone_in_talk</span>
        <span>{input.phone}</span>
      </p>
      <h4>About Me</h4>
      <p>{input.brief_intro}</p>
    </div>
  )

  return (
    <section>
      {input.profile_pic ? (
        <>
          {intro_text}
          <div className="intro-pic">
            <img src={input.profile_pic} alt="profile_img" />
          </div>
        </>
      ) : (
        <div className="intro-text">{intro_text}</div>
      )}
    </section>
  )
}

export default Introduction