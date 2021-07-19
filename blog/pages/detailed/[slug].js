import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Row, Col, Breadcrumb, BackTop, Skeleton } from "antd";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import Author from "../../components/Author";
import Advert from "../../components/Advert";
import Footer from "../../components/Footer";
import Rightmi from "../../components/Rightmi";

import "markdown-navbar/dist/navbar.css";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import Tocify from "../../components/tocify.tsx";
import {
  CalendarOutlined,
  FireOutlined,
  FolderOutlined,
} from "@ant-design/icons";
import { getArticleByIdApi } from "../../config/admin";

export default function Detailed(props) {
  let router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      myFuction();
    }, 100);
  }, []);

  const [html, setHtml] = useState(props.article_content);
  const [tocify, setTocify] = useState(new Tocify());
  const [loading, setLoading] = useState(true);

  let id = router.query.slug;
  console.log(id);
  console.log(`%c得到id`, `color:red;font-size:16px;background:transparent`);

  const myFuction = async () => {
    console.log(html);
    console.log(
      `%cmark进入`,
      `color:red;font-size:16px;background:transparent`
    );
    let newhtml = await marked(html);
    //setHtml(newhtml)
    setLoading(false);
    //console.log(tocify.render())
  };

  const renderer = new marked.Renderer();
  renderer.heading = function (text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };

  marked.setOptions({
    renderer: renderer,

    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,

    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    },
  });

  return (
    <>
      <Head>
        <title>技术胖-{props.title}</title>
        <meta name="description" content={props.title}></meta>
        <link rel="icon" href="../../public/favicon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={18}>
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item>
                  <a href="/">首页</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>{props.typeName}</Breadcrumb.Item>
                <Breadcrumb.Item> {props.title}</Breadcrumb.Item>
              </Breadcrumb>
            </div>

            <div>
              <div className="detailed-title">{props.title}</div>

              <div className="list-icon center">
                <span>
                  <CalendarOutlined /> {props.addTime}
                </span>
                <span>
                  <FolderOutlined /> {props.typeName}
                </span>
                <span>
                  <FireOutlined /> {props.view_count}
                </span>
              </div>
              <div
                className="detailed-content"
                dangerouslySetInnerHTML={{ __html: props.introduce_html }}
              ></div>

              <div
                className="detailed-content"
                dangerouslySetInnerHTML={{ __html: html }}
              ></div>
            </div>
          </div>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={6}>
          <Author />
          <Advert />
          <Rightmi />

          <div>
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
              <Skeleton loading={loading} active paragraph={{ rows: 6 }}>
                <div className="toc-list">{tocify && tocify.render()}</div>
              </Skeleton>
            </div>
          </div>
        </Col>
      </Row>
      <Footer />
      <BackTop />
    </>
  );
  //{tocify && tocify.render()}
}

Detailed.getInitialProps = async (context) => {
  let id = context.query.slug;
  let article;
  if (id) {
    getArticleByIdApi(id).then((data) => {
      if (data.data == "sss") {
        return { article_content: "id ERROR" };
      } else {
        article = data.data;
      }
    });
  }
  return {
    props: {
      data: article,
    },
  };
};
//   let date = new Date();
//   let month = date.getMonth();
//   let day = date.getDate();
//
//   let hour = date.getHours();
//   let minute = date.getMinutes();
//   let second = date.getSeconds();
//   let time = month + "/" + day + "/" + hour + ":" + minute + ":" + second;
//
//   // console.log(
//   //   "----->" + time + ":Visit the details page,parameter=" + context.query.id
//   // );
//   //把ID强制转换成数字
// console.log(context)
//   console.log(`%c这是router`,`color:red;font-size:16px;background:transparent`)
//   let id = parseInt(context.params.id);
//   if (id) {
//     const data = getArticleByIdApi(id);
//     if (data.data == "sss") {
//       return { article_content: "id ERROR" };
//     } else {
//       return { data: data.data };
//     }
//   }
//   return{
//   props:{
//     data:"sdfdsfdsf"
//   }
//   }
// }
