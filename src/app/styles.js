import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
`;

export const Table = styled.table`
  width 600px;
`;

export const Head = styled.thead``;

export const Body = styled.tbody``;

export const Row = styled.tr`
  background-color: ${({ significant }) => {
    switch (significant) {
      case 1: return 'rgb(200, 100, 100)';
      case 2: return 'rgb(220, 150, 150)';
      case 3: return 'rgb(240, 200, 200)';
      default: return 'rgb(255, 255, 255)';
    }
  }};
`;

export const Cell = styled.td`
  width: ${({ width }) => width + 'px'};
  border: 1px solid black;
`;

