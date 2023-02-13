import { Box, Container, Grid, Typography } from '@mui/material';
// import { Box } from '@mui/system';
import { NavLink, Outlet, Navigate } from 'react-router-dom';
import LogoIcon from '../components/Icons/LogoIcon';
import HomeIcon from '../components/Icons/HomeIcon';
import ListIcon from '../components/Icons/ListIcon';
import SettingIcon from '../components/Icons/SettingIcon';
import LogoutIcon from '../components/Icons/LogoutIcon';
import logo from '../assets/images/logo.jpeg';
const NavBarLayout = () => {
	return (
		<Container
			maxWidth={false}
			disableGutters={true}
			sx={{
				display: 'flex',
				margin: '0',
				padding: '0',
			}}
			className='container_NavBar'
		>
			<Grid
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					padding: '24px 24px',
				}}
			>
				<Box className='navBar_sections'>
					{/* <LogoIcon className='logoHome' /> */}
					{/* <img src='../assets/images/logo.jpg'/> */}
					<img src={logo} className="App-logo" alt="logo" />
					<NavLink to='/home' end>
						<HomeIcon className='icons' />
						Inicio
					</NavLink>

					<NavLink
						to='/service'
					>
						<ListIcon className='icons' />
						Servicio Solicitud
					</NavLink>

				</Box>
				<Box className='footer_navBar'>
					{/* <Box className='footer_user'>
						<Box className='circle_navBar' />
						<Box className='name_age'>
							<Typography className='text name'>Allison Valencia</Typography>
							<Typography className='text age'>32 años</Typography>
						</Box>
					</Box> */}
					<Box className='footer_logout'>
						<Typography className=''>Cerrar sesión</Typography>
						<LogoutIcon />
					</Box>
				</Box>
			</Grid>
			<Outlet />
		</Container>
	);
};

export default NavBarLayout;
