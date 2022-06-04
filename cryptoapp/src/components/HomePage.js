import React, { useEffect, useState } from 'react'
import millify from 'millify'
import { Col, Row, Statistic, Typography } from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi'
import axios from 'axios'
import Cryptocurrencies from './Cryptocurrencies'
import News from './News'
import { Link } from 'react-router-dom'
const {Title} = Typography

export default function HomePage() {
    const [data1, setdata1] = useState()
    // useEffect(()=>{

    //   axios.get('https://coinranking1.p.rapidapi.com/coins/?rapidapi-key=9598c130b9msh328293c50ad072cp12d403jsn637fb2cb897f')
    //   .then((response)=>{setdata1(response.data)
      
    //     console.log(response.data.data);
    //   })
    // },[])
    const {data,isFetching} = useGetCryptosQuery(10)
    
    if(isFetching) return 'loadin .....'
    
 const globelStates = data.data.stats
    console.log(globelStates); 
  return (
    <>
        <Title level={2} className="heading">Globle Crypto</Title>
        <Row>
            <Col span={12}><Statistic title="Totle cryptocurrencies" value={globelStates.total}></Statistic></Col>
            <Col span={12}><Statistic title="Totle Exchange" value={millify(globelStates.totalExchanges)}></Statistic></Col>
            <Col span={12}><Statistic title="Totle Market cap" value={millify(globelStates.totalMarketCap)}></Statistic></Col>
            <Col span={12}><Statistic title="Totle 24th volume" value={millify(globelStates.total24hVolume)}></Statistic></Col>
            <Col span={12}><Statistic title="Totle Markets" value={millify(globelStates.totalMarkets)}></Statistic></Col>
        </Row>
        <div className='home-heading-container'>
          <Title level={2} className='home-title'>Top 10 crypto in the world</Title>
          <Title level={3} className ="show-more"><Link to = '/cryptocurrencies'>Show more</Link></Title>
        </div>
        <Cryptocurrencies simplified />
        <div className='home-heading-container'>
          <Title level={2} className='home-title'>latest crypto news</Title>
          <Title level={3} className ="show-more"><Link to = '/news'>Show more</Link></Title>
        </div>
        <News simplified/>
    </>
  )
}
