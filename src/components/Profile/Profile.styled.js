import styled from 'styled-components';

export const ProfileWrapper = styled.div `
    width: 300px;
    margin: 50px auto;
    border: 1px solid #212121;
    border-radius: 10px;
`
export const Description = styled.div `
    text-align: center;
`
export const Avatar = styled.img `
    display: flex;
    margin: 10px auto;
    padding: 5px;
    height: 150px;
    border-radius: 50%;

`
export const Name = styled.p `
    font-size: 20px;
    font-weight: bold;
`
export const Tag = styled.p `
    font-size: 15px;
    color: grey;
`
export const Location = styled.p `
    font-size: 15px;
    color: grey;
`
export const StatsList = styled.ul `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px; 
  border-top: 1px solid #8d9b9b;
  background-color: #E0FFFF; 
  padding: 10px;   
`
export const Item = styled.li `
  padding: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  border: 1px solid #8d9b9b;

`
export const Label = styled.span `
  font-size: 15px;
  color: grey;

`
export const Quantity = styled.span `
  font-weight: 500;

`
