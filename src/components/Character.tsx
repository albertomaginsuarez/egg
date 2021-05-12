import React, {useEffect,useState} from 'react'
import { useLocation } from "react-router-dom";

const Character = () => {
    const location = useLocation();  
    const [name, setName] = useState("");
    const [birth, setBirth] = useState("");
    const [eye, setEye] = useState("");

    useEffect(() => {
        let x: any = location.state;
        console.log(x);   
        setName(x.name);                                     
        setBirth(x.birth_year);
        setEye(x.eye_color);
        
     }, [location]);

    return (
        

            <div className="container">
            <div className="d-flex justify-content-center align-items-center">   
                <table className="table">              
                <tbody>                    
                    <tr>                            
                        <td>name</td>   
                        <td>{name}</td>           
                    </tr>
                    <tr>                            
                        <td>birth_year</td>   
                        <td>{birth}</td>           
                    </tr>
                    <tr>                            
                        <td>eye_color</td>   
                        <td>{eye}</td>           
                    </tr>                                 
                </tbody>
                </table>
            </div>
            </div>
    )
}

export default Character
