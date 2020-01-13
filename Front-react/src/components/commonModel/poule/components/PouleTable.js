import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
/*
function desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

function stableSort(array, cmp) {
const stabilizedThis = array.map((el, index) => [el, index]);
stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
});
return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}  

const headCells =[
    {id:'name',numeric:false,disablePadding:true, label:"Nom équipe"},
    {id:'points',numeric:true,disablePadding:false,label:"Points"}

];*/
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

function createData(teamName, points){
    return {teamName,points};
}

const rows =[
    createData('FC SCHLAG',15),
    createData('Team Liquid',1),
    createData('Fnatic',23),
    createData('AS Miskine',17)
];


 function SimplePouleTable({infoPoule}) {
    const classes = useStyles();
  
    return (
      <TableContainer component={Paper}>
        <Typography>{infoPoule.name}</Typography>  
        <Table className={classes.table} aria-label="simple table">
        
          <TableHead>
            <TableRow>
              <TableCell>Equipes</TableCell>
              <TableCell align="right">Points</TableCell>
             </TableRow>
          </TableHead>
          <TableBody>
            {infoPoule.equipes.map(equipe => (
              <TableRow key={equipe.name}>
                <TableCell component="th" scope="row">
                  {equipe.name}
                </TableCell>
                <TableCell align="right">{equipe.points}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }



class PouleTable extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <SimplePouleTable infoPoule={this.props.infoPoule}/>
            </div>
        );
    }

}
export default PouleTable;