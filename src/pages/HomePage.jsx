import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import {
	Container,
	Button,
	Grid,
	Typography,
	FormControl,
	InputLabel,
	CardContent, Box
  } from "@mui/material";
  import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

  import { PhoneIphone } from "@mui/icons-material";
  
  import Copyright from "../components/Copyright";
  import LogoIcon from "../components/Icons/LogoIcon";
  import CustomInput from "../components/Icons/CustomInput";
  import { useSelector } from 'react-redux';
import { register } from '../redux/actions/registerActions';
import { axiosFetch, axiosFetchEmail } from '../config/url/url';
import SweetAlert from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from 'axios';
const MySwal = withReactContent(SweetAlert);
const HomePage = () => {

	return (
		<Container
			disableGutters={true}
			maxWidth={false}
			sx={{
				backgroundColor: 'rgba(91, 153, 191, 0.1)',
				padding: '58px 64px 41px 32px',
				margin: '0',
			}}
			className='container_Home'
		>
			<Grid
      wrap="nowrap"
      className="home_orders"
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: "0px",
        padding: "24px 0 32px 24px",
        boxShadow: "0px 1px 12px rgba(0, 0, 0, 0.06)",
      }}
    >
        <Typography
          sx={{
            fontSize: "32px",
            fontWeight: "700",
            color: "rgba(40, 40, 40, 0.8)",
            textAlign: "center",
          }}
        >
          <h1> Bienvenido</h1>
        </Typography>
        <form className="form">
          <CardContent>
                  <Grid
              container
              wrap='nowrap'
              columnGap={{ xs:1, lg: 9 }}
              className='home_products_record'
          >
               
            </Grid>
          </CardContent>
         
        </form>
      </Grid>
		</Container>
	);
};

export default HomePage;
