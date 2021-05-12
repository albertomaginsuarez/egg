import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";

import axios from 'axios';

interface Character{
    name?: string;    
}

const List = () => {

    const defaultCharacter:Character[] = [];
    const history = useHistory();
    const [characters, setCharacters]: [Character[], (characters: Character[]) => void] = React.useState(defaultCharacter);

    const [url, setUrl] = useState("https://swapi.dev/api/people");
    const [loading, setLoading] = useState(true);

    const handleClick = (data:Character) => {
        history.push({
            pathname: '/character',            
            state: data
        });
    }

    useEffect(() => {

        const fetchData = async () => {
            await axios.get(url).
            then(function (response) {                
                console.log(response);
                if(response.status === 200){                                                            
                    if(!!response.data.next) {
                        setUrl(response.data.next);
                        let data = response.data.results;                                          
                        setCharacters([  
                                ...characters,                  
                                ...data
                            ]                        
                        )                        
                    } else setLoading(false);   

                    
                }
            })
            .catch(function (error) {            
              console.log(error);
            })                        
        };

        fetchData();
        		
	}, [characters]);            

    if (characters.length === 0) return null;    
    console.log(characters);
    if(loading) return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center">            
                <div className="spinner-grow text-primary" role="status">
                </div>
                <div className="spinner-grow text-secondary" role="status">
                </div>
                <div className="spinner-grow text-success" role="status">
                </div>
                <div className="spinner-grow text-danger" role="status">
                </div>
                <div className="spinner-grow text-warning" role="status">
                </div>
                <div className="spinner-grow text-info" role="status">
                </div>
                <div className="spinner-grow text-light" role="status">
                </div>
                <div className="spinner-grow text-dark" role="status">
                </div>
            </div>
        </div>
    )
    
    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center">   
                <table className="table">
                <thead>
                    <tr>            
                        <th scope="col">Name</th>            
                        <th scope="col"></th>          
                    </tr>
                </thead>
                <tbody>
                    {
                        characters.map((elem,index) => {
                            console.log(elem.name);
                            return(
                                <tr key={index}>                            
                                    <td>{elem.name}</td>   
                                    <td>
                                        <button type="button" onClick={() => handleClick(elem)}>
                                        Ver detalle
                                        </button>
                                    </td>                             
                                </tr>  
                            )         
                        })
                    }                
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default List
