import React from 'react'

import { CardView } from 'react-card-with-image'
import 'react-card-with-image/dist/index.css'


const TreatmentCard = ({treatment}) => {

    const { props } = treatment

    return(

        <div>
        {treatment.name}
        </div>
    )


  
    
}

export default TreatmentCard 