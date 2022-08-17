import Button  from 'react-bootstrap/Button';

function Performances() {
    return (
        <div className="performance-body">
            <h2 className="about-header">Performances</h2>
            <div className="second-performance">
                <div className="date">
                    <h1 className="h1">date</h1>
                </div>
                <div className="location">
                    <div className="restaurant-time">
                        <h1 className="h1">resturant / time</h1>
                    </div>
                    <div className="city-state">
                        <h1 className="h1">city / state</h1>
                    </div>
                </div>
                <div>
                <Button className="website">Check in for Updates</Button> 
                <Button>Edit</Button>  
                </div>
            </div>
            <div className="third-performance">
                <div className="date">
                    <h1 className="h1">date</h1>
                </div>
                <div className="location">
                    <div className="restaurant-time">
                        <h1 className="h1">resturant / time</h1>
                    </div>
                    <div className="city-state">
                        <h1 className="h1">city / state</h1>
                    </div>
                </div>
                <div>
                <Button className="website">Check in for Updates</Button>
                <Button>Edit</Button>   
                </div>
            </div>
            <div className="fourth-performance">
                <div className="date">
                    <h1 className="h1">date</h1>
                </div>
                <div className="location">
                    <div className="restaurant-time">
                        <h1 className="h1">resturant / time</h1>
                    </div>
                    <div className="city-state">
                        <h1 className="h1">city / state</h1>
                    </div>
                </div>
                <div>
                <Button className="website">Check in for Updates</Button>
                <Button>Edit</Button>   
                </div>
            </div>
            <div className="performances">
            <div className="first-performance">
                <Button className="add-gig" href="/AddGig">Add a Gig</Button>
                <Button className="add-gig" href="/Login">Login</Button>
                <Button className="add-gig" href="/Register">Register</Button>
            </div>
        </div>
    </div>
    )
}

export default Performances
