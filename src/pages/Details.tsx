/** @jsxImportSource @emotion/react */
import { useNavigate, useParams } from "react-router-dom";
import { detailstyle } from "../styles";
import { useEffect } from "react";
import { GET_DETAILS } from "../hooks/useGetDetails";
import { Numbers } from "../context/interfaces";
import { useLazyQuery } from "@apollo/client";
import useContact from "../context/ContactContext";

const Details = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { FillEditContact } = useContact();
  const [getDetails, { loading, error, data }] = useLazyQuery(GET_DETAILS);
  useEffect(() => {
    let id = Number(params.id);
    getDetails({
      variables: { id },
      onCompleted: (data) => {
        if (data["contact_by_pk"] === null) {
          navigate("/notfound", { replace: true });
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

          <button
            onClick={() => {
              FillEditContact(data["contact_by_pk"]);
            }}
            className="btn btn-edit"
          >
            Edit
          </button>
        </div>
      ) : (
        <div>Loading ...........</div>
      )}
    </div>
  );
};

export default Details;
