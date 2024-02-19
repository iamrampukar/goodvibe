import HeadingContainer from "@/frontend/components/HeadingContainer";
import Image from "next/image";
import React from "react";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <div>
      <div>
        <HeadingContainer name={"Our Services"} />
        <div className={styles.mainDiv}>
          <Image
            src={"/ourservices1.jpg"}
            height={"0"}
            width={"0"}
            sizes="100vw"
            className={styles.image}
          />
          <h1>Student Visa</h1>
          <p>
            um is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of um is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of
          </p>
        </div>{" "}
        <div
          style={{
            width: "70%",
            margin: "auto",
          }}
        >
          <div>
            {" "}
            <Image
              src={"/ourservices2.jpg"}
              height={"0"}
              width={"0"}
              sizes="100vw"
              className={styles.image}
            />
            <h1>Working Visa</h1>
            <p>
              um is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of um is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of
            </p>
          </div>

          <div>
            <h3>Differernt Working Visa</h3>
            <ul>
              <li>Nursing</li>
              <li>Agriculture</li>
              <li>Food Service</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
