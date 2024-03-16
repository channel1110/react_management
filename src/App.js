import React, { Component } from 'react';
import logo from './logo.svg';
import Customer from './components/Custormer';
import './App.css';

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
]
class App extends Component {
  render() {
  return (
    <div>
      {/* <Customer
        id={customers[0].id}
        image={customers[0].image}
        name={customers[0].name}
        birthday={customers[0].birthday}
        gender={customers[0].gender}
        job={customers[0].job}
      />
      <Customer
        id={customers[1].id}
        image={customers[1].image}
        name={customers[1].name}
        birthday={customers[1].birthday}
        gender={customers[1].gender}
        job={customers[1].job}
      />
      <Customer
        id={customers[2].id}
        image={customers[2].image}
        name={customers[2].name}
        birthday={customers[2].birthday}
        gender={customers[2].gender}
        job={customers[2].job}
      /> */}
    {
      customers.map(c => {
        return(
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
        )
      })
    }

    </div>



    );
  }
}

export default App;