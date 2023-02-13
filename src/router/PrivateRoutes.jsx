import { Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
	// TODO: Validacion auth
	return <Outlet />;
};

export default PrivateRoutes;
