/** @jsxImportSource @emotion/react */
import { ListContact } from "../components";
import useContact from "../context/ContactContext";
import { Contact } from "../context/interfaces";
import { homestyle } from "../styles";

const Favorite = () => {
  const { favorite } = useContact();
  return (
    <>
      <div css={homestyle}>
        {favorite.length ? (
          favorite.map((value: Contact, index: number, array: Contact[]) => (
            <ListContact key={index} data={value} />
          ))
        ) : (
          <div>Data Empty</div>
        )}
      </div>
    </>
  );
};

export default Favorite;
