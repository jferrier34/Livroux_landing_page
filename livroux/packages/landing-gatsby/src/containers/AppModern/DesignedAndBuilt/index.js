import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { openModal, closeModal } from '@redq/reuse-modal';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Container from 'common/components/UI/Container';
import GatsbyImage from 'common/components/GatsbyImage';
import SectionWrapper, { ContentWrapper } from './designedAndBuilt.style';
import instagramButton from 'common/assets/image/appModern/instagram_button.svg';
import playStore from 'common/assets/image/appModern/messenger_button.svg';
import Network from 'common/assets/image/appModern/final_social_interaction.svg';

import BannerWrapper, {
  VideoGroup,
  VideoWrapper,
  CustomerWrapper,
} from '../Banner/banner.style.js';

const facebookLink = () => {
  var facebookLink = 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Flimitrend%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
  return facebookLink;
}

const DesignedAndBuilt = () => {
  const data = useStaticQuery(graphql`
    query {
      appModernJson {
        designAndBuilt {
          image {
            childImageSharp {
              gatsbyImageData(
                width: 707
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          title
          slogan
        }
      }
    }
  `);
  const { image, title, slogan } =
    data.appModernJson.designAndBuilt;


    const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

const ModalContent = () => (
  <VideoWrapper>
    <iframe
      title="Video"
      src="https://www.instagram.com/p/CS4jCZMIWWO/embed"
      frameBorder="0"
    />
  </VideoWrapper>
);

const ModalContent2 = () => (
  <VideoWrapper>
    <iframe
      title="Video2"
      src={facebookLink(facebookLink)}
      frameBorder="0"
    />
  </VideoWrapper>
);

const handleVideoModal = () => {
    openModal({
      config: {
        className: 'video-modal',
        disableDragging: true,
        default: {
          width: 'auto',
          height: 'auto',
          x: 0,
          y: 0,
        },
      },
      component: ModalContent,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

 const handleVideoModal2 = () => {
    openModal({
      config: {
        className: 'video-modal',
        disableDragging: true,
        default: {
          width: 'auto',
          height: 'auto',
          x: 0,
          y: 0,
        },
      },
      component: ModalContent2,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };



  const ButtonGroup = () => (
     <VideoGroup>
            <img
              src={instagramButton}
              onClick={handleVideoModal}
              alt="Microsof"
              className="socialNetwork1"
            />
            <img
              src={playStore}
              onClick={handleVideoModal2}
              alt="Microsoft"
              className="socialNetwork2"
            />
          </VideoGroup>
  );

  return (
    <SectionWrapper>
      <Container>
        <ContentWrapper>
          <div className="content">
            <Heading as="h5" content={slogan} />
            <Heading content={title} />
          </div>
          <div className="image">
            <ContentWrapper>
                <div>
                  <img className='designAndBuild' style={{ maxWidth: '80%', marginLeft: '10%' }}  src={Network} alt='network' />
                </div>
            </ContentWrapper>
            <ButtonGroup />
          </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default DesignedAndBuilt;
