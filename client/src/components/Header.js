import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

export default class Header extends Component {
	state = { activeItem: 'Streamy' };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;

		return (
			<Menu secondary>
				<Menu.Item
					as={Link}
					name='Streamy'
					active={activeItem === 'Streamy'}
					onClick={this.handleItemClick}
					to='/'
				/>
				<Menu.Menu position='right'>
					<Menu.Item
						as={Link}
						name='All streams'
						active={activeItem === 'All streams'}
						onClick={this.handleItemClick}
						to='/'
					/>
					<GoogleAuth />
				</Menu.Menu>
			</Menu>
		);
	}
}
