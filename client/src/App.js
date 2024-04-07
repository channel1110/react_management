import React, { Component } from 'react'; // React 및 Component를 가져옴
import Customer from './components/Customer'; // Customer 컴포넌트를 가져옴
import Table from '@mui/material/Table'; // Material-UI의 Table 컴포넌트를 가져옴
import TableHead from '@mui/material/TableHead'; // Material-UI의 TableHead 컴포넌트를 가져옴
import TableBody from '@mui/material/TableBody'; // Material-UI의 TableBody 컴포넌트를 가져옴
import TableRow from '@mui/material/TableRow'; // Material-UI의 TableRow 컴포넌트를 가져옴
import TableCell from '@mui/material/TableCell'; // Material-UI의 TableCell 컴포넌트를 가져옴
import Paper from '@mui/material/Paper'; // Material-UI의 Paper 컴포넌트를 가져옴
import { withStyles } from '@mui/styles'; // Material-UI의 withStyles를 가져옴
import CircularProgress from '@mui/material/CircularProgress'; // 0407 Material-UI의 CircularProgress 컴포넌트를 가져옴

// Material-UI 스타일 정의
const styles = theme => ({
  root: {
    width: '100%',
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  },
  progress: {
    margin : 10
  }


});

// App 컴포넌트 정의
class App extends Component {

  // 초기 state 설정
  state ={
    customers: "", // customers를 빈 문자열로 초기화
    completed : 0 // 로딩처리 API 호출 진행 상태를 나타내는 completed를 0으로 초기화
  }
  // 컴포넌트가 마운트되었을 때 호출되는 메서드
  componentDidMount(){
     // 20ms 간격으로 progress 메서드를 호출하여 CircularProgress의 값 갱신
    this.timer = setInterval(this.progress, 20);
    
    // API 호출 메서드 호출
    this.callApi()
      // API 응답 데이터로 customers state 업데이트
      .then(res=> this.setState({customers: res}))
      .catch(err => console.log(err));
  }
  
  // API를 호출하는 비동기 함수
  callApi =async() => {
    const response = await fetch("/api/customers");// API에 GET 요청을 보내고 응답을 받음
    const body =await response.json(); // 응답 데이터를 JSON 형식으로 파싱
    return body; // JSON 파싱된 데이터 반환
  }
  // 로딩처리 API 호출 진행 상태를 업데이트하는 메서드
  progress = () => {
    const {completed} = this.state;
    this.setState( {completed: completed >= 100 ? 0 :completed + 1});
  }

  // 렌더링 메서드
  render() {
    const { classes } = this.props; // props로부터 classes 가져오기
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
            {this.state.customers ? this.state.customers.map(c => { 
              return(<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>)
            }): 
            <TableRow>
              <TableCell colSpan="6" align="center">
                <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}></CircularProgress>
              </TableCell> 
            </TableRow>
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App); // withStyles를 사용하여 App 컴포넌트를 스타일이 적용된 컴포넌트로 감싸서 내보냄
