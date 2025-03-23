// import { useParams } from "react-router-dom";
import { gql, useQuery } from '@apollo/client';
import { CharacterData, CharacterVars } from "../Types/types";


const GET_CHARACTER_BY_ID = gql`
  query GetCharacterById($id: ID!) {
    character(id: $id) {
      id
      name
      image
    }
  }
`;

const SingleCharacter: React.FC<{ id: string }> = ({ id }) => {

  const { loading, error, data } = useQuery<CharacterData, CharacterVars>(GET_CHARACTER_BY_ID, {
      variables: { id },
    });
  
    if (loading) return <p>Loading...</p>; // this is displayed while the data is being fetched
    if (error) return <p>Error... </p>; // this is displayed if there is an error in fetching the data 
  
    return (
      <div style={{ width: "500px",display: "flex", flexDirection: "column", backgroundColor: "#4B7083", height: "100%", borderRadius: "5px", marginTop:"75px" }}>
        <h2>This is {data?.character.name}</h2>
        <img src={data?.character.image} alt={data?.character.name} style={{ width: "90%", padding: "5%", borderRadius: "5%" }} />
        
      </div>
    );
  };
  
  export default SingleCharacter; 