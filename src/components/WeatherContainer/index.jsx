import React from 'react';
import { Container, Header, Grid, Image, } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import WeatherIcon from '../WeatherIcon';
import DataConverter from '../../components/DateConverter';
import DegConverter from '../../components/DegConverter';
import WindIcon from '../../icons/Wind.svg';

const WeatherContainer = ({temp, city, status, icon, dt, wind, windDir}) => {
		return (
				<Container>
					<Grid culumns={2}>
						<Grid.Column width={8}>
							<Grid.Row>
								<Header
									as='h1'
									textAlign='center'
									content={DataConverter(dt)}
									style={{color: '#60bee5'}}
								/>
							</Grid.Row>
						</Grid.Column>
						<Grid.Column width={8}>
							<Grid.Row>
								<Header
									as='h1'
									textAlign='center'
									content={city}
									style={{color: '#60bee5'}}
								/>
							</Grid.Row>
						</Grid.Column>
					</Grid>
					<Grid culumns={2}>
						<Grid.Column width={8} verticalAlign='middle'>
							<Grid.Row>
								<Header
									as='h1'
									textAlign='center'
									content={`${Math.round(temp - 273.15)} °C`}
									style={{color: '#60bee5', fontSize: 48,}}
								/>
							</Grid.Row>
							<Grid.Row>
								<Grid.Column width={8}>
									<Image
										src={WindIcon}
										style={{width: '7vw', margin: '0 auto',}}
									/>
								</Grid.Column>
								<Grid.Column width={8}>
									<Header
										as='h3'
										textAlign='center'
										content={`${wind} m/s, ${DegConverter(windDir)}`}
										style={{color: '#60bee5'}}
									/>
								</Grid.Column>
							</Grid.Row>
						</Grid.Column >
						<Grid.Column width={8}>
							<Grid.Row>
								<WeatherIcon
									icon={icon}
									style={{width: '15vw', margin: '0 auto'}}
								/>
							</Grid.Row>
							<Grid.Row>
								<Header
									as='h2'
									textAlign='center'
									content={status}
									style={{color: '#60bee5'}}
								/>
							</Grid.Row>
						</Grid.Column>
					</Grid>
				</Container>
		)
};

export default WeatherContainer;
