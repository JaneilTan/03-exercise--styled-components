import React, { Fragment, useState } from "react";
import Button from "./Button";

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);

  //edit description function

  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      await fetch(`${process.env.REACT_APP_API_URL}/todos/${todo.todo_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <Button
        dataToggle="modal"
        dataTarget={`#id${todo.todo_id}`}
        buttonText="Edit"
        buttonCategory="edit"        
      />
      <div
        className="modal"
        id={`id${todo.todo_id}`}
        onClick={() => setDescription(todo.description)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>

              <Button
                buttonText=""
                buttonCategory="close-modal"
                dataDismiss="modal"
                onClick={setDescription}
              />
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <Button
                buttonText="Edit"
                buttonCategory="edit"
                dataDismiss="modal"
                onClick={updateDescription}
                className="emphasis"
              />
              <Button
                buttonText="Close"
                buttonCategory="exit"
                dataDismiss="modal"
                onClick={setDescription}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;
