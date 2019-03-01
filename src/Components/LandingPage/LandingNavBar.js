import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
// TODO: Update <Search> usage after its will be implemented

const LandingNavBar = (props) => (
    <div>
        <Menu attached='top'>
            <Dropdown item icon='bars' simple>
                <Dropdown.Menu>
                    <Dropdown.Item>
                        <span className='text'><Link to='/'> Home </Link> </span>
                    </Dropdown.Item>
                    <Dropdown.Item > <Link to="/signup"> SignUp </Link> </Dropdown.Item>
                    <Dropdown.Item>Login</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Menu>
    </div>
)

export default LandingNavBar;