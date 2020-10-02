import React from 'react';

import Card from '../components/Card';

import BirdieHomepage from '../assets/images/BirdieHomepage.png';
import epicure from '../assets/images/Epicure.png';
import PasswordGenerator from '../assets/images/PasswordGenerator2.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Birdie',
                    subTitle: 'A stock search application',
                    imgSrc: BirdieHomepage,
                    link: 'https://dchoi20.github.io/Birdie/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Epicure',
                    subTitle: 'Find the best restaurants in your area.',
                    imgSrc: epicure,
                    link: 'https://ldj-project2.herokuapp.com/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Password Generator',
                    subTitle: 'Generate a random secure password.',
                    imgSrc: PasswordGenerator,
                    link: 'https://lindseygobert.github.io/Password-Generator/',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;