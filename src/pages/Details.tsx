/** @jsxImportSource @emotion/react */
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { detailstyle } from "../styles";
import { useEffect } from "react";
import { GET_DETAILS } from "../hooks/useGetDetails";
import { Numbers } from "../context/interfaces";
import { useLazyQuery, useMutation } from "@apollo/client";
import { DELETE_CONTACT } from "../hooks/useDeleteContact";
const Details = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [deleteContact] = useMutation(DELETE_CONTACT);
  const [getDetails, { loading, error, data }] = useLazyQuery(GET_DETAILS);
  const handleDelete = (id: number) => {
    deleteContact({
      variables: { id },
      onCompleted: () => {
        navigate("/", { replace: true });
      },
    });
  };
  useEffect(() => {
    let id = Number(params.id);
    getDetails({
      variables: { id },
      onCompleted: (data) => {
        if (data["contact_by_pk"] === null) {
          navigate("/", { replace: true });
        }
      },
    });
  }, []);
  useEffect(() => {}, [loading, error, data]);
  return (
    <div css={detailstyle}>
      {!loading && data !== undefined ? (
        <div className="details-container">
          {/* avatar */}
          <div className="avatar-contact">
            <img
              src={`http://placeimg.com/50/50/people`}
              className="icons search-icon"
              alt="search-icon"
            />
          </div>
          {/* name */}
          <div className="deskripsi-contanct">
            <div className="image-contact">
              <img
                src={require("../assets/icons/usersnoround.svg").default}
                className="icon addcontact-icon"
                alt="addcontact-icon"
              />
            </div>
            <div className="deskripsi">
              <p>
                {data["contact_by_pk"]["first_name"]}{" "}
                {data["contact_by_pk"]["last_name"]}
              </p>
              <p>Name</p>
            </div>
          </div>
          {/* nuumber */}
          {data["contact_by_pk"].phones.length ? (
            data["contact_by_pk"].phones.map((v: Numbers, i: number) => (
              <div className="deskripsi-contanct-number" key={i}>
                <div className="image-contact">
                  <img
                    src={require("../assets/icons/telp.svg").default}
                    className="icon addcontact-icon"
                    alt="addcontact-icon"
                  />
                </div>
                <div className="deskripsi">
                  <p>{v.number}</p>
                  <p>Number</p>
                </div>
              </div>
            ))
          ) : (
            <div>Tidak Ada Nomor</div>
          )}

          <button className="btn btn-edit">Edit</button>
          <button
            className="btn btn-delete"
            onClick={() => handleDelete(data["contact_by_pk"].id)}
          >
            Delete
          </button>
        </div>
      ) : (
        <div>Loading ...........</div>
      )}
    </div>
  );
};

export default Details;
