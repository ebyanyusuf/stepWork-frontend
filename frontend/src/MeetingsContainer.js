import React from "react";
import MeetingCalendar from "./MeetingCalendar"
import MeetingCard from "./MeetingCard"



class MeetingsContainer extends React.Component {

    state = {
        meetings: []
    }

    componentDidMount = async () => {
        const res = await fetch('http://localhost:3000/meetings')
        const meetings = await res.json()
    //    locations.forEach(location => {
    //         console.log(location)
    //     })
         this.setState({ meetings: meetings })
    }


  
  
  render() {
    return (
      <div>
        <MeetingCalendar/>

        {this.state.meetings.map(meeting => {
         return <MeetingCard meeting={meeting} key={meeting.id} />
         })
    }

        
      </div>
    );
  }
}

export default MeetingsContainer;