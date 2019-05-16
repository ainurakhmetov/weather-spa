import React from 'react';
import { Card, Header, Grid, Container, Image, Segment } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import kzn from '../../img/kazan.jpg';
import msk from '../../img/moscow.jpg';
import ufa from '../../img/ufa.jpg';


class HomePage extends React.Component {
	render(){
		return(
			<Container style={{ margin: 20 }}>
					<Header
						as='h1'
						content='Weather SPA'
						style={{
							fontSize: '3em',
							fontWeight: 'normal',
							margin: '1em 0',
							textAlign:'center',
						}}
						color='blue'
					/>
				<Grid columns={3}>
						<Grid.Column>
							<Segment raised>
								<Link to='/Kazan'>
									<Card.Content>
										<Image
											fluid
											label={{ as: 'a', color: 'green', content: 'Kazan', ribbon: true, size: 'big' }}
											src={kzn}
										/>
									</Card.Content>
								</Link>
							</Segment>
						</Grid.Column>
						<Grid.Column>
							<Segment raised>
								<Link to='/Moscow'>
									<Card.Content>
										<Image
											fluid
											label={{ as: 'a', color: 'red', content: 'Moscow', ribbon: true, size: 'big' }}
											src={msk}
										/>
									</Card.Content>
								</Link>
							</Segment>
						</Grid.Column>
						<Grid.Column>
							<Segment raised>
								<Link to='/Ufa'>
									<Card.Content>
										<Image
											fluid
											label={{ as: 'a', color: 'blue', content: 'Ufa', ribbon: true, size: 'big' }}
											src={ufa}
										/>
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

