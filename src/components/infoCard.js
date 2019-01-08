import React from 'react'
import { Row, Col } from 'antd';
export default class infoCard extends React.Component {

    render() {
        return (
          <div className="ani-box animated fadeInUp max-width-900">
          <Row type="flex" align="bottom" className="margin-top-100">
            <Col span={24} className="font-size-20">
             Thanks!
            </Col>

          </Row>
            <Row type="flex" align="bottom" className="margin-top-100">
              <Col span={20} className="test-align-left font-size-16">

                    如果你想打赏小的一点心意，Apilase将感激不尽！orz

              </Col>
              <Col span={4}>
                <img src="./src/assets/images/alipayErcode.png" width="100%" className="avatar" />
              </Col>
            </Row>
            <privateCard />
          </div>
        )
    }
}
