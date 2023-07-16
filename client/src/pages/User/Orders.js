import React, { useState, useEffect } from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useAuth } from "../../Context/auth";
import moment from "moment";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();
  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/orders");
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);
  return (
    <Layout title={"Your Orders"}>
      <div className="container-flui p-3 m-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center">All Orders</h1>
            <hr
              style={{
                height: "2px",
                borderWidth: "0",
                color: "black",
                backgroundColor: "black",
              }}
            />
            {orders?.map((o, i) => {
              return (
                <div className="border shadow">
                  <table className="table">
                    <thead>
                      <tr
                        style={{
                          textAlign: "center",
                          backgroundColor: "grey",
                          color: "white",
                        }}
                      >
                        <th scope="col">
                          <h5>#</h5>
                        </th>
                        <th scope="col">
                          <h5>Status</h5>
                        </th>
                        <th scope="col">
                          <h5>Buyer</h5>
                        </th>
                        <th scope="col">
                          <h5>Date</h5>
                        </th>
                        <th scope="col">
                          <h5>Payment</h5>
                        </th>
                        <th scope="col">
                          <h5>Quantity</h5>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ textAlign: "center" }}>
                        <td>
                          <h6>{i + 1}</h6>
                        </td>
                        <td>
                          <h6>{o?.status}</h6>
                        </td>
                        <td>
                          <h6>{o?.buyer?.name}</h6>
                        </td>
                        <td>
                          <h6>{moment(o?.createAt).fromNow()}</h6>
                        </td>
                        <td>
                          <h6>{o?.payment.success ? "Success" : "Failed"}</h6>
                        </td>
                        <td>
                          <h6>{o?.products?.length}</h6>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="container">
                    {o?.products?.map((p, i) => (
                      <div className="row mb-2 p-3 card flex-row" key={p._id}>
                        <div className="col-md-4">
                          <img
                            src={`/api/v1/product/product-photo/${p._id}`}
                            className="card-img-top"
                            alt={p.name}
                            width="100px"
                            height={"100px"}
                          />
                        </div>
                        <div className="col-md-8">
                          <p>
                            <b>Name : </b>
                            {p.name}
                          </p>
                          <p>
                            <b>Description : </b>
                            {p.description.substring(0, 30)}
                          </p>
                          <p>
                            <b>Price : </b>${p.price}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
