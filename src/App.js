import React, { Component } from 'react';
import Customer from './components/Customer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import { withStyles } from '@mui/styles';

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
});

const customers = [
  {
    'id': 1,
    'image' : 'https://picsum.photos/64/64/?img=1',
    'name' : '김누구',
    'birthday' : '030808',
    'gender' : '남자',
    'job' : '대학생'
  },
  {
    'id': 2,
    'image' : 'https://picsum.photos/64/64?img=2',
    'name' : '갑',
    'birthday' : '880901',
    'gender' : '남자',
    'job' : '회사원'
  },
  {
    'id': 3,
    'image' : 'https://picsum.photos/64/64?img=3',
    'name' : '을',
    'birthday' : '950523',
    'gender' : '남자',
    'job' : '자영업자'
  }
];

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}> 
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => { return(<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>)})}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
