import React, { Component } from 'react'

//Components
import LocationCard from './LocationCard'
import MapContainer from './MapContainer'


export default class SearchContainer extends Component {


    state = {
        locations: [],
        searchText: "",
        insurance: ["TRICARE", "Medicaid", "Private"],
        filteredLocations: []

    }


    componentDidMount = async () => {
        const res = await fetch('http://localhost:3000/locations')
        const locations = await res.json()
    //    locations.forEach(location => {
    //         console.log(location)
    //     })
         this.setState({ locations: locations, filteredLocations: locations })
    }


    filteredLocations = () => this.state.locations.filter(loc => loc.name.includes(this.state.searchText)  )

    filteredInsurance = () => this.state.locations.filter(insurance => insurance.treatments.insurance_type.includes(this.state.searchText)  )
    
    handleOnChange = (event) => {
       

        if (event.target.id == "search-text") {
                  var locationArray = this.state.locations.filter(loc => loc.name.includes(event.target.value))
                   this.setState({filteredLocations: locationArray})
                   
        } else {
            console.log(event.target.value)
             var locationArray = this.state.locations.filter(
                 loc => {
                 return loc.treatments.filter(treatment => treatment.insurance_type === event.target.value).length > 0})

                   this.setState({filteredLocations: locationArray})
        }

       
    

    }

    


  
    render(){
        
   
        return (
            <div className="container mt-5">
                
             <div className="form-group">
                    <label htmlFor="search-text">Search by Location:</label>
                    <input onChange={event => this.handleOnChange(event)} type="text" className="form-control" id="search-text" placeholder="Enter Your Location"/>
                </div>
                <div className="map">

                        <MapContainer />
                        </div>

                <div className="locations">
                    {this.state.filteredLocations.map(
                        location => <LocationCard location={location} key={location.id} />
                    )}
                </div>
            </div>
        )
    }
}
