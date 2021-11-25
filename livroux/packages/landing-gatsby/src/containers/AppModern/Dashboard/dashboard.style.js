import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const DashboardWrapper = styled.section`
  padding-top: 120px;
  padding-bottom: 240px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100%;
  position: relative;
  background-color: #fff;
  /* background-image: linear-gradient(
		to bottom,
		#fff 35%,
		rgb(244, 246, 250) 100%
	); */
  @media (max-width: 1800px) {
    padding-bottom: 180px;
  }
  @media (max-width: 1600px) {
    padding-top: 80px;
    padding-bottom: 160px;
  }
  @media (max-width: 1440px) {
    padding-top: 30px;
    padding-bottom: 100px;
  }
  @media (max-width: 1024px) {
    padding-top: 30px;
    padding-bottom: 60px;
  }
  @media (max-width: 767px) {
    padding-top: 20px;
    padding-bottom: 20px;
    min-height: auto;
  }

  @media only screen and (max-width: 480px) {
    background: none;
  }

  .particle {
    position: absolute;
    width: 50%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    @media (max-width: 767px) {
      display: none;
    }
    @media only screen and (max-width: 480px) {
      width: 100%;
    }
  }

  .inputMail {
    margin-bottom: 5%!important;
  }

  .row {
    position: relative;
    z-index: 1;
  }

  .button__wrapper {
    margin-top: 40px;
    @media (max-width: 1024px) {
      margin-top: 25px;
    }

    @media (max-width: 767px) {
      margin-bottom: 30px;
    }
    @media (max-width: 767px) {
      margin-top: 0px;
    }
    .reusecore__button {
      border-radius: 5px;
      font-weight: 500;
      &.outlined {
        border-color: rgba(82, 104, 219, 0.2);
      }
      &:hover {
        box-shadow: ${themeGet('colors.primary', '#F6C416')} 0px 12px 24px -10px;
      }
    }
  }
  .subtitle {
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 12px;
    letter-spacing: 1.5px;
    color: #d1397c;
    text-transform: uppercase;
  }
  .buttonGroup {
      color: white !important;
      background: -webkit-linear-gradient(to right, #ff9966, #ff5e62); /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #ff9966, #ff5e62); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .email_input {
    flex-grow: 1;
    margin-right: 20px;
    margin-top: 3%;

    @media (max-width: 575px) {
      width: 100%;
      margin-right: 0;
      margin-bottom: 20px;
    }
    &.is-material {
      &.is-focus {
        label {
          font-size: 14px;
          color: red;
        }
        .highlight {
          background: red;
          height: 1px;
        }
      }
    }

    .highlight {
      background: rgba(255, 255, 255, 0.4);
    }

    input {
      background: transparent;
      font-size: 16px;
      font-weight: 400;
      margin-top: 5%!important;
      color: #343d48cc!important;
      padding: 10px 15px;
      border-top: 1px solid white!important;
      border-left: 1px solid white!important;
      border-right: 1px solid white!important;
      @media (max-width: 575px) {
        height: 48px;
      }
    }

    label {
      font-size: 17px;
      color: #fff;
      font-weight: 400;
      padding-left: 10px;
      top: 5px;
      pointer-events: none;
    }
  }
`;

const DashboardObject = styled.div`
  position: absolute;
  width: 18%;
  margin-right: 10%;
  height: 100%;
  top: -5%;
  right: 0;
  display: flex;
  align-items: center;
  @media (max-width: 990px) {
    top: 50px;
  }
  @media (max-width: 767px) {
    display: none;
  }
  .dashboardWrapper {
    height: 100%;
  }

  img {
    max-width: 260%;
    margin-left: -100%;
    margin-top: 41%;
  }
`;



export { DashboardObject };

export default DashboardWrapper;

