import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import picture from './images/deepthi.jpg';
import { Link } from 'react-scroll';

class Landing extends Component {
    render() {
        return(
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12} smooth={true}>
                        <img className="image"
                            src={picture}
                            alt="deepthi"
                        />
                        <div className="banner-text">
                            <p>Hello, I am Deepthi <br/>I'm a Computer Science Graduate Student at University of Florida</p>
                        </div>
                        <hr />
                        <h4><b>Connect With Me</b></h4>
                        <div className="social-links">

                            {/* Email */}
                            <a href="mailto:deepthinarkuti@ufl.edu" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-envelope" aria-hidden="true" />
                            </a>

                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/deepthinarkuti/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                            {/* Github */}
                            <a href="https://github.com/deepthinarkuti" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;