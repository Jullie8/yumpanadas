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
        if(this.props.user.id) {
            this.fetchBusinesses(this.props.user.businesses)
        }
    }
    //component props changed and  component updated FOR REFRESHING 
    componentDidUpdate(prevProps) {
        if(prevProps.user.id !== this.props.user.id){
            this.fetchBusinesses(this.props.user.businesses)
        }
    }

    fetchBusinesses = businesses => {
        console.log('ds', businesses)
        //mapping through all the yelp ids that this user has saved in database
        let yelPromises = businesses.map(id => {
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
        console.log(yelPromises)
        return Promise.all(yelPromises)

            .then(yelpData => { this.setState({ userBusinessSaves: yelpData }) })
    }

    

    // renderEmpanadaFaveSpots = () => {
    //     const faveLocations = this.state.userBusinessSaves.map((location, i) => <Empanada user={this.props.user} key={i+1} location={location}/>)
    //     return faveLocations;
    // }

    render() {
        console.log(this.state.userBusinessSaves)
        console.log(this.props.user)
        // let results = this.state.userBusinessSaves !== undefined ? this.renderEmpanadaFaveSpots() : null
        let results = this.state.userBusinessSaves.map((location,i) => <Empanada user={this.props.user} key={i + 1} location={location} /> ) ;
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
                            {/* {results} */}
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