import React from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';

const renderField = ({ input, label, type, placeholder, meta }) => (
	<div className={meta.touched && meta.error ? `field error` : 'field'}>
		<label>{label}</label>
		<div>
			<input
				{...input}
				placeholder={placeholder}
				type={type}
				autoComplete='off'
			/>
			{meta.touched && meta.error && <Message error content={meta.error} />}
		</div>
	</div>
);

const StreamForm = props => {
	const { handleSubmit } = props;

	const onSubmit = formValues => {
		props.onSubmit(formValues);
	};

	return (
		<Form onSubmit={handleSubmit(onSubmit)} error>
			<Field
				as={Form.Field}
				id='title'
				name='title'
				component={renderField}
				type='text'
				label='Title'
				placeholder='Enter Title'
			/>

			<Field
				as={Form.Field}
				id='description'
				name='description'
				component={renderField}
				type='text'
				label='Description'
				placeholder='Enter Description'
			/>
			<Button type='submit' className='primary'>
				Submit
			</Button>
		</Form>
	);
};

const validate = formValues => {
	const errors = {};
	if (!formValues.title) {
		errors.title = 'You must enter a title.';
	}
	if (!formValues.description) {
		errors.description = 'You must enter a description.';
	}
	return errors;
};

export default reduxForm({
	form: 'streamForm',
	validate
})(StreamForm);
