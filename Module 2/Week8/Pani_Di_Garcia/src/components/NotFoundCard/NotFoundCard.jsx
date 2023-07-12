import { styled } from "styled-components";
import Background from "../../public/Background5.jpg";
const NotFound = () => {
  const Container = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    text-align: center;
  `;

  const Image = styled.img`
    position: relative;
    width: 100%;
  `;
  const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
    position: absolute;
    z-index: 2;
  `;
  const Title = styled.h5`
    display: flex;

    align-content: center;
    justify-content: center;
    text-align: center;
    font-size: 5rem;
    margin-top: 22rem;
  `;
  const SubTitle = styled.span`
    display: flex;
    font-size: 3rem;
  `;
  return (
    <Container>
      <Image src={Background} alt="erro" />
      <Content>
        <div>
          <Title>404</Title>
        </div>
        <div>
          <SubTitle> pagina não encontrada</SubTitle>
        </div>
      </Content>
    </Container>
  );
};

export default NotFound;
