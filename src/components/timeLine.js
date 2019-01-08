import React from 'react'
import { Timeline, Icon,Card, Row, Col } from 'antd';
// 引入标准Fetch及IE兼容依赖
import 'whatwg-fetch'

const title = `Apilase Blog From Creat to Finish.`;

const text_20180321 = `
  Few day ago,I cut my hair,wanna forget something.
  Today,Creat an Timeline to record my
  mood.The boy I loved makes me happy and sad?
  Why I can't control my emotions?
  How could I do can know what he thiking.
`;
const journal_20180321 = `./src/assets/images/journal/journal20180321.jpg`;
const text_20180322 = `
  Today,He do not say hi.A little dispointed.
  But,It's happy to drink one blue pepsi.
  Write a price for web on IVX and VINNG.
  Have a walk after lunch.The sunshine is comfotable.
  Yep,A beatiful day always wait you to find.
`;
const journal_20180322 = `./src/assets/images/journal/journal20180322.jpg`;

export default class timeLine extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
          lists: []
      }
  }

  // 获取数据
  fetchFn = () => {
      fetch('../../src/assets/data/journal.json')
          .then((res) => { console.log(res.status);return res.json() })
          .then((data) => { console.log("dataList:"+data.journalList);this.setState({lists:data.journalList}) })
          .catch((e) => { console.log(e.message) })
  }

  componentDidMount() {
      this.fetchFn()
  }

    render() {
        return (
          <div className="animated fadeInUp">
          <p className="timeline-title">
            {title}
          </p>
          <Timeline>
          <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}> Building ... </Timeline.Item>

          {
              this.state.lists.map((e) => {
                  return (
                    <Timeline.Item>
                      <Card style={{ width: 500 }}>
                      <Row type="flex" align="middle" gutter={16}>
                        <Col span={24} className="test-align-left">
                        {
                          e.urlLists.map((urlLists) => {
                              return (
                                <img src={urlLists.url} className="card-img" />
                              )
                            })
                        }
                        </Col>
                        <Col span={24}>
                          <p>{e.context}</p>
                          <p className="card-corner-right">{e.time}</p>
                        </Col>
                      </Row>
                      </Card>
                    </Timeline.Item>
                  )
              })
          }

          </Timeline>
          </div>
        )
    }
}
