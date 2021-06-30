import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import myImage from '../../images/Typescript_logo.png';

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;
`;

const ProfileImage: FunctionComponent = function () {
  return <ProfileImageWrapper src={myImage} alt="Profile Image" />;
};

export default ProfileImage;
