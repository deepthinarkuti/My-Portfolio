import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="C:\Users\FSIS\Interview prep\my-portfolio\src\deepthi.jpg"
                            alt="deepthi"
                            className="deepthi-img"
                        />
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Landing;