const Home = ({ changeToSearch, changeToOxford, changeToTreatments, changeToCalendar, changeToMeetings }) => {
    
    return (
          <div className="jumbotron bg-secondary text-center text-danger">
            <div className="container">
                <div className="ht-tm-header">
                    <h1 className="display-1 display-xxl text-uppercase">Recovery Begins With The First Step</h1>
                    
        
                    <div className="mt-4">
                 
                        
                        <button onClick={changeToSearch} className="btn btn-danger btn-lg m-2 text-secondary">
                            <span>Resources By Location</span>
                            
                        </button>
        
                    </div>

                     <div className="mt-4">
                        
                        <button onClick={changeToOxford} className="btn btn-danger btn-lg m-2 text-secondary">
                            <span>Virginia Oxford Homes</span>
                        </button>


                     <div className="mt-4">
                        <button onClick={changeToTreatments} className="btn btn-danger btn-lg m-2 text-secondary">
                            <span>Virginia Treatment Centers</span>
                        </button>
                        </div>

                         <div className="mt-4">
                        <button onClick={changeToMeetings} className="btn btn-danger btn-lg m-2 text-secondary">
                            <span>Virtual Meetings</span>
                        </button>
                        </div>
                            
      
    
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home