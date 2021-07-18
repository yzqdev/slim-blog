import React ,{useState,useEffect} from 'react'
import Router from 'next/router'
import Link from 'next/link'

import {Row,Col, Menu } from 'antd'
import axios from 'axios'
import  servicePath  from '../config/apiUrl'
import {HomeOutlined, MessageOutlined, YoutubeOutlined} from "@ant-design/icons";

const Header = () => {

    return (

            <div className="header">
                <div className="header-center">
                    <Row type="flex" justify="center">
                        <Col  xs={24} sm={24} md={13} >
                            <span className="header-logo">
                                <Link href={{pathname:'/'}}>
                                    <a> 技术胖</a>
                                </Link>

                            </span>
                            <span className="header-txt">专注前端开发,每年100集免费视频。</span>
                        </Col>

                        <Col className="memu-div" xs={0} sm={0} md={11} >
                           <Row type='flex'>
                               <Col xs={0} sm={0} md={6}  >
                                    <Link  href={{pathname:'/'}}>
                                        <a><HomeOutlined /> 博客首页</a>
                                    </Link>
                               </Col>
                               <Col xs={0} sm={0} md={6}  >
                                    <Link  href={{pathname:'/list',query:{id:1}}}>
                                        <a><YoutubeOutlined /> 视频教程</a>
                                    </Link>
                               </Col>
                               <Col xs={0} sm={0} md={6}  >
                                    <Link  href={{pathname:'/bibidao'}}>
                                        <a><MessageOutlined /> 逼逼叨</a>
                                    </Link>
                               </Col>
                           </Row>
                        </Col>
                    </Row>
                </div>
            </div>

    )
}

export default Header
