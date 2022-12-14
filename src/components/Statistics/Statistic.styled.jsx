import styled from '@emotion/styled';
import {getRandomHexColor} from 'utils/getRandomHexColor'

export const StatisticsWrap = styled.section`
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 40px;
`;

export const Title = styled.h2`
  font-size: 22px;
  font-weight: 500;
  line-height: 22px;
  text-transform: uppercase;
  background-color: #fff;
  color: #425366;
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
  border-radius: 6px 6px 0px 0px;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 0px 6px 6px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 20px;
  color: #fff;
  &:last-of-type {
  border-radius: 0px 0px 6px 0px;
}
&:first-of-type {
  border-radius: 0px 0px 0px 6px;
}
  
  background-color: ${getRandomHexColor};
`;

export const StatsLabel = styled.span`
  font-size: 16px;
`;

export const StatsPercentage = styled.span`
  font-weight: 700;
`;

