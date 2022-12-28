import React from 'react'
 

interface TextInputProps{
className?:string;
type?:string;
 
}

const TextInput: React.FC<TextInputProps> = ({className, type}) => {

switch(type){

  case "text":
    return   <input type='text' className={className}/>;
    break;
  case "number" :
      return  <input type="number" className={className} /> ; 
      break;
  case "password":
    return <input type="password" className={className}/> ; 
    break;
  case "email":
    return  <input type="email" className={className}/> ; 
    break;
  case "tel":
    return <input type="tel" className={className}/>; 
    break;
 case "url":
    return   <input type="url" className={className}/>; 
    break;
  case "date":
    return  <input type="date" className={className}/>;   
    break;
  case "file":
    return  <input type="file" className={className}/>;   
    break;
  case "search":
    return  <input type="search" className={className}/>;   
    break;
  case "time":
    return  <input type="time" className={className}/>;   
    break;
  default:
    return <input type='text' className={className}/>;
        
}

}

export default TextInput;