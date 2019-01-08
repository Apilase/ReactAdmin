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
// 结尾组件
export default class newblock extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
          <Card
            hoverable
            style={cardBox}
            title = "info"
            extra = {<Icon type="calendar" />}
            cover={<img alt="example" src="./src/assets/images/Apilase.jpg" />}
            actions={[<Icon type="calendar" />, <Icon type="calendar" />, <Icon type="calendar" />]}
          >
          <Row type="flex" align="middle" gutter={16}>
            <Col span={24}>
            Catch one’s Heart,Never be apart.
            </Col>
          </Row>
          <Row type="flex" align="middle" gutter={16}>
            <Col  span={24} className="test-align-left font-size-16 text-gradient-green-to-black">
              Catch one’s Heart,Never be apart.
            </Col>
          </Row>
          </Card>
        )
    }
}
