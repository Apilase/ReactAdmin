import React from 'react'
import { Calendar } from 'antd';
let redColor = {
  color:'red'
};
let blackColor = {
  color:'black'
};
export default class myCalendar extends React.Component {


    dateCellRender = (value) => {
        return <div><p style={redColor}>宜：嫁娶</p><p style={blackColor}>祭：撸代码</p>  {value.getDayOfMonth()}</div>
    }

    monthCellRender = (value) => {
        return <div><p style={redColor}>宜：捡钱</p><p style={blackColor}>祭：借钱</p> {value.getMonth()}</div>
    }

    render() {
        return (
            <Calendar defaultValue={new Date('2010-10-10')}
                dateCellRender={this.dateCellRender} monthCellRender={this.monthCellRender} />
        )
    }
}
