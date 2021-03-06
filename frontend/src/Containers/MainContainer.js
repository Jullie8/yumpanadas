import React from 'react';
import { withRouter } from "react-router-dom";

//import Components
// import EmpanadaContainer from './EmpanadaContainer';
import Establishment from '../Components/Establishment';
import Footer from '../Components/Footer';
import Nav from '../Components/Nav';

//import Containers
import EstablishmentContainer from './EstablishmentContainer';
import BusinessInfoContainer from './BusinessInfoContainer';


import { Grid } from '@material-ui/core/';


class MainContainer extends React.Component {

    state = {
      establishments:[],
      isClicked: false,
      establishmentDisplay: {}
    }
 
    handleFindClick = (e) =>{
        this.setState({
            isClicked: !this.state.isClicked
        })
    }
    
    handleSaveClick = (e, businessObj) => {
        console.log("Hi this is ", businessObj)
        let token = localStorage.getItem("token")
        fetch('http://localhost:3000/api/v1/businesses', {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json', 
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            }, 
            body: JSON.stringify({
                yelp_id: businessObj.id
            })
        })
        .then(res => res.json())
        .then((data)=>{
            //handle this optimistically however if the user tries to save again then tell user that item has been saved to favorites with a toast
            //maybe a toast 
            console.log('this the data', data.user_business)
        })

    }

    componentDidMount () {
        fetch('http://localhost:3000/api/v1/location')
        .then(res => res.json())
        .then((data)=>{
            this.setState({
                establishments: data.businesses
            })
        })
    }

    handleRestaurantClick = (establishmentObj) =>{
        //goal of this function is to set State of the establishment display to the one Clicked
        this.setState({
            establishmentDisplay: establishmentObj
        })
    }

    renderEstablishments = () => {
        const restaurants = this.state.establishments.map((establishment, i) => <Establishment key={i + 1} establishment={establishment} handleRestaurantClick={this.handleRestaurantClick} /> )
        return restaurants;
    }

    render () {
        let results = this.state.isClicked ? this.renderEstablishments() : null

        const styles= {
            Paper: {
                padding:20,
                marginTop:10,
                marginBottom:10,
                height: 600,
                overflow: "scroll"
            }
        }

        return (
            <div className="main-container"> 
                <Nav />
                <Footer user={this.props.user} logout={this.props.logout} />
                <Grid container spacing={2}>
                    <Grid item sm>
                        <EstablishmentContainer user={this.props.user} styles={styles} handleFindClick={this.handleFindClick} restaurants={results}/>
                    </Grid>
                    <Grid item sm>
                        <BusinessInfoContainer user={this.props.user} styles={styles} restaurantInfo={this.state.establishmentDisplay} handleSaveClick={this.handleSaveClick} />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withRouter(MainContainer);