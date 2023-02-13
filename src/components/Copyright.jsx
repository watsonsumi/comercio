import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Copyright(props) {
	return (
		<Typography
			variant='body2'
			color='text.secondary'
			align='center'
			{...props}
		>
			{'App Web Comercio© '}
			{/* <Link color='inherit' href='https://mui.com/'>
				Servicio.com
			</Link>{' '} */}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

export default Copyright;
