import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamFrom from './StreamForm';

class StreamCreate extends Component {
	onSubmit = formValues => {
		this.props.createStream(formValues);
	};

	render() {
		return (
			<Grid centered columns={2}>
				<Grid.Column>
					<Header as='h3' dividing>
						Create a stream
					</Header>
					<StreamFrom onSubmit={this.onSubmit} />
				</Grid.Column>
			</Grid>
		);
	}
}

export default connect(null, { createStream })(StreamCreate);
