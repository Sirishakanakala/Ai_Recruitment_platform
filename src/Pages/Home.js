  import React from "react";
import { Container,  Segment } from "semantic-ui-react";

export default function Home() {

  return (
    <Container
      textAlign="center"
      style={{
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{fontSize: '3rem'}}>
        AI Interviewer{" "}
        <span
          className="badge"
          style={{ backgroundColor: "rgb(117, 101, 136)", fontSize: "1rem" }}
        >
          New
        </span>{" "}
      </h1>
      <Segment textAlign="left" style={{ maxWidth: "600px", margin: "2rem" }}>
        <p>
          {" "}
          Welcome to AI Interviewer! 🌟 Your go-to platform for AI-driven
          recruitment. Seamlessly authenticate users, manage profiles, and
          navigate with ease through our intuitive side menu. Engage in natural
          conversation with our chat interface and gain insights with dynamic
          agent workflow visualization. Powered by React and integrated with
          MongoDB, our solution ensures a user-friendly experience from start to
          finish.
        </p>
      </Segment>

      {/* image scroll effect */}
      <div
    id="carouselExampleInterval"
    className="carousel slide"
    data-bs-ride="carousel"
    style={{ width: "300px" }}
  >
    <div className="carousel-inner">
      <div
        className="carousel-item active"
        data-bs-interval="10000"
        style={{ backgroundColor: "transparent" }}
      >
        <img
          src="/images/b3.png"
          className="d-block w-100"
          alt="...."   
        />
      </div>
      <div
        className="carousel-item"
        data-bs-interval="2000"
        style={{ backgroundColor: "transparent" }}
      >
        <img
          src="/images/b2.png"
          className="d-block w-100"
          alt="...."
          
        />
      </div>
      <div
        className="carousel-item"
        style={{ backgroundColor: "transparent" }}
      >
        <img
          src="/images/b1.png"
          className="d-block w-100"
          alt="...."
          
        />
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleInterval"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleInterval"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>

      {/* image scroll effect */}
      {/* updates section */}
      <div className="accordion mt-4 " id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Updates
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: "#100b16",
                color: "white",
                border: "none",
              }}
            >
              Implemented a profile management portal allowing users to
              effortlessly create, update, and delete files with ease.
            </div>
          </div>
        </div>
        <div className="accordion-item ">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              What's Coming Next?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: "#100b16",
                color: "white",
                border: "none",
              }}
            >
              Currently working on developing a comprehensive recruitment
              process flowchart to visualize the entire recruitment journey,
              providing updates on its progress.
            </div>
          </div>
        </div>
      </div>
      {/* updates section */}
     
      
    </Container>
  );
}
