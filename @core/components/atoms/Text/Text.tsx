import React, { ReactNode } from 'react'
 

interface TextProps{
children: ReactNode;
className?:string;
type?:string;
 
}

const Text: React.FC<TextProps> = ({children, className, type}) => {

switch(type){

  case 'p':
    return <p className={className}>{children}</p> ;
    break;
  case 'h1':
    return <h1 className={className}>{children}</h1> ;
    break;
  case 'h2':
    return <h2 className={className}>{children}</h2> ;
    break;
  case 'h3':
    return <h3 className={className}>{children}</h3> ;
    break;
  case 'h4':
    return <h4 className={className}>{children}</h4> ;
    break;
  case 'h5':
    return <h5 className={className}>{children}</h5> ;
    break;
  case 'h6':
    return <h6 className={className}>{children}</h6> ;
    break;
  default:
    return <div className={className}>{children}</div> ;
  
}

}

export default Text