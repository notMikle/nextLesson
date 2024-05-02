import { PropsWithChildren } from "react";
import styled from "styled-components";

type PropsType = {
  name: string;
};

export const Card = (props: PropsWithChildren<PropsType>) => {
  const { children, name } = props;

  return (
    <CardBlock>
      <Name>{name}</Name>
      {children}
    </CardBlock>
  );
};

const CardBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 2px solid #e5a72a;
  box-shadow: 0 2px 3px 1px rgba(229, 167, 42, 0.7);
  border-radius: 15px;
`;

const Name = styled.div`
  font-weight: 600;
  font-size: 24px;
`;
