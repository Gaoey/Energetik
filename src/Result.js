import React, { Component } from 'react'
import { Row, Col, Thumbnail, Button, Table, Modal, Image } from 'react-bootstrap'
import { region } from './Constant'
import './App.css'
import { findRegion, searchType, credit, currencyFormat, selectUnitFromType, getImage } from './utils'

class Result extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalShow: false,
            thisImage: getImage()
        }
        this.open = this.open.bind(this)
        this.close = this.close.bind(this)
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

    render() {
        // 0 is customer
        // 1 is region
        // 2 is bill without system
        // 3 is system size
        // 4 is payback period
        // 5 is pb cutoff
        // 6 is num system
        // 7 is total size
        const { arr } = this.props
        const { thisImage } = this.state
        const unit = selectUnitFromType(arr[0])
        return (
            <Col xs={12} md={4}>
                <Thumbnail src={thisImage} alt="242x200">
                    <h3>REGION: {findRegion(arr[1])}</h3>
                    <p>Description</p>
                    <Table responsive hover>
                        <tbody>
                            <tr>
                                <td className="right">Customer Type</td>
                                <td className="left">{searchType(arr[0])}</td>
                            </tr>
                            <tr>
                                <td className="right">Total System Size ({unit})</td>
                                <td className="left">{currencyFormat(arr[7])}</td>
                            </tr>
                            <tr>
                                <td className="right">Number of Customer</td>
                                <td className="left">{arr[6]}</td>
                            </tr><tr>
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
                            {/* <tr>
                                <td>PB Cut-Off</td><td>{arr[5]}</td>
                            </tr> */}

                        </tbody>
                    </Table>
                    <p>
                        <Button bsStyle="primary" onClick={() => this.open()}>BID SUBMIT</Button>
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
                                    <h3>REGION: {findRegion(arr[1])}</h3>
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
                                                <td className="left">{currencyFormat(arr[7])}</td>
                                            </tr>
                                            <tr>
                                                <td className="right">Number of Customer</td>
                                                <td className="left">{arr[6]}</td>
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
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button onClick={() => this.close()}>Close</Button>
                            <Button bsStyle="primary" onClick={() => this.close()}>Save changes</Button>
                        </Modal.Footer>
                    </Modal>
                </div >
            </Col >
        )
    }
}

export default Result
