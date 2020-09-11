import React from 'react';

import {List,Card,Row,Col} from 'antd';

const Tiled = ({list})=>{
    return(
        <Row gutter={20}>
            {list?.map((i,k)=>(
                <Col span={window.innerWidth > 1200 ? 4 : window.innerWidth > 900 ? 6 : window.innerWidth > 480 ? 12 : 24} key={k}>
                    <Card 
                        hoverable
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                        <div>
                            <h2>{`${i.name.title} ${i.name.first} ${i.name.last}`}</h2>
                            <h4>{i.email}</h4>
                            <h4>{i.phone}</h4>
                            <h4>{`${i.location.country} ${i.location.street.number} ${i.location.street.name} ${i.location.city} ${i.location.state}`}</h4>
                            <h4>{i.nat}</h4>
                        </div>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default Tiled;

