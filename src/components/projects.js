import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import quickshare from './images/quick-share.jpg';
import gesturerecognition from './images/gesture-recognition.jpg';
import carparking from './images/car-parking.png';
import download from './images/download.jpg';

class Projects extends Component {
    render() {
        return (
            <div className="projects-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{ width: '22%', margin: 'auto' }}>
                    <CardTitle style={{
                        color: '#fff', height: '200px', backgroundImage: `url(${quickshare})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
                    }} ></CardTitle>
                    <CardText><b>
                        QUICK-SHARE App allows sharing multiple files, images asynchronously across multiple devices in which the user is loggedin</b>
                    </CardText>
                    <CardActions border>
                        <p><b>C#, Cosmos DB, Microsoft Azure Cloud</b></p>
                        <b><a href="https://github.com/deepthinarkuti/Quick-Share">Git hub</a></b>
                    </CardActions>
                </Card>
                {/* Project 2 */}
                <Card shadow={5} style={{ width: '22%', margin: 'auto' }}>
                    <CardTitle style={{
                        color: '#fff', height: '200px', backgroundImage: `url(${gesturerecognition})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
                    }} ></CardTitle>
                    <CardText><b>
                        GESTURE-RECOGNITION captures the gestures of the user which are mapped to the keyboard shortcuts inorder to perform keyboard operations virtually</b>
                    </CardText>
                    <CardActions border>
                        <p><b>Open CV, Python</b></p>
                        <b><a href="https://github.com/deepthinarkuti/Virtual-Keyboard-Handling-using-Hand-Gesture-Recognitione">Git hub</a></b>
                    </CardActions>
                </Card>

                {/* Project 3 */}
                <Card shadow={5} style={{ width: '22%', margin: 'auto' }}>
                    <CardTitle style={{
                        color: '#fff', height: '200px', backgroundImage: `url(${carparking})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
                    }} ></CardTitle>
                    <CardText><b>
                        EASY-PARKING is a dashboard to select the slots for parking the car with in multiple levels</b>
                    </CardText>
                    <CardActions border>
                        <p><b>Java, Bootstrap, Cloud</b></p>
                        <b><a href="https://github.com/deepthinarkuti/Easy-parking">Git hub</a></b>
                    </CardActions>
                </Card>

                {/* Project 4 */}
                <Card shadow={5} style={{ width: '22%', margin: 'auto' }}>
                    <CardTitle style={{
                        color: '#fff', height: '200px', backgroundImage: `url(${download})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
                    }} ></CardTitle>
                    <CardText><b>
                        SMART-BUG-DETECTOR suggests top 5 solutions to identify and resolve the defects quickly and efficiently</b>
                    </CardText>
                    <CardActions border>
                        <p><b>Java, SQL</b></p>
                        <b><a href="https://github.com/deepthinarkuti/Smart-Bug-Detector">Git hub</a></b>
                    </CardActions>
                </Card>
            </div>


        )
    }
}

export default Projects;