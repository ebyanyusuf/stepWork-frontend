

const MeetingCard = ({ meeting }) => {
 const { props } = meeting
    

return(
    <div className="meeting-card-body">
                   
                 <h5 className="card-title">  {meeting.date}</h5>
                    <p className="card-text"> <b>Meeting Name: {meeting.name}</b></p>

                    
                    
                </div>

                

                
)
  
    
}

export default MeetingCard 