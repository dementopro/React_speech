import React, { useEffect } from 'react'
import styled from 'styled-components'
import Card from '../../components/Card'
import { toast } from 'react-toastify'
import Say from 'react-say'

const SecondPage = () => {

  useEffect(() => {
    toast.success("Browser is talking to you!", { autoClose: 2000 });
  }, [])

  return (
    <Container>
      <Card.Container>
        <Card.Top>
          <Title>React Speech Utility</Title>
        </Card.Top>
        <Card.Content>
          <Paragraph>
            Which of the following is closest to the square root of 10.5 ?
            A. 3
            B. 4
            C. 5
            D. 8
          </Paragraph>
          <Say
            speak="I will get back to you when you solve this."
          />
        </Card.Content>
      </Card.Container>
    </Container>
  );
}

export default SecondPage

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  padding: 0.5rem;
`;

const Paragraph = styled.p`
  padding: 0.5rem;
`;
