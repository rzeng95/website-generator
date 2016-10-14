import React from 'react';
import { Link } from 'react-router';
import SPDF from 'simple-react-pdf';

const Resume = (props) =>
    <div id="scroll-list">
        <h3>
            <Link to="/">Home</Link> | Downloadable <a href={process.env.PUBLIC_URL + '/resume.pdf'} target="_blank">PDF</a>
        </h3>
        <br />
        <SPDF.SimplePDF file={process.env.PUBLIC_URL + '/resume.pdf'} />
    </div>

export default Resume;
