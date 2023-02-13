import { createTheme } from '@mui/material';
import {
	CheckBoxIcon,
	CheckBoxCheckedIcon,
} from '../../components/Icons/CheckBoxIcon';

import {
	btnContainedPrimary,
	btnContainedSecondary,
	btnOutlined,
	btnText,
} from './btnTheme';

export const theme = createTheme({
	typography: {
		button: {
			fontFamily: 'Avenir',
			lineHeight: 1,
			textTransform: 'none',
			fontWeight: '800',
			fontSize: '16px',
		},
		h2: {
			fontWeight: 'bold',
		},
		allVariants: {
			fontFamily: 'Montserrat',
			color: '#282828',
		},
	},
	components: {
		MuiButton: {
			variants: [
				{
					props: { variant: 'contained-primary' },
					style: { ...btnContainedPrimary },
				},
				{
					props: { variant: 'contained-secondary' },
					style: { ...btnContainedSecondary },
				},
				{
					props: { variant: 'outlined' },
					style: { ...btnOutlined },
				},
				{
					props: { variant: 'text' },
					style: { ...btnText },
				},
			],
		},
		MuiTextField: {
			defaultProps: {
				variant: 'standard',
			},
			styleOverrides: {
				root: {
					fontFamily: 'Avenir',
				},
			},
		},
		MuiInputBase: {
			styleOverrides: {
				root: {
					fontFamily: 'Avenir',
				},
			},
		},
		MuiInputLabel: {
			styleOverrides: {
				root: {
					fontFamily: 'Avenir',
					'&.MuiInputLabel-shrink': {
						transform: 'translate(0, -1.5px) scale(1)',
					},
				},
			},
		},
		MuiCheckbox: {
			defaultProps: {
				icon: <CheckBoxIcon />,
				checkedIcon: <CheckBoxCheckedIcon />,
			},
		},
	},
});
