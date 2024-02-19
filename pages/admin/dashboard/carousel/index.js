import DashboardSidebar from "@/frontend/components/DashboardSidebar";
import { useDeleteCarouselMutation,useGetHomeCarouselQuery } from "@/frontend/services/api";
import { Providers } from "@/frontend/services/provider";
import Table from "react-bootstrap/Table";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import React, { useEffect } from "react";
import Link from "next/link";
import Loader from "@/frontend/components/Loader/Loader";
import { toast, Toaster } from "react-hot-toast";
import DashboardNavbar from "@/frontend/components/DashboardNavbar";

const Carousel = () => {
  const { data, isLoading } = useGetHomeCarouselQuery();
  const [deleteCarousel, { isSuccess, isError }] = useDeleteCarouselMutation();
  useEffect(() => {
    if (isSuccess) {
      toast.success("Deleted Successfully");
    }
  }, [isSuccess, toast]);

  {
    console.log(data);
  }
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Toaster />
          <div
            style={{
              width: "100%",
              // margin: "auto",
              // margin
            }}
          >
            <h5>All Carousel List </h5>
            <Table responsive striped>
              <thead>
                <tr>
                  <th>Id</th>
                  <th colSpan={1}>ImageUrl</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data?.carousel?.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>{item._id}</td>
                      {item?.videos?.map((item) => {
                        return <td key={item.url}>{item.url}</td>;
                      })}
                      <td>
                        <div
                          style={{
                            display: "flex",
                            padding: "1rem",
                            gap: "0.5rem",
                          }}
                        >
                          {console.log(data)}
                          <Link
                            href={`/admin/dashboard/carousel/${item?._id}`}
                            style={{ textDecoration: "none" }}
                          >
                            <span>
                              <AiFillEdit color="" />
                              Edit
                            </span>
                          </Link>
                          <Link
                            href={"/"}
                            style={{ textDecoration: "none", color: "red" }}
                            onClick={(e) => {
                              e.preventDefault();
                              deleteCarousel(item?._id);
                            }}
                          >
                            {" "}
                            <AiFillDelete />
                            Delete
                            {console.log(isError)}
                          </Link>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </>
      )}
    </>
  );
};

export default Carousel;
Carousel.getLayout = function PageLayout(page) {
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
