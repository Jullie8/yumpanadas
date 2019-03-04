import React from 'react';
import { Switch, Route, withRouter, Link } from "react-router-dom";

//import Components
import Establishment from '../Components/Establishment';
import Footer from '../Components/Footer';

//import Containers
import EstablishmentContainer from './EstablishmentContainer';
import BusinessInfoContainer from './BusinessInfoContainer';

//import styles
import { AppBar, Toolbar, Typography } from '@material-ui/core/'
import { Grid } from '@material-ui/core/';



class MainContainer extends React.Component {

    state = {
      establishments:[],
      isClicked: false,
      establishmentDisplay: {}
    //   isSaveClicked: false
    }
 
    handleFindClick = (e) =>{
        console.log('you need to find a coffe nearby now!!!') 
        this.setState({
            isClicked: !this.state.isClicked
        })
    }

    handleSaveClick = (e,businessObj) => {
        console.log("Hi this is ", businessObj)
        // make a fetch to the db /user_businesses
        // but this database is authorized so i need to be logged in to go to this route 
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
        .then(console.log)
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
                height: 650,
                overflow: "scroll"
            }
      
        }
        return (
            <div className="main-container"> 
                <AppBar position="static" style={{ background: '#d14149' }}>
                    <Toolbar>
                        <Typography variant="h3" color="inherit" >
                            YELP
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Grid container spacing={2}>
                    <Grid item sm>
                        <EstablishmentContainer user={this.props.user} styles={styles} handleFindClick={this.handleFindClick} restaurants={results}/>
                    </Grid>

                    <Grid item sm>
                        <BusinessInfoContainer user={this.props.user} styles={styles} restaurantInfo={this.state.establishmentDisplay} handleSaveClick={this.handleSaveClick} />
                    </Grid>
                </Grid>

               <Footer />
               
            </div>
        )
    }
}

export default withRouter(MainContainer);