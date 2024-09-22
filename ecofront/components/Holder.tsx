// import React from "react";
// import styled from "styled-components";

// interface AchievementCardProps {
//   icon: string;
//   title: string;
//   points: number;
//   imageSrc: string;
// }

// const AchievementCard: React.FC<AchievementCardProps> = ({ icon, title, points, imageSrc }) => {
//   return (
//     <Card>
//       <IconWrapper>{icon}</IconWrapper>
//       <AchievementInfo>
//         <Title>{title}</Title>
//         <Points>{points} points</Points>
//       </AchievementInfo>
//       <BackgroundImage src={imageSrc} alt="" aria-hidden="true" />
//     </Card>
//   );
// };

// const Card = styled.article`
//   position: relative;
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   color: #000;
//   justify-content: center;
//   padding: 9px 0;
//   font: 400 14px/1 Roboto, sans-serif;
// `;

// const IconWrapper = styled.div`
//   border-radius: 16px;
//   background-color: rgba(0, 0, 0, 0.05);
//   font-size: 20px;
//   text-align: center;
//   line-height: 1.6;
//   width: 32px;
//   height: 32px;
//   padding: 0 6px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const AchievementInfo = styled.div`
//   flex: 1;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const Title = styled.h3`
//   margin: 0;
//   font-weight: 400;
// `;

// const Points = styled.span`
//   font-weight: 500;
//   text-align: right;
// `;

// const BackgroundImage = styled.img`
//   aspect-ratio: 250;
//   object-fit: contain;
//   object-position: center;
//   width: 100%;
//   position: absolute;
//   left: 0;
//   right: 0;
//   bottom: -1px;
//   height: 1px;
// `;

// export default AchievementCard;