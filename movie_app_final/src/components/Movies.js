import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import Button from '@material-ui/core/Button';
import red from '@material-ui/core/colors/red';

class Movies extends Component {
  state = { page: 0, rowsPerPage: 5 };

  handleChangePage = page => _ => this.setState({ page });
  handleChangeRowsPerPage = event => this.setState({ rowsPerPage: event.target.value });

  render() {
    const { movies, deleteMovie } = this.props;
    const { rowsPerPage, page } = this.state;
    const currentPageMovies = movies.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    return (
      <Paper style={{ margin: 10 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name: </TableCell>
              <TableCell>Director: </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {currentPageMovies.map(({ id, name, director }) => (
              <TableRow key={id}>
                <TableCell>{name}</TableCell>
                <TableCell>{director}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    style={{
                      float: 'right',
                      backgroundColor: red[500],
                      color: 'white'
                    }}
                    onClick={deleteMovie(id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                colSpan={3}
                count={movies.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={this.handleChangePage}
                onChangeRowsPerPage={this.handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </Paper>
    );
  }
}

export default Movies;
