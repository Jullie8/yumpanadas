import React from 'react';
//import components
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import Empanada from '../Components/Empanada';

//import styling 
import { Grid, Paper } from '@material-ui/core/';

class EmpanadaContainer extends React.Component {
    state = {
        userBusinessSaves: []
    }

    componentDidMount() {
        let token = localStorage.getItem("token")
        fetch(`http://localhost:3000/api/v1/users/${this.props.user.id}`, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.json())
        //data is all the user's data
        .then(data => {
                //mapping through all the yelp ids that this user has saved in database
        let yelPromises = data.businesses.map(id => {
            //'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search';
            return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${id.yelp_id}`, {
                        headers: {
                            'Content-Type': "application/json",
                            Accepts: 'application/json',
                            Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
                        }
                    })
                    .then(r => r.json())
        })
        return Promise.all(yelPromises)
            .then(yelpData => { this.setState({ userBusinessSaves: yelpData }) })
        })
    }

    

    // renderEmpanadaFaveSpots = () => {
    //     const faveLocations = this.state.userBusinessSaves.map((location, i) => <Empanada user={this.props.user} key={i+1} location={location}/>)
    //     return faveLocations;
    // }

    render() {
        console.log(this.state.userBusinessSaves)
        // let results = this.state.userBusinessSaves !== undefined ? this.renderEmpanadaFaveSpots() : null
        let results = "" ;
        const styles = {
            Paper: {
                padding: 30,
                marginTop: 10,
                marginBottom: 10,
                height: 650,
                overflow: "scroll"
            }
        }
        return(
            <div>
                <Nav />
                <Footer />
             
                <Grid container spacing={2}>
                    <Grid item sm>
                        {this.props.user.username} spots you saved!
                        <Paper> 
                            {results}
                        {/* {this.renderEmpanadaFaveSpots()} */}
                       </Paper>
                    </Grid>
 
                    <Grid item sm>
                        Map Feature Comming Soon!
                    </Grid>
                     
                </Grid>
            </div>
        )
    }
}

export default EmpanadaContainer;

//=> {
    // this.setState({
    //     favoritedSpots: yelpData
    // })
//})