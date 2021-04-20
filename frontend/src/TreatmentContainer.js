import React, { Component } from 'react'
import TreatmentList from './TreatmentList'
import MapContainer from './MapContainer'
import TreatmentCard from './TreatmentCard'


export default class TreatmentContainer extends Component {
state = {
    insurance_type: ["TRICARE", "Private", "Medicaid"],
    treatments: [], 
    searchText: "", 
    filteredTreatments: [],
    filteredInsurance: []

}
 componentDidMount = async () => {
     
        const res = await fetch('http://localhost:3000/treatments')
        const treatments = await res.json()
    //    locations.forEach(location => {
       

    //     })
         this.setState({ treatments: treatments })
         
    }

    
    //  filteredLocations = () => this.state.treatments.filter(treatment => treatment.location_id.includes(this.state.searchText)  )

    filteredInsurance = () => {
    var filteredInsuranceArray = this.state.treatments.filter(treatment => treatment.insurance_types.includes(this.state.searchText))
                this.setState({filteredInsurance: filteredInsuranceArray }) 
    
    }
    handleOnChange = (event) => {
        var insuranceArray = this.state.treatments.filter(treatment => treatment.insurance_types.includes(event.target.value))
                  this.setState({filteredTreatments: insuranceArray})
              
    }
    

    render(){
        return(
<div>



<div className="form-group">
                    {/* <label htmlFor="search-text">Search by Insurance:</label>
                    <input onChange={event => this.handleOnChange(event)} type="text" className="form-control" id="search-text" placeholder="Insurance Type (Private, TRICARE, Medicaid, etc.)"/> */}

                    

                    {/* <select onChange={event => this.handleOnChange(event)} name="insurance" id="insurance">
                
                        {this.state.insurance_type.map(insurance => <option> {insurance} </option>)}
                    
                </select>  */}

                <TreatmentList />
    
 {this.state.treatments.map(treatment => {
         return <TreatmentCard treatment={treatment} key={treatment.id} />
         })
    } 
         </div>
         </div>

)
    }


  


    
}

