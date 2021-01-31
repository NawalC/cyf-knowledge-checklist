import React, { useState, useEffect } from "react";
import AddForm from "./AddForm";
import { useParams } from "react-router-dom";
import { skills } from "./consts/skillsConst";

export default function MentorEditLearningObj() {
  let { skill } = useParams();
  const [learningObj, setLearningObj] = useState([]);
  const [updateLO, setUpdateLO] = useState("");
  const [text, setText] = useState("");

  const token = window.localStorage.getItem("token");

  const getLearningObj = () => {
    fetch(`/api/learningobjectives/${skill}`, { headers: { token } })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          throw data;
        }

        setLearningObj(data);
      });
  };
  useEffect(() => {
    getLearningObj();
  }, [skill]);

  const deleteLearningOb = (LearningID) => {
    fetch(`/api/learningobjectives/${LearningID}`, {
      method: "DELETE",
      headers: {
        token,
      },
    }).then(() => {
      let newData = learningObj.filter((p) => p.id !== LearningID);
      setLearningObj(newData);
    });
  };

  const updateLearningObj = (newDescription, LearningID) => {
    if (newDescription) {
      fetch(`/api/learningobjectives/${LearningID}`, {
        method: "PUT",
        body: JSON.stringify({
          description: newDescription,
        }),
        headers: {
          "Content-Type": "application/json",
          token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUpdateLO("");
          getLearningObj();
        });
    }
    return;
  };

  const handleEdit = (description, id) => {
    setUpdateLO(id);
    setText(description);
  };
  const cancelUpdate = (id) => {
    setUpdateLO("");
    getLearningObj();
  };

  return (
    <div className="lo-wrapper">
      <h2 className="skill-name"></h2>
      <div className="lo-style ">
        <ul className="p-0">
          {learningObj.map(({ description, id }, index) => {
            return (
              <li key={index}>
                <div className="edit-delete-buttons">
                  {updateLO == id ? (
                    <textarea
                      className="app-message__input"
                      onChange={(e) => setText(e.target.value)}
                      value={text}
                    ></textarea>
                  ) : (
                    <>
                      <p className="description">{description}</p>
                      <a
                        onClick={() => handleEdit(description, id)}
                        className="edit-btn icon-edit crud"
                        id={id}
                      >
                        <img
                          className="edit-btn crud"
                          src="https://i.ibb.co/nrkVG9b/edit-1.png"
                          alt="edit"
                          border="0"
                        ></img>
                      </a>
                    </>
                  )}
                  <span className="update-cancel-btn">
                    {updateLO == id ? (
                      <>
                        <button
                          onClick={() => updateLearningObj(text, id)}
                          className="submit-btn update-btn"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => cancelUpdate("")}
                          className="submit-btn cancel-btn "
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <a
                        onClick={() => deleteLearningOb(id)}
                        className="delete-btn icon-edit crud"
                      >
                        <img
                          src="https://i.ibb.co/fd1dg7H/delete-1.png"
                          alt="delete "
                          border="0"
                        ></img>
                      </a>
                    )}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="add-btn-container">
          <AddForm getLearningObj={getLearningObj} />
        </div>
      </div>
    </div>
  );
}
