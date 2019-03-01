import React from 'react';
//import Components
import Establishment from '../Components/Establishment';
// import Header from '../Components/Header';
//import Containers
import EstablishmentContainer from './EstablishmentContainer';
import BusinessInfoContainer from './BusinessInfoContainer';
import NavBar from '../Components/NavBar';
import { AppBar, Toolbar, Typography } from '@material-ui/core/'
import { Grid } from '@material-ui/core/';

class MainContainer extends React.Component {

    state = {
      establishments:[],
      isClicked: false,
      establishmentDisplay: {},
    }
 
    handleFindClick = (e) =>{
        console.log('you need to find a coffe nearby now!!!') 
        this.setState({
            isClicked: !this.state.isClicked
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
        console.log(establishmentObj)
        this.setState({
            establishmentDisplay: establishmentObj
        })
    }

    renderEstablishments = () => {
        const restaurants = this.state.establishments.map((establishment, i) => <Establishment key={i + 1} establishment={establishment} handleRestaurantClick={this.handleRestaurantClick} /> )
        
        return restaurants;
    }

    render () {
       // if click is true then render all the establishment but right now it is in the array in state 
       let results = this.state.isClicked ? this.renderEstablishments() : null
        // let results = this.state.isClicked ? 
        console.log(this.state.establishments)

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
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h3" color="inherit" >
                            YELP
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Grid container spacing={2}>
                    <Grid item sm>
                        <EstablishmentContainer styles={styles} handleFindClick={this.handleFindClick} restaurants={results}/>
                    </Grid>

                    <Grid item sm>
                        <BusinessInfoContainer styles={styles} restaurantInfo={this.state.establishmentDisplay} />
                    </Grid>
                </Grid>
               <NavBar />
             
    
            </div>
        )
    }
}

export default MainContainer;