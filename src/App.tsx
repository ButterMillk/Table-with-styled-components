import React from 'react';
import './App.css';
import Table from './Components/Table';
import { ColumnDescription } from './Model/Model';
import { createGlobalStyle } from 'styled-components';
const data = require('./Data/mockData.json');

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
    }

    *, ::after, ::before{
        box-sizing: border-box;
    }

`;

function App() {

  const columnConfiguration = data.arrayDescription as Array<ColumnDescription>;
  const cutomerData = data.customerData;

  
  return (
    <div className="App">
      <GlobalStyle />
      <Table columnConfiguration={columnConfiguration} data={cutomerData} />
    </div>
  );
}

export default App;
