import React from "react";


const Main = () => {
  return (
    <div className="container text-center vh-100  d-flex flex-column justify-content-center">
        <p className="fs-1 text-primary pb-4">Play around with our sentiment analyzer:</p>
        <div  className="row d-flex justify-content-center ">
            <div className="col-12 col-md-5  border-end p-4 bg-light">
                <p className="fs-4">Test with your own text</p>
                <form>
                    <textarea className="form-control"name="" id="" cols="40" rows="6"></textarea><br/>
                    <button className="btn btn-primary">Classify</button>
                </form>
            </div>
            <div className="col-12 col-md-5 p-4 bg-light" >
            <p className="fs-4">Result</p>
                 <span></span>
            </div>
        </div>
    </div>
  );
};

export default Main;
