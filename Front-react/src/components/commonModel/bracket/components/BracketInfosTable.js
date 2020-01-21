import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
});

export function BracketInfosTableFunc({infoTeam}){
    const classes = useStyles();

    infoTeam.players=infoTeam.players.sort(function(a,b){
        return parseFloat(b.eloPlayer) - parseFloat(a.eloPlayer);
    });

    return(
        <TableContainer component={Paper}>
            <Typography>{infoTeam.team_name}</Typography>
            <Typography>Elo moyen: {infoTeam.elo}</Typography>
            <Table className={classes.table} aria-label="bracket infos table">
                <TableHead>
                    <TableRow>
                        <TableCell>Nom Joueur</TableCell>
                        <TableCell align="right">Elo </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {infoTeam.players.map((player)=>(
                        <TableRow key={player.playerId}>
                            <TableCell component="th" scope="row">
                                {player.playerName}
                            </TableCell>
                    <TableCell align="right">{player.eloPlayer}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
