import React, { Component } from 'react'
import Home from './Home'
import Navbar from './Navbar'
import SearchContainer from './SearchContainer'
import OxfordContainer from './OxfordContainer'
import TreatmentContainer from './TreatmentContainer'
import MeetingsContainer from './MeetingsContainer'

export default class Dashboard extends Component {

state = {
      
      view: "Home"
    }



  
changeToSearch = () => this.setState({view: "Search Container"
    })

changeToHome = () => this.setState({view: "Home"})
  
changeToOxford = () => this.setState({view: "Oxford Container"
    })

changeToTreatments = () => this.setState({view: "Treatment Container"
    })

changeToMeetings = () => this.setState({view: "Meetings Container"
    })








  render(){
    
    return (
     <div class="container">
  <div class="child">
  
 

      
        <Navbar changeToHome={this.changeToHome} />
        {  this.state.view === "Home" ? <Home changeToSearch={this.changeToSearch}  changeToOxford={this.changeToOxford} changeToTreatments={this.changeToTreatments} changeToMeetings={this.changeToMeetings}/> : null }
        
        { this.state.view === "Search Container" ? <SearchContainer />: null}

         { this.state.view === "Oxford Container" ? <OxfordContainer />: null}

         { this.state.view === "Treatment Container" ? <TreatmentContainer />: null}

          { this.state.view === "Meetings Container" ? <MeetingsContainer />: null}
</div>
</div>

      
      
    )
  }

}
