import React from 'react';
import {Container, Dimmer, Loader, Segment, Icon} from "semantic-ui-react";
import {connect} from "react-redux";
import Fetch from '../../store/actions/Fetch';
import WeatherContainer from '../../components/WeatherContainer';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
	componentDidMount() {
		const { match } = this.props;
		this.props.Fetch(match.params.id);
	}
	render(){
		const { weather, isLoading } = this.props;
		return(
			<Container style={{ margin: 20 }}>
				<Segment raised>
					<Link to='/'>
						<Icon name="left arrow" size='large' style={{margin: 5}}/>
					</Link>
					{isLoading &&
						<Dimmer active inverted>
							<Loader size='medium'>Loading</Loader>
						</Dimmer>}
					{weather.main &&
						<WeatherContainer
							temp={weather.main.temp}
							city={weather.name}
							status={weather.weather[0].main}
							icon={weather.weather[0].icon}

						/>
					}
				</Segment>
			</Container>
		)
	}
}

const mapStateToProps = state => ({
	weather: state.store.weather,
	isLoading: state.store.isLoading,
});

const mapDispatchToProps = dispatch => ({
	Fetch: (city) => {
		dispatch(Fetch(city));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(HomePage);


