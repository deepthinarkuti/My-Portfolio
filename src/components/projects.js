import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import quickshare from './images/quick-share.jpg';

class Projects extends Component {
    render() {
        return (
            <div className="projects-grid">
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{
                        color: '#fff', height: '250px', backgroundImage: `url(${quickshare})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
                    }} ></CardTitle>
                    <CardText><b>
                        QUICK-SHARE App allows sharing multiple files, images asynchronously across multiple devices in which the user is logged in</b>
                    </CardText>
                    <CardActions border>
                        <p><b>C#, Cosmos DB, Microsoft Azure Cloud</b></p>
                    </CardActions>
                </Card>

                {/* Project 2 */}
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >React Project #2</CardTitle>
                    <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
                    <CardActions border>
                        <p>C#, Cosmos DB, Microsoft Azure Cloud</p>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/* Project 3 */}
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >React Project #3</CardTitle>
                    <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >React Project #3</CardTitle>
                    <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>


        )
    }
}

export default Projects;