import { BulbOutlined, FundOutlined, HomeOutlined, MenuOutlined } from '@ant-design/icons'
import { Avatar, Button, Menu, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import icon from '../images/cryptocurrency.png'
export default function Navbar() {
    const [activemanu, setactivemanu] = useState(true)
    const [screenSize, setscreenSize] = useState(null)
    useEffect(()=>{
        const handleResize = ()=> setscreenSize(window.innerWidth);
        window.addEventListener('resize',handleResize)
        handleResize()
        return ()=> window.addEventListener('resize',handleResize)
    },[])
    useEffect(()=>{
        if(screenSize<768){
            setactivemanu(false)
        }
        else{
            setactivemanu(true)
        }
    },[screenSize])
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} size='large'/>
            <Typography.Title level={2} className='logo'>
                <Link to='/'>crypto</Link>
            </Typography.Title>
            <Button className='menu-control-container' onClick={()=> setactivemanu(!activemanu)}>
                <MenuOutlined/>
            </Button>
        </div>
        {activemanu && 
        <Menu theme='dark'>
            <Menu.Item icon={<HomeOutlined/>}>
                <Link to="/">Home</Link>
            </Menu.Item> 
            <Menu.Item icon={<FundOutlined/>}>
                <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            </Menu.Item> 
             
            <Menu.Item icon={<BulbOutlined/>}>
                <Link to="/news">News</Link>
            </Menu.Item> 
             
        </Menu>
        
        }
        
    </div>
  )
}
