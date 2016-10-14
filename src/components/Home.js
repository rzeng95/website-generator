import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

import EmbeddedGist from '../helpers/EmbeddedGist';

const Home = (props) => {
    const resumeLink = <Link to="/resume">resume</Link>;
    const githubLink = <a href="https://github.com/rzeng95" target="_blank"><FontAwesome name="github-square" /></a>;
    const linkedinLink = <a href="https://www.linkedin.com/in/rzeng95" target="_blank"><FontAwesome name="linkedin-square" /></a>

    return (
        <div id="scroll-list">
            <h3><b>Hello! I'm Roland and I'm an aspiring full-stack web developer.</b></h3>
            {( () => {
                if (!props.isCondensed) {
                    return <h3>
                            In addition to studying computer science at UCLA, I love reading about and applying new Javascript libraries and techniques. As shown by my personal projects, I am very passionate about web development. I love both back end and front end: I enjoy the challenges of implementing API endpoints for RESTful back ends and I like designing functional and cool-looking user interfaces.
                          </h3>
                }
            } )()}
            <br />
            <h3>Here is my info: {resumeLink} | {githubLink} | {linkedinLink}</h3>
            <h3>For my full list of projects, click <Link to="/projects">here</Link>.</h3>
            <br />

            {( () => {
                if (!props.isCondensed) {
                    return <div>
                            <h3><b>Here are the projects I'm most proud of:</b></h3>
                            <h3>LoLCarry - <a href="http://www.lolcarry.io" target="_blank">lolcarry.io</a></h3>
                            <img src={process.env.PUBLIC_URL + '/lolcarry.png'} role="presentation" width="900px"/>

                            <br />
                            <h3>Rune - <a href="http://rune130.herokuapp.com" target="_blank">rune130.herokuapp.com</a></h3>
                            <img src={process.env.PUBLIC_URL + '/rune.png'} role="presentation" width="900px"/>

                            <br />

                          </div>
                }
            } )()}



            
            <h3><b>If I were to describe my Javascript tech stack, it might look something like this...</b></h3>

            <EmbeddedGist gist="/rzeng95/9bc88298a147ec64a39f2ab6d583cd8d" />
        </div>
    )
}


const mapStateToProps = (state) => ({
    isCondensed : state.viewChange.isCondensed
})

export default connect(mapStateToProps)(Home);
