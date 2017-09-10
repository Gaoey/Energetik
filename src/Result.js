import React, { Component } from 'react'
import { Row, Col, Thumbnail, Button, Table, Modal, Image } from 'react-bootstrap'
import { region } from './Constant'
import Papa from 'babyparse'
import './App.css'
import { findRegion, searchType, credit, currencyFormat, selectUnitFromType, getImage, readTextFile } from './utils'

class Result extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalShow: false,
            thisImage: getImage(),
            groups: ''
        }
        this.open = this.open.bind(this)
        this.close = this.close.bind(this)
    }

    componentDidMount() {
        const file = require("./groups/" + this.props.arr[0] + "_" + this.props.arr[1] + ".csv")
        this.readTextFile(file)
    }

    open = () => {
        this.setState({
            modalShow: true
        })
    }

    close = () => {
        this.setState({
            modalShow: false
        })
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
                    groups: results.data
                })
            }
        })
    }

    render() {
        // 0 is customer
        // 1 is region
        // 2 is bill without system
        // 3 is system size
        // 4 is payback period
        // 5 is pb cutoff
        // 6 unit cost
        // 7 is number of customer system
        // 8 is total size
        // 9 is region1
        const { arr } = this.props
        const { groups } = this.state
        const { thisImage } = this.state
        const unit = selectUnitFromType(arr[0])
        const isEmpty = groups !== null
        return (
            <Col xs={12} md={4}>
                <Thumbnail src={thisImage} alt="242x200">
                    <h3>{arr[9]}</h3>
                    <Table responsive hover>
                        <tbody>
                            <tr>
                                <td className="right">Customer Type</td>
                                <td className="left">{searchType(arr[0])}</td>
                            </tr>
                            <tr>
                                <td className="right">Total System Size ({unit})</td>
                                <td className="left">{currencyFormat(arr[8])}</td>
                            </tr>
                            <tr>
                                <td className="right">Number of Customer</td>
                                <td className="left">{arr[7]}</td>
                            </tr>
                            <tr>
                                <td className="right">Credit Profile</td>
                                <td className="left">{credit()}</td>
                            </tr>
                            {/* <tr>
                                <td>Region</td><td> {findRegion(arr[1])}</td>
                            </tr> */}
                            {/* <tr>
                                <td>Bill Without System</td><td>{arr[2]}</td>
                            </tr> */}
                            <tr>
                                <td className="right">Average System Size ({unit})</td>
                                <td className="left">{currencyFormat(arr[3])}</td>
                            </tr>
                            <tr>
                                <td className="right">Payback Period (years)</td>
                                <td className="left">{Math.round((parseFloat(arr[4]) * 10) / 10)}</td>
                            </tr>
                            <tr>
                                <td className="right">Unit Cost (USD/KW)</td>
                                <td className="left">{currencyFormat(arr[6])}</td>
                            </tr>
                            {/* <tr>
                                <td>PB Cut-Off</td><td>{arr[5]}</td>
                            </tr> */}

                        </tbody>
                    </Table>
                    <p>
                        <Button bsStyle="primary" onClick={() => this.open()}>SUBMIT BID</Button>
                    </p>
                </Thumbnail>

                {/* modal */}
                <div className="static-modal">
                    <Modal show={this.state.modalShow} onHide={() => this.close()}>
                        <Modal.Header>
                            <Modal.Title>For More Information</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Row>
                                <Col md={4} className="modal-image">
                                    <Image src={thisImage} circle thumbnail />
                                    <h3>{arr[9]}</h3>
                                </Col>
                                <Col md={8} >
                                    <Table responsive hover>
                                        <tbody>
                                            <tr>
                                                <td className="right">Customer Type</td>
                                                <td className="left">{searchType(arr[0])}</td>
                                            </tr>
                                            <tr>
                                                <td className="right">Total System Size ({unit})</td>
                                                <td className="left">{currencyFormat(arr[8])}</td>
                                            </tr>
                                            <tr>
                                                <td className="right">Number of Customer</td>
                                                <td className="left">{arr[7]}</td>
                                            </tr><tr>
                                                <td className="right">Credit Profile</td>
                                                <td className="left">{credit()}</td>
                                            </tr>
                                            <tr>
                                                <td className="right">Average System Size ({unit})</td>
                                                <td className="left">{currencyFormat(arr[3])}</td>
                                            </tr>
                                            <tr>
                                                <td className="right">Payback Period (years)</td>
                                                <td className="left">{Math.round((parseFloat(arr[4]) * 10) / 10)}</td>
                                            </tr>
                                            <tr>
                                                <td className="right">Unit Cost (USD/KW)</td>
                                                <td className="left">{currencyFormat(arr[6])}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                            {/* groups */}
                            <Row>
                                <Col md={4} className="modal-image">
                                    <Image src={require("./images/listing.png")}/>
                                </Col>
                            </Row>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button onClick={() => this.close()}>Close</Button>
                            <Button bsStyle="primary" onClick={() => this.close()}>SUBMIT BID FORM</Button>
                        </Modal.Footer>
                    </Modal>
                </div >
            </Col >
        )
    }
}

export default Result
