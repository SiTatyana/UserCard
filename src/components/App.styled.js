import styled from 'styled-components';


export const Wrapper = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`
export const Container = styled.div`
position: relative;
width: 380px;
height: 460px;
background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
border-radius: 20px;
`
export const Header = styled.div`
position: absolute;
margin-top: 20px;
margin-left: 20px;
`
export const Image = styled.img`
margin-top: 28px;
margin-left: 36px;
`
export const UserAvatar = styled.img`
margin-top: 18px;
width: 380px;
height: 8px;
`

export const AvatarImg = styled.img`
position: absolute;
width:80px;
height:80px;
top: 178px;
left: 150px;
`

export const AccountInfo = styled.div`
display:flex;
margin-top: 62px;
flex-direction: column;
align-items: center;
`
export const FollowButton = styled.button`
padding: 0;
font-size: 18px;
color: #373737;
width: 196px;
height: 50px;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10px;
border: 0;
`

export const AccountStatistics = styled.p`
margin-top: 0;
margin-bottom: 16px;
font-family: 'Montserrat';
color: #EBD8FF;
font-weight: 500;
font-size: 20px;
text-transform: uppercase;
&:nth-child(2) {
    margin-bottom: 26px;
}
`