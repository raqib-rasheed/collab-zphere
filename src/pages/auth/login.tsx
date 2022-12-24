import React, { FC } from 'react';

const Login: FC = () => {
	const { useState } = React;

	const [inputs, setinputs] = useState({
		email: '',
		password: '',
	});

	const [warnemail, setwarnemail] = useState(false);
	const [warnpass, setwarnpass] = useState(false);
	const [danger, setdanger] = useState(true);

	const [eye, seteye] = useState(true);
	const [pass, setpass] = useState('password');

	const inputEvent = (event: { target: { name: any; value: any } }) => {
		const name = event.target.name;
		const value = event.target.value;
		if (name == 'email') {
			if (value.length > 0) {
				setdanger(true);
			}
		}
		setinputs((lastValue) => {
			return {
				...lastValue,
				[name]: value,
			};
		});
	};

	const submitForm = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		setwarnemail(false);
		setwarnpass(false);
		if (inputs.email.length < 1) {
			setdanger(false);
		}
		if (inputs.email == '') {
			setwarnemail(true);
		} else if (inputs.password == '') {
			setwarnpass(true);
		} else {
			alert('Logged in Successfully');
		}
	};
	const Eye = () => {
		if (pass == 'password') {
			setpass('text');
			seteye(false);
		} else {
			setpass('password');
			seteye(true);
		}
	};

	return (
		<>
			<h1>hi</h1>
		</>
	);
};

export default Login;
