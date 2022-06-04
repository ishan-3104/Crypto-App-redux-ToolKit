import { Avatar, Card, Col, Row, Select, Typography } from 'antd'
import React, { useState } from 'react'
import { useGetCryptoNewsQuery } from '../services/CryptoNewApi'
import {  useGetCryptosQuery } from '../services/cryptoApi'
import moment from 'moment'

const{Text,Title} = Typography
const{Option} = Select
const demoNewsImag = "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News"
export default function News({simplified}) {
 
  const [newsCategory, setnewsCategory] = useState('Cryptocurrency')
  const {data} = useGetCryptosQuery(100)
  const {data:cryptonews} = useGetCryptoNewsQuery({newsCategory ,count : simplified? 10 :100})
  
  return (
    <div>
      <Row gutter={[24,24]}>
      {/* <Autocomplete
      disablePortal
      
      options={countries}
      getOptionLabel={(option) => option.name}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          
          {option.name} 
        </Box>)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password',// disable autocomplete and autofill
          }}/>
          )}
     
    /> */}
        {
          !simplified && (
            <Col span={24}>
              <Select 
                showSearch
                className='select-news'
                placeholder = "Select a crypto"
                optionFilterProp='children'
                onChange={(value)=>setnewsCategory(value)}
                filterOption = {(input,option)=> option.children.toLowercase().indexOf(input.toLowerCase()>=0)}
                >
                  <Option value='cyptocurrency'>cryptocurrency</Option>
                  {
                    data?.data?.coins.map((coin)=><Option value={coin.name}>{coin.name}</Option>)
                  }
                </Select>
            </Col>
          )
        }
       {
          cryptonews?.value.map((news,i)=>(
            <Col xs={24} md={12} lg={12} key={i}>
              <Card className="news-card" hoverable>
                <a href={news.url} taget = 'blank' rel= "noreferrer">
                  <div className='news-image-container'>
                    <Title level={4} className='news-title'>{news.name}</Title>
                    <img src={news?.image?.thumbnail?.contentUrl || demoNewsImag} alt="news"/>
                  </div>
                  <p>
                    {
                      news.description > 100 
                      ? `${news.description.substing(0,100)}...`
                      :`${news.description}`
                    }
                  </p>
                  <div className='provider-container'>
                    <div>
                    <Avatar src = {news.provider[0].image?.thumbnail?.contentUrl || demoNewsImag } alt='new'></Avatar>
                    <Text>{news.provider[0]?.name}</Text>
                    </div>
                    <Text>
                      {moment(news.datePublished).startOf('ss').fromNow()}
                    </Text>
                  </div>
        
                </a>

              </Card>
            </Col>
          ))
       }
      </Row>
    </div>
  )
}
