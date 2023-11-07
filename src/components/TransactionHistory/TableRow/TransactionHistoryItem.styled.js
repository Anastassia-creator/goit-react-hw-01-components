import styled from 'styled-components';

export const Item = styled.tr`
  background-color: #ffffff;
  text-align: center;
  transition: all 200ms ease;

  &:nth-child(even) {
    background-color: #ecf1f3;
  }

  &:hover {
    transform: scale(1.01);
  }
`
export const Transaction = styled.td`
 color: #848688;
  text-transform: capitalize;
  padding: 15px;
  border-right: 1px solid #e7e1e5;
`