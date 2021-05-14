import React, { Component } from 'react'

class Page extends Component {

    render() {
        let temp = [];

        for (let i = 0; i < 50; i++) {
            temp.push(i);
        }

        return (
            <div style={{
                paddingTop: '30px'
            }} >
                {
                    temp.map((value, index) => {
                        return <div key={index+1} >{value}</div>
                    })
                }
            </div>
        )
    }
}

export default Page
