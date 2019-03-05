import React from 'react';
import { Link } from "react-router-dom";


import { Dropdown, Menu} from 'semantic-ui-react'

// TODO: Update <Search> usage after its will be implemented

const Footer = () => (
    <div>
        <Menu attached='top'>
            <Dropdown item position='right'icon='bars' simple>
                <Dropdown.Menu>
                    <Dropdown.Item><Link to="/users/profile"> Home </Link> </Dropdown.Item>
                    <Dropdown.Item><Link to="/users/favorites"> Favorites </Link></Dropdown.Item>
                    <Dropdown.Item>Log out</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </Menu>

    </div>
)

export default Footer;

// const Footer = (props) => {
//      return (
//           <Paper > 
//                <Tabs
//                  value={0}
//                  indicatorColor="primary"
//                  textColor="primary"
//                  centered>

//                 <Tab label="Home"> <Link to="/users/profile"> </Link> </Tab>
//                 <Link to="/users/favorites"> <Tab label="Favorites"/> </Link> 
//                  <Tab label="Item Three" /> 
//                  </Tabs> 






                // <Switch>
                //     <Route path="/one" component={PageShell(ItemOne)} />
                //     <Route path="/two" component={PageShell(ItemTwo)} />
                // </Switch>
         
        


