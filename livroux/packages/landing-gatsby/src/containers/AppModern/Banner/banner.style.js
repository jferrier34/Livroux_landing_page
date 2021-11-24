import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import background from 'common/assets/image/appModern/livroux.png';
import appStore from 'common/assets/image/appModern/app-store-badge.png';
import playStore from 'common/assets/image/appModern/badge-play-store.svg';


const BannerWrapper = styled.div`
  padding-top: 100px;
  min-height: 802px;
  overflow: hidden;
  position: relative;
  background-repeat: no-repeat;
  background-image: url(${background});
  
  @media only screen and (min-width: 1201px) and (max-width: 1440px) {
    min-height: 100vh;
  }
  @media only screen and (max-width: 1099px) {
    min-height: 100%;
  }
  @media only screen and (max-width: 480px) {
    padding-top: 90px;
  }
  > div.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: calc(802px - 100px);
    @media only screen and (min-width: 1201px) and (max-width: 1440px) {
      min-height: calc(100vh - 100px);
      margin-top: 35px;
      align-items: flex-start;
    }
    @media only screen and (max-width: 1099px) {
      min-height: 100%;
    }
    @media only screen and (max-width: 480px) {
      flex-wrap: wrap;
    }
  }
  .bannerBottomShape {
    position: absolute;
    right: 0;
    bottom: -2px;
    @media only screen and (max-width: 999px) {
      display: none;
    }
  }
`;

export const BannerContent = styled.div`
  width: 40%;
  flex-shrink: 0;
  @media only screen and (max-width: 1199px) {
    flex-shrink: 0;
    width: 100%;
    margin-top: 25px;
  }

  h1 {
    font-size: 46px;
    line-height: 55px;
    font-weight: 700;
    color: ${themeGet('colors.menu', '#0D233E')};
    margin-bottom: 24px;
    @media only screen and (max-width: 1366px) {
      font-size: 36px;
      line-height: 42px;
      margin-bottom: 30px;
      margin-top: 40px;
    }
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 20px;
    line-height: 29px;
  }
`;

export const RatingInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 22px;
  color: ${themeGet('colors.menu', '#0D233E')};

  .rating {
    margin-right: 10px;
    .star {
      color: ${themeGet('colors.white', '#fff')};
    }
    .star-o {
      color: #e8e8e8;
    }
  }

  img {
    margin-left: 9px;
  }
`;

export const BannerImage = styled.div`
  flex-shrink: 0;
  img {
    max-width: 50%;
    margin-left: 7%;
    margin-top: -4%;
    @media only screen and (max-width: 1440px) {
      max-width: 50%;
      margin-left: 7%;
      margin-top: -4%;
    }
  }
  @media only screen and (max-width: 1199px) {
    display: none;
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 35px;

  .reusecore__button {
    text-transform: inherit;
    border-radius: 5px;
    padding-left: 16px;
    padding-right: 16px;

    &.primary {
      background-image: url(${playStore});
      background-repeat: no-repeat;
      max-width: 100%;
      width: 140%;
      font-size: 16px;
      letter-spacing: -0.1px;
      &:hover {
        box-shadow: #1e2a4a 0px 12px 24px -10px;
      }
    }

    &.primary2 {
      background-image: url(${appStore});
      background-repeat: no-repeat;
      font-size: 16px;
      letter-spacing: -0.1px;
      &:hover {
        box-shadow: #1e2a4a 0px 12px 24px -10px;
      }
    }

    



    &.text {
      font-size: 16px;
      color: ${themeGet('colors.white', '#fff')};
      letter-spacing: -0.1px;
      font-weight: 500;
      .btn-icon {
        i {
          color: #fff;
        }
        svg {
          width: auto;
          height: 25px;
        }
      }
    }
  }
`;
export const VideoGroup = styled.div`
  display: flex;
  margin-top: 60px;
  @media only screen and (max-width: 768px) {
    margin-top: 45px;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
  img {
    margin-right: 0px;
    margin-left -2%;
    max-width: 47%;
    object-fit: cover;
    cursor: pointer;
    height: 100%;
    margin-top: -10%;
    @media only screen and (max-width: 600px) {
      margin-right: 0;
      margin-bottom: 15px;
    }
  }

  .img2 {
    margin-right: 0px;
    margin-left: 1%;
    max-width: 42%;
    object-fit: cover;
    cursor: pointer;
    height: 100%;
    margin-top: -7%;
    @media only screen and (max-width: 600px) {
      margin-right: 0;
      margin-bottom: 15px;
    }
  }


  .video1 {
    margin-right: 0px;
    margin-left: 0.1%;
    max-width: 58.8%;
    object-fit: cover;
    cursor: pointer;
    height: 100%;
    margin-top: -9%;
    @media only screen and (max-width: 600px) {
      margin-right: 0;
      margin-bottom: 15px;
    }
  }

  .video2 {
    margin-right: 0px;
    margin-left: 1%;
    max-width: 60%;
    object-fit: cover;
    cursor: pointer;
    height: 100%;
    margin-top: -9%;
    @media only screen and (max-width: 600px) {
      margin-right: 0;
      margin-bottom: 15px;
    }
  }
`;
export const VideoWrapper = styled.div`
  max-width: 100%;
  width: 900px;
  position: relative;
  &:before {
    content: '';
    display: block;
    padding-top: 56.25%;
  }
  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
export const CustomerWrapper = styled.div`
  max-width: 850px;
  padding: 0px 0 70px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 1440px) {
    padding: 0px 0 55px;
  }
  @media only screen and (max-width: 1099px) {
    padding: 55px 0 55px;
    max-width: 920px;
  }
  @media only screen and (max-width: 991px) {
    padding: 40px 0;
  }
  @media only screen and (max-width: 600px) {
    padding: 25px 0 40px;
  }

  p {
    margin: 0 12px 0 0;
    color: ${themeGet('colors.menu', '#0D233E')};
    @media only screen and (max-width: 991px) {
      display: none;
    }
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 991px) {
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
  }
  img {
    margin: 0 12px;
    @media only screen and (max-width: 667px) {
      margin: 5px 10px;
    }
  }
`;
export default BannerWrapper;
