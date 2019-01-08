import React from 'react';
import { Card, Icon, Row, Col } from 'antd';
const { Meta } = Card;
let cardBox = {
  maxWidth: "900px",
  margin: "0 auto"
};
let greenColor = {
  color:"green"
}
export default class cardBlock extends React.Component {
  render(){
    return (
      <div className="animated zoomIn">
  <Card
    hoverable
    style={cardBox}
    title = "info"
    extra = {<Icon type="calendar" />}
    cover={<img alt="example" src="./src/assets/images/Apilase.jpg" />}
    actions={[<Icon type="calendar" />, <Icon type="calendar" />, <Icon type="calendar" />]}
  >
  <Row type="flex" align="middle" gutter={16}>
    <Col span={4} className="test-align-left">
      <img src="./src/assets/images/Apilase.jpg" width="100%" className="avatar" />
    </Col>
    <Col span={20}>
      <Row>
        <Col span={24} className="test-align-left font-size-12" style={greenColor}>
          Apilase
        </Col>
      </Row>
      <Row>
        <Col span={20} className="test-align-left font-size-14 text-gradient-red-to-yellow">
          Lighter your life with passion.
        </Col>
      </Row>
    </Col>
  </Row>
  <Row type="flex" align="middle" gutter={16}>
    <Col  span={24} className="test-align-left font-size-16 text-gradient-green-to-black">
      Catch one’s Heart,Never be apart.
    </Col>
  </Row>
  </Card>
      </div>
    )
  }
}
