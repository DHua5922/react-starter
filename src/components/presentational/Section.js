import tw, { styled } from "twin.macro";

const Container = styled.div`
  font-size: 2rem;
  ${tw`font-bold`}
`;

const Section = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default Section;
