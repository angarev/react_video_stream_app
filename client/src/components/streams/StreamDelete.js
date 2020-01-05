import React, { Component } from 'react';
import Modal from '../Modal';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { fetchStream, deleteStream } from '../../actions';
import { connect } from 'react-redux';
import history from '../../history';

class StreamDelete extends Component {
	renderActions() {
		return (
			<React.Fragment>
				<Button negative onClick={this.deleteStream}>
					Delete
				</Button>
				<Button as={Link} to='/'>
					Cancel
				</Button>
			</React.Fragment>
		);
	}

	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchStream(id);
	}

	deleteStream = () => {
		const { id } = this.props.match.params;
		this.props.deleteStream(id);
	};

	renderContent() {
		if (!this.props.stream) {
			return 'Are you sure you want to delete this stream?';
		}
		return `Are you sure you want to delete this stream with title: ${this.props.stream.title}`;
	}

	render() {
		return (
			<Modal
				title='Delete Stream'
				content={this.renderContent()}
				actions={this.renderActions()}
				onDismiss={() => history.push('/')}
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		stream: state.streams[ownProps.match.params.id]
	};
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
	StreamDelete
);
