import _ from 'lodash';
import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamFrom from './StreamForm';

class StreamEdit extends Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchStream(id);
	}

	onSubmit = formValues => {
		this.props.editStream(this.props.match.params.id, formValues);
	};

	render() {
		if (!this.props.stream) {
			return (
				<Grid centered columns={2}>
					<Grid.Column>
						<Header as='h4'>Loading...</Header>
					</Grid.Column>
				</Grid>
			);
		}

		return (
			<Grid centered columns={2}>
				<Grid.Column>
					<Header as='h3' dividing>
						Edit a stream
					</Header>
					<StreamFrom
						initialValues={_.pick(this.props.stream, 'title', 'description')}
						onSubmit={this.onSubmit}
					/>
				</Grid.Column>
			</Grid>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		stream: state.streams[ownProps.match.params.id]
	};
};

export default connect(mapStateToProps, { fetchStream, editStream })(
	StreamEdit
);
