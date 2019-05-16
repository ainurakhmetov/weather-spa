import React from 'react';
import { Card, Header, Grid, Container, Image, Label, Segment } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import kzn from '../../img/kazan.png';
import msk from '../../img/moscow.png';
import ufa from '../../img/ufa.jpg';


class HomePage extends React.Component {
	render(){
		return(
			<Container style={{ margin: 20 }}>
				<Segment raised>
					<Header
						as='h1'
						content='Weather SPA'
						style={{
							fontSize: '4em',
							fontWeight: 'normal',
							margin: '1em 0',
							textAlign:'center',
						}}
						color='blue'
					/>
				</Segment>
				<Grid columns={3}>
						<Grid.Column>
							<Segment raised>
								<Link to='city/Kazan'>
									<Card.Content>
										<Label as='a' color='green' ribbon>
											Kazan
										</Label>
										<Image src={kzn}/>
									</Card.Content>
								</Link>
							</Segment>
						</Grid.Column>
						<Grid.Column>
							<Segment raised>
								<Link to='city/Moscow'>
									<Card.Content>
										<Label as='a' color='red' ribbon>
											Moscow
										</Label>
										<Image src={msk}/>
									</Card.Content>
								</Link>
							</Segment>
						</Grid.Column>
						<Grid.Column>
							<Segment raised>
								<Link to='city/Ufa'>
									<Card.Content>
										<Label as='a' color='blue' ribbon>
											Ufa
										</Label>
										<Image src={ufa}/>
									</Card.Content>
								</Link>
							</Segment>
						</Grid.Column>
				</Grid>
			</Container>
		)
	}
}

export default HomePage;

