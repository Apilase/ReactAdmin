import React from 'react'

// 结尾组件
export default class myAnimate extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="ani-box animated fadeInUp">
              <div>
                <img src="./src/assets/images/Apilase.jpg" width="100" />
              </div>
                <img src="./src/assets/images/alipayErcode.png" width="100" />
            </div>
        )
    }
}
