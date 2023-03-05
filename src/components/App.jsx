import React, { useState, useEffect } from 'react';

import { ReactComponent as Logo } from '../assets/logo.svg';
import {Container, Wrapper, Header, Image, UserAvatar, AvatarImg, AccountInfo, FollowButton, AccountStatistics} from './App.styled';


import backgroundImg from '../assets/backgroundImg.png';
import Avatar from '../assets/Avatar.png';
import Rectangle from '../assets/Rectangle.png';



export const App = () => {
  const [subscribed, setSubscribed] = useState(JSON.parse(localStorage.getItem('subscribed')) || false);
  const [subscriberCount, setSubscriberCount] = useState(JSON.parse(localStorage.getItem('subscriberCount')) || 100500);

  useEffect(() => {
    localStorage.setItem('subscribed', JSON.stringify(subscribed));
    localStorage.setItem('subscriberCount', JSON.stringify(subscriberCount));
  }, [subscribed, subscriberCount]);

  const handleSubscription = () => {
    setSubscribed(!subscribed);
    setSubscriberCount(subscribed ? subscriberCount - 1 : subscriberCount + 1);
  };

  return (
    <>
    <Wrapper>
      <Container>
        <Header> <Logo/> </Header>
        <Image src={backgroundImg} alt="background image"/>
        <UserAvatar src={Rectangle}/>
        <AvatarImg src={Avatar} />
        <AccountInfo>
          <AccountStatistics> 777 tweets</AccountStatistics>
          <AccountStatistics>{subscriberCount.toLocaleString()} followers</AccountStatistics>
          <FollowButton onClick={handleSubscription} style={{ backgroundColor: subscribed ? '#5CD3A8' : '#EBD8FF' }}>
            {subscribed ? 'FOLLOW' : 'FOLLOWING'}
          </FollowButton>
      </AccountInfo>
      </Container>
    </Wrapper>
    </>
  );
};
