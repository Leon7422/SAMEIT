import { SearchButton, TextBtn } from './SubmitButtonTTN.styled';

const SubmitButtonTTN = ({ numberTTN }) => {
  const getInfo = () => {
    console.log(numberTTN);
  };

  return (
    <SearchButton type="submit" onClick={getInfo}>
      <TextBtn>Search</TextBtn>
    </SearchButton>
  );
};

export default SubmitButtonTTN;
