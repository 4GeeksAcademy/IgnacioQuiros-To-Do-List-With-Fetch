import React from "react";

const NewTask = ({ description, index, eraseTask }) => {
    return (
        (description === "") ?
            null
            :
            <div className="row align-items-center">
                <p className="index col-1 fs-2 text-secondary m-0 me-2 p-0 justify-content-center 
                align-items-center">
                    {index}
                </p>

                <div className="col-10 d-flex justify-content-between border border-5 bg-light 
                my-3 pe-0 pe-sm-2 description-container">
                    <p className="fs-4 px-sm-3 px-0 pt-3 description">{description}</p>
                    <button className="me-1 me-sm-4 border-0 bg-light fs-1 buttonMine" 
                    onClick={eraseTask}>X</button>
                </div>
            </div>
    );
}

export default NewTask;