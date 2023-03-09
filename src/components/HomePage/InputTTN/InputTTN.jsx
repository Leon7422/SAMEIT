import { SearchArea } from './InputTTN.styled';

const InputTTN = ({ numberTTN, SetNumberTTN }) => {
  return (
    <SearchArea
      type="number"
      name="numberTTN"
      autoComplete="on"
      onChange={e => SetNumberTTN(e.currentTarget.value)}
      value={numberTTN}
    />
  );
};

export default InputTTN;
