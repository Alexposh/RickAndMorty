import { Character } from "../Types/types";

export default function ListItem ({character, selected}:{character:Character, selected:boolean}){
    return(<>
    
        <div key={character.id}     
                    style={selected ? {backgroundColor:"#3B704F", borderRadius:"3px",padding:"5px", margin:"5px", color:"white", fontSize:"20px"} : {backgroundColor:"#4B7083", borderRadius:"2px", padding:"3px",margin:"5px", color:"black", fontSize:"20px"}} >
                        {character.name}
                 </div>
                 </>
    )
}