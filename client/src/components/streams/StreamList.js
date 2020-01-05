import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStreams, resetMessage } from '../../actions';
import { Grid, Header, List, Button, Message } from 'semantic-ui-react';

class StreamList extends Component {
	componentDidMount() {
		this.props.fetchStreams();
	}

	renderButtons(stream) {
		if (stream.userId === this.props.currentUserId) {
			return (
				<List.Content floated='right'>
					<Button.Group>
						<Button as={Link} to={`/streams/edit/${stream.id}`} primary>
							Edit
						</Button>
						<Button.Or />
						<Button as={Link} to={`/streams/delete/${stream.id}`} negative>
							Delete
						</Button>
					</Button.Group>
				</List.Content>
			);
		}
	}

	renderList() {
		return this.props.streams.map(stream => {
			return (
				<List.Item key={stream.id} style={{ padding: '15px 0' }}>
					{this.renderButtons(stream)}
					<List.Icon name='video camera' size='large' verticalAlign='middle' />
					<List.Content>
						<List.Header>
							<Link to={`/streams/${stream.id}`}>{stream.title}</Link>
						</List.Header>
						<List.Description>{stream.description}</List.Description>
					</List.Content>
				</List.Item>
			);
		});
	}

	renderCreate() {
		if (this.props.isSignedIn) {
			return (
				<div>
					<Button floated='right' positive as={Link} to='/streams/new'>
						Create
					</Button>
				</div>
			);
		}
	}

	renderMessage() {
		if (this.props.message.showMessage) {
			return <Message success size='tiny' content={this.props.message.text} />;
		}
	}

	clearMessage() {
		if (this.props.message.showMessage) {
			setTimeout(() => {
				this.props.resetMessage();
			}, 2000);
		}
	}

	render() {
		return (
			<Grid centered columns={2}>
				<Grid.Column>
					{this.renderMessage()}
					{this.clearMessage()}
					<Header as='h2' dividing>
						Streams
					</Header>

					<List divided verticalAlign='middle'>
						{this.renderList()}
					</List>
					{this.renderCreate()}
				</Grid.Column>
			</Grid>
		);
	}
}

const mapStateToProps = state => {
	return {
		streams: Object.values(state.streams),
		currentUserId: state.auth.userId,
		isSignedIn: state.auth.isSignedIn,
		message: state.message
	};
};

export default connect(mapStateToProps, { fetchStreams, resetMessage })(
	StreamList
);
