import React, { useState, useEffect, createContext } from "react";
import "antd/dist/antd.css";
import "../static/css/Login.css";
import { Card, Input, Button, Spin, message } from "antd";
import { KeyOutlined, UserOutlined } from "@ant-design/icons";
import { adminLogin, checkToken } from "@/utils/admin";

const openIdContext = createContext();

function Login(props) {
  const [userName, setUserName] = useState("yzq");
  const [password, setPassword] = useState("123456");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //检查是否已经登录
    let token = localStorage.getItem("token");
    let dataProps = { token: token };
    console.log(token);

    checkToken().then((res) => {
      console.log(res);
      if (res.data) {
        message.success("已经登录");
        console.log(props)
        props.history.push("/index");
      }
    });
  }, []);

  const checkLogin = () => {
    setIsLoading(true);

    if (!userName) {
      message.error("用户名不能为空");
      return false;
    } else if (!password) {
      message.error("密码不能为空");
      return false;
    }
    let dataProps = {
      userName: userName,
      password: password,
    };
    adminLogin(dataProps).then((res) => {
      console.log(res);
      setIsLoading(false);
      if (res.data) {
        localStorage.setItem("token", res.data);
        props.history.push("/index");
      } else {
        message.error("用户名密码错误");
      }
    });

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="login-div">
      <Spin tip="Loading..." spinning={isLoading}>
        <Card
          title="JSPang Blog  System"
          bordered={true}
          style={{ width: 400 }}
        >
          <Input
            id="userName"
            size="large"
            placeholder="Enter your userName"
            prefix={<UserOutlined twoToneColor="00000033" />}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <br />
          <br />
          <Input.Password
            id="password"
            size="large"
            placeholder="Enter your password"
            prefix={<KeyOutlined />}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />
          <Button type="primary" size="large" block onClick={checkLogin}>
            {" "}
            Login in{" "}
          </Button>
        </Card>
      </Spin>
    </div>
  );
}


export default Login


