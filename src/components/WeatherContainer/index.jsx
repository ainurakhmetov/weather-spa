import React from 'react';
import { Container, Header, Grid, Image } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import WeatherIcon from '../WeatherIcon';
import DataConverter from '../../components/DateConverter';
import DegConverter from '../../components/DegConverter';
import WindIcon from '../../icons/Wind.svg';
import PressureIcon from '../../icons/dial.svg';
import HumidityIcon from '../../icons/humidity.svg';

const WeatherContainer = ({temp, city, status, icon, dt, wind, windDir, pressure, humidity}) => {
		return (
				<Container>
					<Grid culumns={3} verticalAlign='middle'>
						<Grid.Column width={6}>
							<Grid.Row>
								<Header
									as='h1'
									content={`${Math.round(temp - 273.15)} °C`}
									style={{color: '#60bee5', fontSize: 48}}
									textAlign='right'
								/>
							</Grid.Row>
						</Grid.Column>
						<Grid.Column width={5}>
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
								as='h3'
								textAlign='center'
								content={DataConverter(dt)}
								style={{color: '#60bee5'}}
							/>
						</Grid.Row>
							<Grid.Row>
								<WeatherIcon
									icon={icon}
									style={{width: '15vw', margin: '0 auto'}}
								/>
								<Header
									as='h2'
									textAlign='center'
									content={status}
									style={{color: '#60bee5'}}
								/>
							</Grid.Row>
						</Grid.Column>
						<Grid.Column width={5}>
							<Grid.Row style={{marginTop: 10}}>
									<Image
										src={WindIcon}
										size='mini'
										verticalAlign='middle'
									/>
									<span
										style={{color: '#60bee5', fontWeight: 'bold', fontSize: '20px'}}
									>
										{`${wind} m/s, ${DegConverter(windDir)}`}
									</span>
							</Grid.Row>
							<Grid.Row style={{marginTop: 10}}>
								<Image
									src={PressureIcon}
									size='mini'
									verticalAlign='middle'
								/>
								<span
									style={{color: '#60bee5', fontWeight: 'bold', fontSize: '20px'}}
								>
										{` ${pressure} hPa`}
									</span>
							</Grid.Row>
							<Grid.Row style={{marginTop: 10}}>
								<Image
									src={HumidityIcon}
									size='mini'
									verticalAlign='middle'
								/>
								<span
									style={{color: '#60bee5', fontWeight: 'bold', fontSize: '20px'}}
								>
										{` ${humidity} %`}
									</span>
							</Grid.Row>
						</Grid.Column>
					</Grid>
				</Container>
		)
};

export default WeatherContainer;
