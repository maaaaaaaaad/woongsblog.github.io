import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import myImage from '../../images/Typescript_logo.png';

const myImg = myImage as string;

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const ProfileImage: FunctionComponent = function () {
  return <ProfileImageWrapper src={myImg} alt="Profile Image" />;
};

export default ProfileImage;
