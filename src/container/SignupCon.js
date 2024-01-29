import { Button, Form, Input, message } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCreateUserMutation } from "../store/store";
import { userLogin } from "../store/mutation/userSlice";
import { useNavigate } from "react-router-dom/dist";
const onFinish = (data, dispatch, createUser) => {
  if (data?.email) {
    createUser(data);
  } else {
    dispatch(userLogin(data));
  }
};
const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 24 },
};
const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, userToken, loading, checkAuthLoading, isAuthenticated } =
    useSelector((state) => state.user);
  useEffect(() => {
if(user&&isAuthenticated){
  navigate('/')
}

  }, [user]);
  const [createUser, createUserResponseInfo] = useCreateUserMutation();
  useEffect(() => {
    if (createUserResponseInfo?.isSuccess) {
      message.success("User Created..!!");
      setAction(!action);
    }
    if (createUserResponseInfo?.isError) {
      message.error("User Not Created..!!");
    }
  }, [createUserResponseInfo]);
  const [action, setAction] = useState(true);
  const datas = null;
  const [form] = Form.useForm();

  return (
    <>
      {loading ? (
        <div style={{ height: "300px"}}>Loading</div>
      ) : (
        <Form
          form={form}
          name="dynamic_form_nest_item"
          onFinish={(data) => {
            onFinish(data, dispatch, createUser);
          }}
          // autoComplete="off"
          {...layout}
          initialValues={datas}
          className="container"
          style={{
            backgroundColor: "rgb(28,27,27)",
            width:"80%",
            padding: "20px",
            color: "white",
            borderRadius: "20px",
          }}
        >
          <div className="d-flex flex-column align-items-center">
            <div className="h4" style={{color:"white"}}>{action === "Login" ? "Login" : "Sign Up"}</div>
            <div className="underline"></div>
          </div>
          <div>
            {action ? (
              <div></div>
            ) : (
              <div>
                <Form.Item name={["name"]} className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </Form.Item>
                <Form.Item name={["phonenumber"]} className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mobile Number"
                  />
                </Form.Item>
                <Form.Item name={["email"]} className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Id"
                  />
                </Form.Item>
                <Form.Item name={["access_for"]} className="mb-3">
                  <select className="form-select" required>
                    <option value="" disabled selected>
                      Select Service
                    </option>
                    <option value="Education Guidance">
                      Education Guidance
                    </option>
                    <option value="Career Guidance">Career Guidance</option>
                    <option value="Micro Business Guidance">
                      Micro Business Guidance
                    </option>
                    <option value="Spiritual Guidance">
                      Spiritual Guidance
                    </option>
                  </select>
                </Form.Item>
              </div>
            )}
            <Form.Item name={["username"]} className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="UserName"
              />
            </Form.Item>
            <Form.Item name={["password"]} className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </Form.Item>
          </div>
          {/* {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="mb-3">
          Forgot Password?<span className="ml-1">Click Here</span>
        </div>
      )} */}

          <div className="d-flex justify-content-between">
            <Button
              type="primary"
              htmlType="submit"
              className={"btn btn-primary"}
            >
              {action ? <>Login</> : <>Sign Up</>}
            </Button>
            <div
              className={"btn btn-secondary"}
              onClick={() => setAction(!action)}
            >
              {action ? <>Dont Have Account</> : <>Have Account</>}
            </div>
          </div>
        </Form>
      )}
    </>
  );
};

export default SignUp;
