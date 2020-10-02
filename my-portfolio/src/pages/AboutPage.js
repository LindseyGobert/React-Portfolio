import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hi, my name is Lindsey. I am a Front-end web developer leveraging a marketing background, specifically digital marketing in a retail space, to build better web experiences.</p>
             
            <p>I will soon earn a certificate from Southern Methodist University's fullstack bootcamp with newly developed skills HTML5, CSS, Javascript, React.js, and responsive web design.</p> 
            
            <p>With past experience in e-commerce management, I aim to build even better user experiences using the knowledge that I have. I am excited to leverage all the knowledge that I have gained and the skills I already have on a team to build better e-commerce experiences.</p>

            <p>Check out my resume <a href="src/assets/resume/Web Dev Resume.pdf">here</a>.</p>

            <p>And you can follow me on 
                <a href="https://www.linkedin.com/in/lindsey-gobert-b5b325117/">LinkedIn</a>
                ,
                <a href="https://github.com/LindseyGobert">Github</a>
                , and 
                <a href="https://twitter.com">Twitter</a>
                .
            </p>

            </Content>
        </div>
    );

}

export default AboutPage;