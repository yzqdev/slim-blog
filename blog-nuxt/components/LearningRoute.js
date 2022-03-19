import React, { useState, useEffect } from "react";
import { Avatar, Divider, Tooltip, Tag } from "antd";
import "../public/style/components/author.css";

import CountUp from "react-countup";
import {getAllPartCountApi} from "../config/admin";

const Author = () => {
  const [all_part_count, setAll_part_count] = useState(0);
  const [all_view_count, setAll_view_count] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await getAllPartCountApi();
    console.log(`%c返回数据`,`color:red;font-size:16px;background:transparent`)
    console.log(result)
    setAll_part_count(result.all_part_count);
    setAll_view_count(result.all_view_count);
  };

  return (
    <div className="author-div comm-box">
      <div>
        {" "}
        <Avatar
          size={100}
          src="http://blogimages.jspang.com/blogtouxiang1.jpg"
        />
      </div>
      <div className="author-introduction">
        <div className="author-name">技术胖</div>
        <div>专注于WEB和移动前端开发</div>
        <div className="author-tag">
          <Tag color="magenta">光头Coder</Tag>
          <Tag color="green">12年经验</Tag>
          <Tag color="geekblue">业余讲师</Tag>
          <Tag color="blue">
            免费视频
            <CountUp end={all_part_count} /> 集
          </Tag>
          <Tag color="cyan">
            被访问
            <CountUp end={all_view_count} />次
          </Tag>
        </div>

        <Divider>社交账号</Divider>
        <Tooltip title="https://github.com/shenghy">
          <Avatar size={28} icon="github" className="account" />
        </Tooltip>
        <Tooltip title="QQ:8745662">
          <Avatar size={28} icon="qq" className="account" />
        </Tooltip>
        <Tooltip title="wechat:php100">
          <Avatar size={28} icon="wechat" className="account" />
        </Tooltip>
      </div>
    </div>
  );
};

export default Author;
