import React, { Component } from 'react'
import { Row, Col, Thumbnail, Button, Table } from 'react-bootstrap'
import { region } from './Constant'
import './App.css'

const findRegion = (num) => {
    switch (num) {
        case '14':
            return 'A'
            break
        case '15':
            return 'B'
            break
        case '16':
            return 'C'
            break
        case '17':
            return 'D'
            break
        default: 'A'
    }
}

const credit = () => {
    const creditRate = [
        'A',
        'B'
    ]

    const rand = Math.floor((Math.random() * creditRate.length))
    return creditRate[rand]
}

const searchType = (type) => {
    switch (type) {
        case 'LGS':
            return 'Industrial'
            break
        case 'MGS':
            return 'Commercial'
            break
        case 'Res':
            return 'Residential'
            break
        case 'SGS_TOU':
            return 'Small Bussiness'
            break
        default: 'Industrial'
    }
}

const currencyFormat = (num) => {
    return parseFloat(num).toFixed(2).replace(/./g, (c, i, a) => {
        return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
    });
}

const selectUnitFromType = (type) => {
    if (type == 'Res' || type == 'SGS_TOU') {
        return 'KW'
    } else {
        return 'MW'
    }
}

const getImage = () => {
    const ImageList = [
        require("./images/bangkok.jpg"),
        require("./images/italy.jpg"),
        require("./images/london.jpg"),
        require("./images/newyork.jpg"),
        require("./images/newzealand.jpg"),
        require("./images/washington.jpg"),
        require("./images/china.jpg"),
    ]

    const rand = Math.floor((Math.random() * ImageList.length))
    return ImageList[rand]
}

const Result = ({ arr }) => {
    // 0 is customer
    // 1 is region
    // 2 is bill without system
    // 3 is system size
    // 4 is payback period
    // 5 is pb cutoff
    // 6 is num system
    // 7 is total size
    const unit = selectUnitFromType(arr[0])
    return (
        <Col xs={6} md={4}>
            <Thumbnail src={getImage()} alt="242x200">
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
                    <Button bsStyle="primary">BID SUBMIT</Button>
                </p>
            </Thumbnail>
        </Col>
    )
}

export default Result
