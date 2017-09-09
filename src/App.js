import React, { Component } from 'react'
import './App.css'
import { SplitButton, MenuItem, Button, Grid, Row } from 'react-bootstrap'
import Header from './Header'
import Papa from 'babyparse'
import TextFileReader from './read-text-file'
import Result from './Result';
import Footer from './Footer';
import { region, regionValues, customerType } from './Constant';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      province: "",
      region: "",
      regionKey: "",
      customType: "",
      resultArr: []
    }
  }

  componentDidMount() {
    this.readTextFile(require('./potential_customers_screened.csv'))
  }

  readTextFile = file => {
    const rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = () => {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status == 0) {
          const allText = rawFile.responseText
          this.generate(allText)
        }
      }
    };
    rawFile.send(null);
  };

  generate(text) {
    Papa.parse(text, {
      complete: (results) => {
        this.setState({
          resultArr: results.data
        })
      }
    })
  }

  render() {
    const { resultArr } = this.state
    const isArrEmpty = resultArr.length == 0

    return (
      <div className="App">
        <Header />
        <Grid>
          <Row>
            <div className="Container" style={{ marginTop: 20, paddingBottom: 70 }}>
              <div style={{ marginTop: 20 }}>
                {!isArrEmpty
                  ? resultArr.map((e, key) => {
                    if (key != 0 && key != resultArr.length-1) {
                      return <Result arr={e} />
                    }
                  })
                  : <p></p>
                }
              </div>
            </div>
          </Row>
        </Grid>
        <Footer />
      </div >
    );
  }
}

export default App;
