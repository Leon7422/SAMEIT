import { StatusContainer, Bolded } from './StatusAreaTTN.styled';

const StatusAreaTTN = () => {
  return (
    <StatusContainer>
      <p> Одержано</p>
      <p>
        <Bolded>Відправлено: </Bolded>Відділення №17 (до 30 кг): вул.
        Розумовська, 29
      </p>
      <p>
        <Bolded>Отримано:</Bolded> Відділення №13 (до 30 кг): просп. Гагаріна,
        43
      </p>
    </StatusContainer>
  );
};

export default StatusAreaTTN;
