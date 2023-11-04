import styled from 'styled-components';

export const Friend = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
  width: 100%;
  background-color: #f0f0f0;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 300ms ease-in;

  &:hover {
    transform: scale(1.02);
  }
`;

export const StatusIndicator = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.$isOnline ? '#50AD53' : '#FF4F55')};
  margin-right: 10px;
`;

export const Avatar = styled.img`
  margin-right: 22px;
`;

export const Name = styled.p`
  font-size: 24px;
`;