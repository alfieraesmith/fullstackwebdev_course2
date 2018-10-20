import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

// we want to use the same component RenderCard to render feat dish, promotion and leader
// But, leader (unlike dish or promotion) has additional data attributes
// Instead of creating sep render card component for leader
// we will use a JS ternary cond statement to render additional attribute as subtitle iff it exists in item, otherwise skip.

function RenderCard({item}){
    return(
        <Card>
            <CardImg src={item.image} alt={item.name}/>
            <CardBody>
                <CardTitle> {item.name} </CardTitle>
                {item.designation != null ? <CardSubtitle> {item.designation} </CardSubtitle>: null}
                <CardText> {item.description} </CardText>
            </CardBody>
        </Card>
    );
}

function Home(props){
    return(
      <div className="container">
          <div className="row align-items-start">
              <div className="col-12 col-md m-1">
                  <RenderCard item={props.dish}/>
              </div>
              <div className="col-12 col-md m-1">
                  <RenderCard item={props.promotion}/>
              </div>
              <div className="col-12 col-md m-1">
                  <RenderCard item={props.leader}/>
              </div>
          </div>
      </div>
    );
}

export default Home;