import React, {useState} from 'react';

import './Micho.css';

function Micho (props){
    const [imageViewer, setImageViewer] = useState("");

    React.useEffect(()=>
        {
            setImageViewer(props.Images[0])
        },[]
    )
    return(
        <div className="Micho" >
            <div className="Micho-header" >
                <h2>{props.Name}</h2>
            </div>
            <div className="Micho-view">
                <div style={{flex:1, padding:"20px"}}>
                    <img className="Michos-img" style={{margin:"0px"}} src={"images/"+props.Name+"/"+imageViewer} alt="Logo" />
                </div>
                <div style={{flex:1, overflow:"auto",maxHeight:"250px", padding:"20px"}}>
                    {props.Images.map(image => 
                        <img onClick={() => console.log(setImageViewer(image))} className="Michos-img" style={{height:100, width:100, objectFit:"cover"}} src={"images/"+props.Name+"/"+image} key={image} alt={image} /> 
                    )}
                </div>
            </div>
            <div className="Micho-header">

            </div>
        </div>
    )
}

export default Micho;