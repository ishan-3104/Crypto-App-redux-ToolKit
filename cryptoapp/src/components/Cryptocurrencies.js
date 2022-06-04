import React, { useEffect, useState } from 'react'
import millify from 'millify'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { Card, Col, Input, Row } from 'antd'
import { Link } from 'react-router-dom'

export default function Cryptocurrencies({simplified}) {
  const [search, setsearch] = useState('')
  const count = simplified ? 10 : 100
  const{data: cryptosList ,isFetching}= useGetCryptosQuery(count)
  const [cryptos, setcryptos] = useState(cryptosList?.data?.coins)
  
  
  useEffect(()=>{
    const filterdata = cryptosList?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(search.toLowerCase()))
    setcryptos(filterdata)
  },[cryptosList,search])

  if(isFetching) return 'Loading .... !'

  return (
    <div>
      {!simplified && <>
      <div className='search-crypto'>
        <Input placeholder='search crypto currency' onChange={(e)=>setsearch(e.target.value)}/>
      </div>
      </>}
      <Row gutter={[32,32]} className='crypto-card-container'>
          {
            cryptos?.map((currency)=>(
              <Col xs={24} md={12} lg={6} className="crypto-card" key={currency.rank}>

                <Link className='' to={`/coins/${currency.uuid}`}>
                  <Card 
                  title={`${currency.rank}.${currency.name}`}
                  extra={<img className='crypto-image' src={`${currency.iconUrl}`}/>}
                  hoverable
                  >  
                  <p>Price : {millify(currency.price)}</p>
                  <p>Market cap : {millify(currency.marketCap)}</p>
                  <p>daily Exchange : {millify(currency.change)}</p>

                  </Card>
                </Link>
              </Col>
            ))
          }
      </Row>
    </div>
  )
}
