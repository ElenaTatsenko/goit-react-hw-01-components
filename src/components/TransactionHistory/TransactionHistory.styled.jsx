import styled from '@emotion/styled';

export const TransTable = styled.table`
  width: 760px;
  margin-left: auto;
  margin-right: auto;
  font-size: 14px;
  text-align: center;
  border-radius: 6px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const TableHead = styled.thead`
  text-transform: uppercase;
  color: #fff;
  `;

export const TableEl = styled.tr`
 background-color: #fff;
  &:nth-of-type(even) {
    background-color: #ecf2f3;
    
  }
`;
export const TableHeadEl = styled.th`
  background-color: #55bdd6;
  padding-top: 15px;
  padding-bottom: 15px;
  &:last-of-type {
  border-radius: 0px 6px 0px 0px;
}
&:first-of-type {
  border-radius: 6px 0px 0px 0px;
}
  
`;

export const TableData = styled.td`
  ${'' /* background-color: #fff; */}
  color: #868b91;
  padding-top: 15px;
  padding-bottom: 15px;
  &:first-letter {
    text-transform: uppercase;
  };
`;

