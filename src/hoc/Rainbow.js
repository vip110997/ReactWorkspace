import React from 'react'

const Rainbow=(WrappedComponent)=>{
        const randomColors=['red','green','blue','black','green'];
        const selectedColor=randomColors[Math.floor(Math.random()*5)];
        const className=selectedColor+"-text";

        return(props)=>{
            return(
                <div className={className}>
                    <WrappedComponent {...props}/>
                </div>
                )
            }
        }


export default Rainbow