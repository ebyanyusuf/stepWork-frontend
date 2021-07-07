import React, { Component } from 'react'
import OxfordCard from './OxfordCard'
import MapContainer from './MapContainer'

export default class OxfordContainer extends Component {
state = {
   oxfords: [],
   filteredOxfords: [],
   searchText: "", 
   oxfordGender: ["Choose an Option", "Male", "Female"]
}
 componentDidMount = async () => {
     
        const res = await fetch('http://localhost:3000/oxfords')
        const oxfords = await res.json()
    //    locations.forEach(location => {
    //         console.log(location)
    //     })
         this.setState({ oxfords: oxfords })
         console.log(oxfords)
    }

    filteredOxfords = () => this.state.oxfords.filter(oxford => oxford.gender.includes(this.state.searchText)  )


handleOnChange = (event) => {
       

                  var genderArray = this.state.oxfords.filter(oxford => oxford.gender.includes(event.target.value))
                  this.setState({filteredOxfords: genderArray})
              
                   
      


}


    
    render(){
        return(
<div>
{/* <div className="form-group">
                    <label htmlFor="search-text">Search by Gender:</label>
                    <input onChange={event => this.handleOnChange(event)} type="text" className="form-control" id="search-text" placeholder="Enter Gender"/>
                </div> */}
                <MapContainer />

<select onChange={event => this.handleOnChange(event)} name="gender" id="gender">
                
                        {this.state.oxfordGender.map(oxford => <option> {oxford} </option>)}
                    
                </select>
{this.state.filteredOxfords.map(oxford => {
         return <OxfordCard oxford={oxford} key={oxford.id} />
         })
    }
         </div>

)
    }


  


    
}

