import styled from '@emotion/styled';

export const ProfileWrap = styled.div`
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  
`;
export const Description = styled.div`
  width: 100%;
  background-color: rgb(255,255,255);
  padding-top: 40px;
  padding-bottom: 40px;
  border-radius: 6px 6px 0px 0px;
  
`;
export const Avatar = styled.img`
margin-left: auto;
  margin-right: auto;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px solid transparent;
`;
export const Title = styled.p`
margin-top: 20px;
  margin-bottom: 10px;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  color: #425366;
`;
export const InfoBox = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: #c4cad0;
  text-align: center;
  &:nth-of-type(even) {
    margin-bottom: 10px;
  }
`;
export const Stats = styled.ul`
  width: 100%;
  display: flex;
  font-size: 12px;
  background-color: #f5f5f6;
  border-radius: 6px;
`;
export const StatsItem = styled.li`
  width: 100%;
  text-align: center;
  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.06);
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;

  
`;

export const StatsLabel = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: #b6bfc8;
  display: block;
`;

export const StatsQuantity = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #425366;
  display: block;
`;
