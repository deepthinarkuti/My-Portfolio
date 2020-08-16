import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import picture from './images/deepthi.jpg';
import { Link } from 'react-scroll';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import quickshare from './images/quick-share.jpg';
import gesturerecognition from './images/gesture-recognition.jpg';
import carparking from './images/car-parking.png';
import download from './images/download.jpg';
import jpmorgan from './images/jpmorgan1.png';

class Landing extends Component {
    render() {
        return(
            <div>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <div style={{ width: '30%', margin: 'auto' }}>
                        <img className="image"
                            src={picture}
                            alt="deepthi"
                        />
                        </div>
                        <div className="banner-text" style={{ width: '50%', margin: 'auto' }}>
                            <h3>Hello! I am Deepthi </h3><p>I'm a Computer Science Graduate Student at University of Florida<br/>I love coding!<br/>I like working on various tech stack</p>
                        </div>
                        <hr />
                        <h4><b>Projects</b></h4>
                        <div className="projects-grid">
                            {/* Project 1 */}
                            <Card shadow={5} style={{ width: '23%', margin: 'auto' }} className="cards">
                                <CardTitle style={{
                                    color: '#fff', height: '250px', backgroundImage: `url(${quickshare})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
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
                            <Card shadow={5} style={{ width: '23%', margin: 'auto' }}>
                                <CardTitle style={{
                                    color: '#fff', height: '250px', backgroundImage: `url(${gesturerecognition})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
                                }} ></CardTitle>
                                <CardText><b>
                                    GESTURE-RECOGNITION captures the gestures of the user which are mapped to the keyboard shortcuts inorder to perform keyboard operations virtually</b>
                                </CardText>
                                <CardActions border>
                                    <p><b>Open CV, Python</b></p>
                                    <b><a href="https://github.com/deepthinarkuti/Quick-Share">Git hub</a></b>
                                </CardActions>
                            </Card>
                            {/* Project 3 */}
                            <Card shadow={5} style={{ width: '23%', margin: 'auto' }}>
                                <CardTitle style={{
                                    color: '#fff', height: '260px', backgroundImage: `url(${carparking})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
                                }} ></CardTitle>
                                <CardText><b>
                                    EASY-PARKING is a dashboard to select the slots for parking the car with in multiple levels</b>
                                </CardText>
                                <CardActions border>
                                    <p><b>Java, Bootstrap, Cloud</b></p>
                                    <b><a href="https://github.com/deepthinarkuti/Quick-Share">Git hub</a></b>
                                </CardActions>
                            </Card>

                            {/* Project 4 */}
                            <Card shadow={5} style={{ width: '23%', margin: 'auto' }}>
                                <CardTitle style={{
                                    color: '#fff', height: '260px', backgroundImage: `url(${download})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
                                }} ></CardTitle>
                                <CardText><b>
                                    SMART-BUG-DETECTOR suggests top 5 solutions to identify and resolve the defects quickly and efficiently</b>
                                </CardText>
                                <CardActions border>
                                    <p><b>Java, SQL</b></p>
                                    <b><a href="https://github.com/deepthinarkuti/Quick-Share">Git hub</a></b>
                                </CardActions>
                            </Card>
                        </div>
                        <hr />
                        <h4><b>Work Experience</b></h4>
                        <div className="experience-grid">
                            <img className="company"
                                src={jpmorgan}
                                alt="company"
                            />
                        </div>
                        <div className="job-title">
                            <p>Software Engineer, JP Morgan Chase<br/>July 2016 to June 2019</p>
                        </div>
                        <div>
                            <ul style={{ width: '90%', margin: 'auto' }}>
                                <li>Developed highly scalable end to end application to process 70,000 real time transactions per sec, when the main frame servers are down using Java, Kafka and NoSQL Cassandra database.</li>
                                <li>Ensured Unit, Integration tests, Code reviews, TDD, Continuous Integration & Deployment using Jenkins, Git and Agile Scrum practices for efficiency - Channel Resiliency app, 2018 -2019</li>
                                <li>Developed algorithm to fetch data from multiple UI apps, process user information and route data in specific formats to back end applications and achieved 75% performance improvement through query optimization. C++, SQL, Bootstrap & Angular JS were used and deployed the app on private cloud Gaia successfully with zero defects - Payment Traffic Controller app, 2018</li>
                                <li>Received Shining Star and SPOT Awards for demonstration of ownership & dedication in delivering critical projects - 2017, 2018</li>
                                <li>Created dashboard to monitor the health check status of 20 applications in deployment and production - ES Thermometer dashboard, 2017</li>
                                <li>Migrated legacy applications in COBOL to Java using Soap, REST Web services, MySQL and MQs handling 11 million customer balances.</li>
                                <li>Automated entire application using Cucumber and Selenium tools - Core Banking Modernization project, 2016 - 2017</li>
                                <li>Selected as Application Security Champion for 15 Enterprise System Apps to mitigate black duck and security scan issues - 2016 - 2019</li>
                                <li>Delivered Big Data & Cloud Computing sessions to under graduates at Osmania University - University Outreach Program, 2016 - 2019</li>
                                <li>Mentored three interns at JP Morgan Chase for completing the internship on Banking app for visually challenged</li>
                            </ul>
                        </div>
                        <hr />
                        <h4><b>Connect with me</b></h4>
                        <div className="social-links" style={{ width: '22%', margin: 'auto' }}>

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