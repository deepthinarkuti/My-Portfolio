import React, { Component } from 'react';
import jpmorgan from './images/jpmorgan1.png';

class WorkExperience extends Component {
    render() {
        return (
            <div className="experience-tab">
            <h4><b>Work Experience</b></h4>
            <div className="experience-grid">
                <img className="company"
                    src={jpmorgan}
                    alt="company"
                />
            </div>
            <div className="job-title">
                <p>Software Engineer, JP Morgan Chase<br />July 2016 to June 2019</p>
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
            </div>
        )
    }
}

export default WorkExperience;