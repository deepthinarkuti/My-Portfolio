import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import quickshare from './images/quick-share.jpg';
import gesturerecognition from './images/gesture-recognition.jpg';
import carparking from './images/carpparking.png';
import download from './images/download.jpg';

class Projects extends Component {
    render() {
        return (
            <div className="project-tab">
            <div className="projects-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{ width: '22%', margin: 'auto' }}>
                    <CardTitle style={{
                        color: '#fff', height: '180px', backgroundImage: `url(${quickshare})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
                    }} ></CardTitle>
                    <CardText><b>
                        QUICK-SHARE App enables user to copy the text, files, images on a device and shares across multiple devices of the user asynchronously</b>
                    </CardText>
                    <CardActions border>
                        <p><b>C#, Cosmos DB, Microsoft Azure Cloud</b></p>
                        <b><a href="https://github.com/deepthinarkuti/Quick-Share">Git hub</a></b>
                    </CardActions>
                </Card>
                {/* Project 2 */}
                <Card shadow={5} style={{ width: '22%', margin: 'auto' }}>
                    <CardTitle style={{
                        color: '#fff', height: '180px', backgroundImage: `url(${gesturerecognition})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
                    }} ></CardTitle>
                    <CardText><b>
                        GESTURE-RECOGNITION captures the gestures of the user which are mapped to the keyboard shortcuts inorder to perform keyboard operations virtually</b>
                    </CardText>
                    <CardActions border>
                        <p><b>Open CV, Python</b></p>
                        <b><a href="https://github.com/deepthinarkuti/Gesture-Recognition">Git hub</a></b>
                    </CardActions>
                </Card>

                {/* Project 3 */}
                <Card shadow={5} style={{ width: '22%', margin: 'auto' }}>
                    <CardTitle style={{
                        color: '#fff', height: '180px', backgroundImage: `url(${carparking})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
                    }} ></CardTitle>
                    <CardText><b>
                        EASY-PARKING facilitates in searching and booking a slot, to park a car quickl & easily in a parking lot with multiple levels</b>
                    </CardText>
                    <CardActions border>
                        <p><b>Java, Bootstrap, Cloud</b></p>
                        <b><a href="https://github.com/deepthinarkuti/Easy-Parking">Git hub</a></b>
                    </CardActions>
                </Card>

                {/* Project 4 */}
                <Card shadow={5} style={{ width: '22%', margin: 'auto' }}>
                    <CardTitle style={{
                        color: '#fff', height: '180px', backgroundImage: `url(${download})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
                    }} ></CardTitle>
                    <CardText><b>
                        SMART-BUG-DETECTOR suggests top 5 solutions to the defects to resolve the defects quickly and efficiently based on the content and words match logic</b>
                    </CardText>
                    <CardActions border>
                        <p><b>Java, SQL</b></p>
                        <b><a href="https://github.com/deepthinarkuti/Smart-Defect-Advisor">Git hub</a></b>
                    </CardActions>
                </Card>
            </div>
            </div>


        )
    }
}

export default Projects;