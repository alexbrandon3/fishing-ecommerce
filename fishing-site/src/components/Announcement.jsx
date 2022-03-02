import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: rgb(101, 10, 163);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Handcrafted Swimbaits || Custom Paint Jobs</Container>;
};

export default Announcement;
