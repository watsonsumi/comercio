import { useEffect, useState } from "react";
import {
  Container,
  Button,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  CardContent,
} from "@mui/material";
import { PhoneIphone } from "@mui/icons-material";

import Copyright from "../components/Copyright";
import LogoIcon from "../components/Icons/LogoIcon";
import CustomInput from "../components/Icons/CustomInput";
// import '../assets/styles/index.scss';
export default function SolicitudPage() {
  return (
    <Container
      disableGutters={true}
      maxWidth={false}
      sx={{
        backgroundColor: "rgba(91, 153, 191, 0.1)",
        padding: "58px 64px 41px 32px",
        margin: "0",
      }}
      className="container_solicitud"
    >
    <Grid
      // container
      wrap="nowrap"
      className="home_orders"
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: "20px",
        padding: "24px 0 32px 24px",
        boxShadow: "0px 1px 12px rgba(0, 0, 0, 0.06)",
      }}
    >
      {/* <Grid item xl={4} lg={4} md={15} sm={24} xs={3}> */}
        <Typography
          sx={{
            fontSize: "32px",
            fontWeight: "700",
            color: "rgba(40, 40, 40, 0.8)",
            textAlign: "center",
          }}
        >
          Servicio Solicitud
        </Typography>
        <form className="form">
          <CardContent>
            {/* <Grid item container spacing={3} justify="center">
              <Grid item xs={32} sm={6} md={16}> */}
                  <Grid
              container
              wrap='nowrap'
              columnGap={{ xs:1, lg: 9 }}
              className='home_products_record'
          >
                <CustomInput
                  labelText="Nombre del cliente"
                  id="email"
                  name="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  type="text"
                  values={"Hola"}
                  onChange={""}
                />
                <CustomInput
                  labelText="NÚMERO DE PEDIDO"
                  id="email"
                  name="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  type="text"
                  value={"Hola"}
                  onChange={""}
                />
                </Grid>
              {/* </Grid>
            </Grid> */}
          </CardContent>
          <CardContent>
            <Grid 
              container
              wrap='nowrap'
              columnGap={{ xs:1, lg: 9 }}
              // className='home_products_record'
              >
              <CustomInput
                  labelText="Teléfono del cliente"
                  id="telefono"
                  formControlProps={{
                    fullWidth: true
                  }}
                  // handleChange={handleChange}
                  type="text"
                />
                <CustomInput
                  labelText="Identidad de Cliente"
                  id="email"
                  name="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  type="text"
                  value={"Hola"}
                  onChange={""}
                />
            </Grid>
          </CardContent>
          <CardContent>
            <Grid 
              container
              wrap='nowrap'
              columnGap={{ xs:1, lg: 9 }}
              className='home_products_record'>
              <CustomInput
                  labelText="Email de cliente"
                  id="telefono"
                  formControlProps={{
                    fullWidth: true
                  }}
                  // handleChange={handleChange}
                  type="text"
                />
                <CustomInput
                  labelText="Pedido recibido por"
                  id="email"
                  name="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  type="text"
                  value={"Hola"}
                  onChange={""}
                />
            </Grid>
          </CardContent>
          <CardContent>
            <Grid 
              container
              wrap='nowrap'
              columnGap={{ xs:4, lg: 4 }}
              className='home_products_record'>
              <CustomInput
                  labelText="fecha pedido"
                  id="telefono"
                  formControlProps={{
                    fullWidth: true
                  }}
                  // handleChange={handleChange}
                  type="date"
                />
                <CustomInput
                    labelText="Fecha prevista inicio"
                    id="telefono"
                    formControlProps={{
                      fullWidth: true
                    }}
                    // handleChange={handleChange}
                    type="text"
                  />
                <CustomInput
                  labelText="Fecha finalizacion prevista"
                  id="email"
                  name="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  type="text"
                  value={"Hola"}
                  onChange={""}
                />
            </Grid>
          </CardContent>
          <CardContent>
            <Grid 
              container
              wrap='nowrap'
              columnGap={{ xs:1, lg: 9 }}
              className='home_products_record'>
              <CustomInput
                  labelText="Trabajos autorizados"
                  id="telefono"
                  formControlProps={{
                    fullWidth: true
                  }}
                  // handleChange={handleChange}
                  type="text"
                />
                <CustomInput
                  labelText="Firma"
                  id="email"
                  name="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  type="text"
                  value={"Hola"}
                  onChange={""}
                />
            </Grid>
          </CardContent>
          <CardContent>
            <Grid 
              container
              wrap='nowrap'
              columnGap={{ xs:1, lg: 9 }}
              className='home_products_record'>
              <CustomInput
                  labelText="Trabajo descripcion"
                  id="telefono"
                  formControlProps={{
                    fullWidth: true
                  }}
                  // handleChange={handleChange}
                  type="text"
                />
            </Grid>
          </CardContent>
          <Button
            fullWidth
            variant="contained-primary"
            // startIcon={<PhoneIphone />}
            // onClick={navigate(...)}
          >
            Enviar
          </Button>
        </form>
      {/* </Grid> */}
      </Grid>
    </Container>
  );
}
