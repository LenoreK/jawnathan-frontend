import Button  from 'react-bootstrap/Button';

function Performances() {
    return (
        <div className="performances">
            <Button>Create New Performance</Button>
            {/* <div className="first-performance">
                <div className="date">
                    <h3>{data.performance.date}</h3>
                </div>
                <div className="location">
                    <div className="restaurant-time">
                        <h3>Located in {data.performance.place} @ {data.performance.start_time} - {data.performance.end_time}</h3>
                    </div>
                    <div className="city-state">
                        <h3>{data.performance.city}, {data.performance.state}</h3>
                    </div>
                </div>
                <a href={`${data.performance.url}`}><Button>Website</Button></a>
            </div> */}
            <div className="second-performance">
                <div className="date">
                    <h1>date</h1>
                </div>
                <div className="location">
                    <div className="restaurant-time">
                        <h1>resturant / time</h1>
                    </div>
                    <div className="city-state">
                        <h1>city / state</h1>
                    </div>
                </div>
                <Button>Website</Button>   
            </div>
            <div className="third-performance">
                <div className="date">
                    <h1>date</h1>
                </div>
                <div className="location">
                    <div className="restaurant-time">
                        <h1>resturant / time</h1>
                    </div>
                    <div className="city-state">
                        <h1>city / state</h1>
                    </div>
                </div>
                <Button>Website</Button>   
            </div>
            <div className="fourth-performance">
                <div className="date">
                    <h1>date</h1>
                </div>
                <div className="location">
                    <div className="restaurant-time">
                        <h1>resturant / time</h1>
                    </div>
                    <div className="city-state">
                        <h1>city / state</h1>
                    </div>
                </div>
                <Button>Website</Button>   
            </div>
            <div className="calendar-div">
                <h2>Calendar</h2>
                <div className="calendar">

                </div>
            </div>
        </div>
    )
}

export default Performances