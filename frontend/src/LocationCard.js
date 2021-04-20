import TreatmentCard from './TreatmentCard'
import OxfordCard from './OxfordCard'

const LocationCard = ({ location }) => {


    const { treatments, oxfords, name, zip } = location

 console.log(location)

  const renderTreatments = () => {
     
   return treatments.map(treatment => {
         return <TreatmentCard treatment={treatment} key={treatment.id} />
        
     })
  }
  
  const renderOxfords = () => {
     
   return oxfords.map(oxford => {
         return <OxfordCard oxford={oxford} key={oxford.id} />
        
     })
  }

    return (
        <div className="col-sm-3 mb-1" >
            <div className="card-body">
                    <h1 className="card-title">{name}</h1>
                   
                 <h3> Treatment Centers </h3>
                    {renderTreatments()}
                <h3> Oxford Homes </h3>
                    {renderOxfords()} 


                   
           
                  
                  
            
                 
                </div>
                
              
                
            </div>
        
    )
}

export default LocationCard 