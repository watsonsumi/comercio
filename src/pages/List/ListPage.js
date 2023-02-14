import {
	Container,
	Button,
	Grid,
	Typography,
	CardContent
  } from "@mui/material";
import React, { useEffect, useState } from "react";
  import CustomInput from "../../components/Icons/CustomInput";
  import { makeStyles } from "@material-ui/core/styles";
  import Paper from "@material-ui/core/Paper";
  import Table from "@material-ui/core/Table";
  import TableBody from "@material-ui/core/TableBody";
  import TableCell from "@material-ui/core/TableCell";
  import TableContainer from "@material-ui/core/TableContainer";
  import TableHead from "@material-ui/core/TableHead";
  import TablePagination from "@material-ui/core/TablePagination";
  import TableRow from "@material-ui/core/TableRow";
  import axios from 'axios';
  const columns = [
    {
      id: "nombre_depositante",
      label: "Nombre depositante",
      minWidth: 170,
      align: "right",
      format: value => value.toLocaleString()
    },
    { id: "celular", 
      label: "Telefono", 
      minWidth: 170 , 
      format: value => value.toLocaleString()},
    {
      id: "fecha_hora",
      label: "Fecha",
      minWidth: 170,
      align: "right",
      format: value => value.toLocaleString()
    },
    {
      id: "monto",
      label: "Monto",
      minWidth: 170,
      align: "right",
      format: value => value.toLocaleString()
    }
  ];
  
  
  function createData(nombre_depositante, celular, fecha_hora, monto) {
    const myDate = new Date(fecha_hora);
    const fecha = myDate.toLocaleDateString(); 
    console.log(myDate)
    // let day = myDate.getDate();
    // let month = myDate.getMonth() + 1;
    // let year = myDate.getFullYear();
    // let fecha =`${day}-0${month}-${year}`;
    return { nombre_depositante, celular, fecha, monto };
  }
 
  const useStyles = makeStyles({
    root: {
      width: "100%"
    },
    container: {
      maxHeight: 590
    }
  });
const ListPage = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [values, setValues]=useState({
    fecha: '',
    nrCelular:''
    })
  const [tabla, setTabla]=useState([])
  const token = localStorage.getItem('Token');
  console.log(token);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  // 
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChange = (e) => {
    console.log(e.currentTarget.id);
    console.log(e.currentTarget.value);
    setValues({ ...values, [e.currentTarget.id]: e.currentTarget.value });
  };
  let lid= '';
  const handleSubmit = async (e) => {
    console.log('aqui');
		e.preventDefault();
    try {
        const config =  {
          headers: {
              "Access-Control-Allow-Origin": "*",
              'Access-Control-Allow-Headers': '*',
              "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
              }
            }
        await axios.get(`https://m0uez7vsl1.execute-api.us-east-1.amazonaws.com/test/`+values.nrCelular+`/`+values.fecha)
        .then(res => {
          const data = res.data.body;
          console.log(data);
        setTabla( data.map(item =>  
          createData(item.nombre_depositante, item.celular, item.fecha_hora, item.monto)
          ))
        })
} catch (e) {
  console.log(e);
}
  }
  // https://m0uez7vsl1.execute-api.us-east-1.amazonaws.com/test/984534564/2013-01-29

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
           <CardContent>
            <Grid 
              container
              wrap='nowrap'
              columnGap={{ xs:1, lg: 9 }}
              // className='home_products_record'
              >
              <CustomInput
                  labelText="Fecha"
                  id="fecha"
                  name="fecha"
                  formControlProps={{
                    fullWidth: true
                  }}
				          // defaultValue={estado.telefono}//{931741680}
                  handleChange={handleChange}
                  type="date"
                />
                <CustomInput
                  labelText="Numero celular"
                  id="nrCelular"
                  name="nrCelular"
                  formControlProps={{
                    fullWidth: true,
                  }}
				          // defaultValue={estado.idcliente}//"100001"
                  type="text"
                  handleChange={handleChange}
                />
               <Button
            fullWidth
            onClick={handleSubmit} 
            sx={{
              // fontSize: "32px",
              fontWeight: "500",
              color: "rgba(40, 40, 40, 0.8)",
              textAlign: "center",
              background: 'black',
              color: 'aliceblue',
              borderRadius: '3px',
              padding: '1px',
            }}
          >
            Buscar
          </Button>
            </Grid>
          </CardContent>
          <h3> Lista Usuarios</h3>
        </Typography>
        <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tabla.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map(column => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15, 20, 25, 50, 100]}
        component="div"
        count={tabla.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
      </Grid>
		</Container>
	);
};

export default ListPage;
