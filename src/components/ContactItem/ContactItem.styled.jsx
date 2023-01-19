import styled from 'styled-components';

export const ContactRow = styled.li`
  width: 100%;
  margin-right: ${props => props.theme.space[5]}px;
  margin-bottom: 20px;
  margin-left: 20px;
`;

export const Text = styled.span`
  margin-right: ${props => props.theme.space[5]}px;
  margin-bottom: ${props => props.theme.space[5]}px;
  font-size: 20px;
`;
