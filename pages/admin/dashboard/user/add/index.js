import DashboardSidebar from "@/frontend/components/DashboardSidebar";
import Loader from "@/frontend/components/Loader/Loader";
import { Providers } from "@/frontend/services/provider";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";
import styles from "../../../../../styles/CarouselAdd.module.css";
import { useRouter } from "next/router";
import { useCreateUserMutation } from "@/frontend/services/api";
import DashboardNavbar from "@/frontend/components/DashboardNavbar";

const User = () => {
  const [createUser, { isError, isLoading, isSuccess }] =
  useCreateUserMutation()
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = userData;
  const router = useRouter();
  useEffect(() => {
    if (isError) {
      toast.error(isError);
    }
    if (isSuccess) {
      toast.success("Created Successfully");
      router.push("/admin/dashboard/user");
    }
  });
  const submitHandler = (e) => {
    e.preventDefault();
    const data = { username, email, password };
    createUser(data);
  };

  const onChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Toaster />
          <div className={styles.card}>
            <form onSubmit={submitHandler}>
              <h5 style={{ textAlign: "center", padding: "1rem" }}>
                Create User
              </h5>

              <div>
                <Form.Control
                  type="text"
                  placeholder="Enter Username"
                  name="username"
                  value={username}
                  onChange={onChange}
                />
              </div>

              <div>
                <Form.Control
                  type="emaile"
                  placeholder="Enter Email"
                  name="email"
                  value={email}
                  className="my-3"
                  onChange={onChange}
                />
              </div>

              <div>
                <Form.Control
                  type="password"
                  placeholder="Enter Password "
                  name="password"
                  value={password}
                  onChange={onChange}
                  className="my-3"
                />
              </div>

              <Button
                id="createProductBtn"
                type="submit"
                disabled={isLoading ? true : false}
                style={{ width: "100%", marginTop: "2rem" }}
              >
                submit
              </Button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default User;
User.getLayout = function PageLayout(page) {
  return (
    <>
      <Providers>
      <DashboardNavbar/>
        <div style={{ display: "flex" }}>
          <DashboardSidebar />
          {page}
        </div>
      </Providers>
    </>
  );
};
