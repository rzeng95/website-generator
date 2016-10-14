import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const Projects = (props) =>
    <div id="scroll-list">
        <h3>
            <Link to="/">Home</Link> | List of Projects <i>(toggle switch to view/hide additional information)</i>
        </h3>
        <br />

        <h3><b>Personal Projects</b></h3>
        <br />

        <h3>LoLCarry - <a href="http://www.lolcarry.io" target="_blank">lolcarry.io</a></h3>

        {( () => {
            if (!props.isCondensed) {
                return <h4>
                    LoLCarry contains two main features. First, users can search up any League of Legends player who is currently in-game. This real-time data contains information such as participant rankings and character setups (runes/masteries). Second, the site displays the top 200-ranked players (known as Challengers) of each region. A filter option allows users to select only in-game Challenger players, and view their current-game information (the first feature). The front end of this app is built with React/Redux and the back-end communicates with Riot's API and serves data to the front-end using Express and Redis.
                </h4>
            } else {
                return <h4>A React/Redux fullstack web app that returns current-game information for League of Legends players.</h4>
            }
        } )()}
        <img src={process.env.PUBLIC_URL + '/lolcarry.png'} role="presentation" width="900px"/>
        <br />

        <h3>Rune - <a href="http://rune130.herokuapp.com" target="_blank">rune130.herokuapp.com</a></h3>
        {( () => {
            if (!props.isCondensed) {
                return <h4>
                    Rune is a Kanban project management and issue tracker designed for students. As project lead, I was responsible for teaching the tech stack (Node.js) to team members, as well as organizing meetings, deadlines, and one on one support. As backend developer, I was responsible for user signups, logins, authentication, project creation/management, and task creation/management. I managed the Travis-Ci continous integration pipeline and wrote automation tests.
                </h4>
            } else {
                return <h4>A Kanban project management tool inspired by Jira. I led a team of 7 students to build this within an 8-week time span.</h4>
            }
        } )()}
        <img src={process.env.PUBLIC_URL + '/rune.png'} role="presentation" width="900px"/>
        <br />
        <h3>LoLDecay - <a href="http://www.loldecay.com" target="_blank">loldecay.com</a></h3>
        {( () => {
            if (!props.isCondensed) {
                return <h4>
                    Decay timer web app for the online game League of Legends. Using Riot's API, the app searches for the input user's most recent-played ranked game. Then, it subtracts the current date from the date that game was played to determine decay time. Optional feature stores registered users in a MongoDB database and runs daily cron test to update decay times and email decaying players. Created using Node.js.
                </h4>
            } else {
                return <h4>A Node.js full stack web app that looks up League of Legends ranked players' decay timers.</h4>
            }
        } )()}


        <br />
        <h3>Blizzard Applicant Take-Home API Test - <a href="https://github.com/rzeng95/blizzardAPI" target="_blank">github.com/rzeng95/blizzardAPI</a></h3>
        {( () => {
            if (!props.isCondensed) {
                return <h4>
                    Using Express.js and MongoDB, I built a simple API capable of managing (fake) World of Warcraft accounts. Via GET, POST, DELETE, accounts and players can be created, modified, or deleted. This was done for an internship application to Blizzard in 2014 - Back then, I had zero web development experience and was overwhelmed by this take-home test. Since then, I slowly learned the ropes and was able to finally build the API (albeit half a year after my application).
                </h4>
            } else {
                return <h4>A RESTful API built using Node.js that allows management of World of Warcraft player accounts and characters.</h4>
            }
        } )()}


        <br />
        <h3><b>School Projects</b></h3>
        <br />
        <h3>CS111 - Operating Systems [C]</h3>
        <h4><a href="https://github.com/rzeng95/CS111MiniLab1" target="_blank">
            MiniLab1: Processes, Forking, & Kernels
        </a></h4>
        <h4><a href="https://github.com/rzeng95/CS111MiniLab2" target="_blank">
            MiniLab2: Scheduling & Synchronization
        </a></h4>
        <h4><a href="https://github.com/rzeng95/CS111Lab3" target="_blank">
            Lab 3: File Systems
        </a></h4>
        <h4><a href="https://github.com/rzeng95/CS111Lab4" target="_blank">
            Lab 4: P2P Communication & Security
        </a></h4>
        <br />
        <h3>CS118: Computer Networking [C]</h3>
        <h4><a href="https://github.com/rzeng95/CS118Lab1" target="_blank">
            Lab 1: Concurrent Web Server
        </a></h4>
        <h4><a href="https://github.com/rzeng95/CS118Lab2" target="_blank">
            Lab 2: Simple Window-Based Reliable Data Transfer in C
        </a></h4>
        <br />
        <h3>CS170A: Mathematical Modeling for Computer Science</h3>
        <h4><a href="https://github.com/rzeng95/LoLReduction" target="_blank">
            LoL Reduction - Statistical Analysis on League of Legends Champions
        </a></h4>
        <br />
        <h3>CS174A: Computer Graphics [WebGL JavaScript]</h3>
        <h4><a href="http://rzeng95.github.io/CS174-Assignment3" target="_blank">
            Spinning Textured Cubes
        </a></h4>
        <br />
        <h3>CS188: 3D Real-Time Animation [Unity Engine]</h3>
        <h4><a href="http://rzeng95.github.io/CS188RTAFinal" target="_blank">
            The Golden Key - 3D Real-Time First Person Shooter
        </a></h4>
        <br />
        <h3>CS188: VR Game Development [Unreal Engine]</h3>
        <h4><a href="http://rzeng95.github.io/SP00KYB00GIE/" target="_blank">
            Spookie Boogie - VR Horror Game for the Oculus Rift
        </a></h4>
        <br />
        <h3>CS188: Internet Service Scalability [Ruby on Rails]</h3>
        <h4><a href="https://github.com/rzeng95/lolcounter" target="_blank">
            LoL Counter - Scalable League of Legends statistical analysis site.
        </a></h4>
        <br />
        <h3>CS199: Individual Research</h3>
        <h4><a href={process.env.PUBLIC_URL + '/unity.pdf'} target="_blank">
            Automation Testing in Unity
        </a></h4>

        <br />
    </div>

const mapStateToProps = (state) => ({
    isCondensed : state.viewChange.isCondensed
})

export default connect(mapStateToProps)(Projects);
