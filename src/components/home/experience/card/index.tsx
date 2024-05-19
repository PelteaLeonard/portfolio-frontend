import { Container, Date, Paragraph, Title } from "./styled";

interface CardProps {
  title: string;
  date: string;
  responsibilities: string[];
  arrow: string;
}

function Card(props: CardProps) {
  const { title, date, responsibilities, arrow } = props;

  return (
    <Container arrow={arrow}>
      <Title>{title}</Title>
      <Date>{date}</Date>
      {responsibilities.map((responsibilities, index) => (
        <Paragraph key={index}>{responsibilities} </Paragraph>
      ))}
    </Container>
  );
}
export default Card;
