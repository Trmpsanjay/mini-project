import React, { useEffect, useState } from "react";

const updateStatus = () => {
  const [data, setData] = useState([]);

  const callStatus = () => {
    fetch("/updateStatus", {
      method: "GET",
      headers: {
        Accept: "appllication/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())

      .then((json) => setData(json));
  };

  // Calling the function on component mount

  useEffect(() => {
    callStatus();
  }, []);

  const [inEditMode, setInEditMode] = useState({
    status: false,

    rowKey: null,
  });

  const [cmptStatus, setStatus] = useState(null);

  const onEdit = ({ id, currentStatus }) => {
    setInEditMode({
      status: true,

      rowKey: id,
    });

    setStatus(currentStatus);
  };
  const updateInventory = ({ id, newStatus }) => {
    fetch(`/updateStatus`, {
      method: "PATCH",

      body: JSON.stringify({
        complaintStatus: newStatus,
      }),

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())

      .then((json) => {
        // reset inEditMode and unit price state values

        onCancel();

        // fetch the updated data

        callStatus();
      });
  };

  /**
    
         *
    
         * @param id -The id of the product
    
         * @param newUnitPrice - The new unit price of the product
    
         */

  const onSave = ({ id, newStatus }) => {
    updateInventory({ id, newStatus });
  };

  const onCancel = () => {
    // reset the inEditMode state value

    setInEditMode({
      status: false,

      rowKey: null,
    });

    // reset the unit price state value

    setStatus(null);
  };

  return (
    <div className="container">
      <h1>Update Status</h1>

      <table>
        <thead>
          <tr>
            <th>Student Name</th>

            <th>Complaint</th>

            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>

              <td>{item.complaint}</td>

              <td>
                {inEditMode.status && inEditMode.rowKey === item.id ? (
                  <input
                    value={cmptStatus}
                    onChange={(event) => setStatus(event.target.value)}
                  />
                ) : (
                  item.complaintStatus
                )}
              </td>

              <td>
                {inEditMode.status && inEditMode.rowKey === item.id ? (
                  <React.Fragment>
                    <button
                      className={"btn-success"}
                      onClick={() =>
                        onSave({ id: item.id, newStatus: cmptStatus })
                      }
                    >
                      Save
                    </button>

                    <button
                      className={"btn-secondary"}
                      style={{ marginLeft: 8 }}
                      onClick={() => onCancel()}
                    >
                      Cancel
                    </button>
                  </React.Fragment>
                ) : (
                  <button
                    className={"btn-primary"}
                    onClick={() =>
                      onEdit({
                        id: item.id,
                        currentStatus: item.complaintStatus,
                      })
                    }
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default updateStatus;
