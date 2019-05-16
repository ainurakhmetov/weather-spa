import React from 'react';
import { Container, Header, Grid, } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import WeatherIcon from '../WeatherIcon';

const WeatherContainer = ({temp, city, status, icon}) => {
		return (
				<Container>
					<Grid>
						<Grid.Column>
							<Grid.Row>
								<Header
									as='h1'
									textAlign='center'
									content={city}
									style={{color: '#60bee5'}}
								/>
							</Grid.Row>
							<Grid.Row>
								<Header
									as='h1'
									textAlign='center'
									content={`${Math.round(temp - 273.15)} °C`}
									style={{color: '#60bee5'}}
								/>
							</Grid.Row>
							<Grid.Row>
								<Header
									as='h1'
									textAlign='center'
									content={status}
									style={{color: '#60bee5'}}
								/>
								<WeatherIcon
									icon={icon}
									style={{width: '20vw', margin: '0 auto'}}
								/>
							</Grid.Row>
						</Grid.Column>
					</Grid>
				</Container>
		)
};

export default WeatherContainer;
