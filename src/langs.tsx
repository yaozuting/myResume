import type { languages} from "./types";
import { LinearProgress } from '@mui/material';


function Langs({ input }: { input: languages  }) {
    console.log(input)
    return (
      <>
        {input.list_langs?.map((el, i) => (
         <div className="lang-item" key={i}>
         <p>{el.name}</p>
      
        <div style={{ width: '100%', height: '10px' }}>
          <LinearProgress
                variant="determinate"
                value={el.level}
                color="primary"
                    />
        </div>
         </div>
        ))}
      </>
    )
}
export default Langs