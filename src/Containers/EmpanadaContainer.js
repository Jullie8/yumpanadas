import React from 'react';
//import components
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import Empanada from '../Components/Empanada';
import EmpanadaMapContainer from './EmpanadaMapContainer';

//import styling 
import { Grid, Paper } from '@material-ui/core/';

class EmpanadaContainer extends React.Component {
    state = {
        userBusinessSaves: [],
        selectedVenue: {}
    }

    componentDidMount() {
        if(this.props.user.id) {
            this.fetchBusinesses(this.props.user.user_businesses)
        }
    }
    //component props changed and component updated FOR REFRESHING 
    componentDidUpdate(prevProps) {
        if(prevProps.user.id !== this.props.user.id){
            this.fetchBusinesses(this.props.user.user_businesses)
        }
    }

    fetchBusinesses = businesses => {
        let yelPromises = businesses.map(id => {
            return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${id.business.yelp_id}`, {
                    headers: {
                    'Content-Type': "application/json",
                    Accepts: 'application/json',
                    Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
                    }   
                })
            .then(async r => {
            //await will wait for promise to resolve and print/return its value.
                let response = await r.json();
            //return is the resolved value of the promise 
                return {user_business_id: id.id, yelp_response: response}
            })
        })
        return Promise.all(yelPromises)
        .then((yelpData) => { 
            this.setState({ userBusinessSaves: yelpData }) 
        })
    }

    deleteFavoritedLocations = (user_business_row_id) => {
        console.log('hello:', user_business_row_id );
        fetch(`http://localhost:3000/api/v1/user_businesses/${user_business_row_id}`,{
            method:"DELETE",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`   
            }
        })
        .then(res => res.json())
        .then((data)=> {
            console.log('hey', data)
            // filter for the id that is not that id 
            let arrWithRemovedObj = this.state.userBusinessSaves.filter((business) => {
                return business.user_business_id !== user_business_row_id
            })
            this.setState({
                userBusinessSaves: arrWithRemovedObj
            })
        })
    }

    isVenueNameClickHandler = (locationObj) => {
        console.log('my header was ', locationObj)
        this.setState({
            selectedVenue: locationObj
        })
    }


    render() {
        let results = this.state.userBusinessSaves.map((yelpData,i) => { 
            return <Empanada user={this.props.user} user_business={yelpData.user_business_id} key={i} location={yelpData.yelp_response} delete={this.deleteFavoritedLocations} venueClickHandler={this.isVenueNameClickHandler} /> 
        }) ;
        console.log("saves:", this.state.userBusinessSaves)
        // console.log(this.props.user)
        //const styles = {
           // Paper: {
                // padding: 30,
                // marginTop: 10,
                // marginBottom: 10,
                // height: 650,
                // overflow: "scroll"
           // }
       // }

        return(
            <div>
                <Nav />
                <Footer logout={this.props.logout} />
             
                <Grid container spacing={2}>
                    <Grid item sm>
                        <p className="user-name"> {this.props.user.username} here are your saved Empanada spots! </p>
                        <Paper> 
                            {results}
                       </Paper>
                    </Grid>
 
                    <Grid item sm>
                        Map Feature Comming Soon! 
                        <EmpanadaMapContainer location={this.state.selectedVenue}/>
                           
                    </Grid>
                     
                </Grid>
            </div>
        )
    }
}

export default EmpanadaContainer;

//Notes:
//Async / await makes asynchronous code look and behave a little more like synchronous code.
//The await keyword can only be used inside functions defined with async
//Any async function returns a promise implicitly, and the resolve value of the promise will be whatever you return from the function.