import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { Row, Col, Tag, List, BackTop, Spin, Affix, Card } from "antd";
import axios from "axios";
import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import Rightmi from "../components/Rightmi";
import StudyLine from "../components/StudyLine";

import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import servicePath from "../config/apiUrl";
import CountUp from "react-countup";
import {
  CalendarOutlined,
  FileOutlined,
  FireOutlined,
  FolderOutlined,
} from "@ant-design/icons";
import { getArticleListApi } from "../config/admin";

const Home = (res) => {
  const [mylist, setMylist] = useState(res.list);
  const [topList, setTopList] = useState(res.topList);
  const [type, setType] = useState(res.type);
  const [bibidaoList, setBibidaoList] = useState(res.bibidaoList);
  const [loading, setLoading] = useState(false);

  const renderer = new marked.Renderer();
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    xhtml: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    },
  });

  const goLoading = () => {
    setLoading(true);
  };

  return (
    <>
      <Head>
        <title>首页 | 技术胖-胜洪宇关注web前端技术-前端免费视频第一博客</title>
        <meta
          name="description"
          content="首页 | 技术胖-胜洪宇关注web前端技术-前端免费视频第一博客"
        />
        <link rel="icon" href="../static/favicon.ico" type="image/x-icon" />
      </Head>
      <Affix offsetTop={0}>
        <Header />
      </Affix>

      <Row className="comm-main" type="flex" justify="center">
        <Col xs={24} sm={24} md={18}>
          <div className="comm-left">
            <List
              itemLayout="vertical"
              dataSource={topList}
              renderItem={(item) => (
                <List.Item>
                  <Spin spinning={loading}>
                    <div className="list-title" onClick={goLoading}>
                      <Link
                        href={{ pathname: "/detailed", query: { id: item.id } }}
                      >
                        <a>{item.title}</a>
                      </Link>
                    </div>
                    <div className="list-icon">
                      <span>
                        <Tag color="#f50">置顶</Tag>
                      </span>
                      <span>
                        <CalendarOutlined /> {item.add_time}
                      </span>
                      <span>
                        <FolderOutlined />
                        {item.type_name}
                      </span>
                      <span>
                        <FireOutlined />
                        <CountUp end={item.view_count} />人
                      </span>
                    </div>
                    <div
                      className="list-context"
                      dangerouslySetInnerHTML={{ __html: item.introduce_html }}
                    ></div>
                    <div className="list-go">
                      <FileOutlined /> &nbsp;
                      <span onClick={goLoading}>
                        <Link
                          href={{
                            pathname: "/detailed",
                            query: { id: item.id },
                          }}
                        >
                          <a>查看全文 </a>
                        </Link>
                      </span>
                    </div>
                  </Spin>
                </List.Item>
              )}
            />
          </div>

          <Row>
            <Col xs={0} sm={0} md={24}>
              <div className="comm-left">
                <List
                  header={
                    <div className="bibidao-title">
                      <div className="list-header left">大胖逼逼叨</div>
                      <div className="list-header right">
                        <Link href={{ pathname: "/bibidao" }}>
                          <a>更多 </a>
                        </Link>
                      </div>
                    </div>
                  }
                  dataSource={bibidaoList}
                  grid={{
                    gutter: 10,
                    sm: 0,
                    md: 4,
                  }}
                  renderItem={(item) => (
                    <List.Item>
                      <a href={item.url} target="_blank">
                        <img src={item.image} className="bbd-img" />
                      </a>
                      <div className="bbd-title">
                        <a href={item.url} target="_blank">
                          <span className="bbd-zi">{item.title} </span>
                        </a>
                      </div>
                    </List.Item>
                  )}
                />
              </div>
            </Col>
          </Row>

          <div className="comm-left">
            <List
              header={<div className="list-header">最新日志</div>}
              itemLayout="vertical"
              dataSource={mylist}
              renderItem={(item) => (
                <List.Item>
                  <Spin spinning={loading}>
                    <div className="list-title" onClick={goLoading}>
                      <Link
                        href={{ pathname: "/detailed", query: { id: item.id } }}
                      >
                        <a>{item.title}</a>
                      </Link>
                    </div>
                    <div className="list-icon">
                      <span>
                        <CalendarOutlined />
                        {item.addTime}
                      </span>
                      <span>
                        <FolderOutlined />
                        {item.typeName}
                      </span>
                      <span>
                        {" "}
                        <FireOutlined />
                        <CountUp end={item.view_count} />人
                      </span>
                    </div>
                    <div
                      className="list-context"
                      dangerouslySetInnerHTML={{ __html: item.introduce_html }}
                    ></div>
                    <div className="list-go">
                      <FileOutlined />
                      &nbsp;
                      <span onClick={goLoading}>
                        <Link
                          href={{
                            pathname: "/detailed",
                            query: { id: item.id },
                          }}
                        >
                          <a>查看全文 </a>
                        </Link>
                      </span>
                    </div>
                  </Spin>
                </List.Item>
              )}
            />
          </div>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={6}>
          <Author />
          <Affix offsetTop={60}>
            <Rightmi />
            <StudyLine />
            <Advert />
          </Affix>
        </Col>
      </Row>

      <Footer />
      <BackTop />
    </>
  );
};

export async function getStaticProps() {
  let date = new Date();

  let month = date.getMonth();
  let day = date.getDate();

  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let time = month + "/" + day + "/" + hour + ":" + minute + ":" + second;

  console.log("----->" + time + ":Visit the Index page");

  const data = await getArticleListApi();

  return {
    props: {
      res: data,
    },
  };
}

export default Home;
