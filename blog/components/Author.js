import React,{useState ,useEffect} from 'react'
import {Avatar,Divider,Tooltip ,Tag} from 'antd'

import  servicePath  from '../config/apiUrl'
import axios from 'axios'
import CountUp from 'react-countup'
import {CalendarOutlined, GithubOutlined, QqOutlined, WechatOutlined} from "@ant-design/icons";
import {getAllPartCountApi} from "../config/admin";

const Author =()=>{



    const [ all_part_count , setAll_part_count ] = useState(0);
    const [ all_view_count , setAll_view_count ] = useState( 0);

    useEffect(()=>{

        fetchData()

    },[])


    const fetchData = async ()=>{
        const result = await getAllPartCountApi()
          setAll_part_count(result.all_part_count)
          setAll_view_count(result.all_view_count)
    }

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="http://blogimages.jspang.com/blogtouxiang1.jpg"  /></div>
            <div className="author-introduction">
                <div className="author-name">技术胖</div>
                <div>专注于WEB和移动前端开发</div>
                <div className="author-tag">
                <Tag color="magenta">光头Coder</Tag>
                <Tag color="green">12年经验</Tag>
                <Tag color="geekblue">业余讲师</Tag>
                <Tag color="blue">免费视频<CountUp end={all_part_count} /> 集</Tag>
                <Tag color="cyan">被访问<CountUp end={all_view_count} />次</Tag>
                </div>

                <Divider>社交账号</Divider>
                <Tooltip title="B站 : https://space.bilibili.com/165659472">
                    <a href="https://space.bilibili.com/165659472" target="_blank">
                    <Avatar size={28} src="http://newimg.jspang.com/bilibiliIcon1.png" className="account"  />
                    </a>
                </Tooltip>
                <Tooltip title="https://github.com/shenghy">
                    <a href="https://github.com/shenghy" target="_blank">
                    <Avatar size={28} icon={<GithubOutlined />} className="account"  />
                    </a>
                </Tooltip>
                <Tooltip title="QQ:8745662">
                    <Avatar size={28} icon={<QqOutlined />}  className="account" />
                </Tooltip>
                <Tooltip title="wechat:php100">
                <Avatar size={28} icon={<WechatOutlined />}  className="account"  />
                </Tooltip>

            </div>
        </div>
    )

}



export default Author
