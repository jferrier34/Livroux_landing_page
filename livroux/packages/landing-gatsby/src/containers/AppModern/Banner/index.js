/* eslint-disable */
import React from 'react';
import Fade from 'react-reveal/Fade';
import { useStaticQuery, graphql } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { playCircle } from 'react-icons-kit/fa/playCircle';
import { openModal, closeModal } from '@redq/reuse-modal';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Rating from 'common/components/Rating';
import Container from 'common/components/UI/Container';
import GatsbyImage from 'common/components/GatsbyImage';
import BannerWrapper, {
  BannerContent,
  RatingInfo,
  BannerImage,
  ButtonGroup,
  VideoGroup,
  VideoWrapper,
  CustomerWrapper,
  ImageWrapper,
} from './banner.style';

import screenVideo1 from 'common/assets/image/appModern/preview_video_one.png';
import screenVideo2 from 'common/assets/image/appModern/preview_video_two.png';
import appStore from 'common/assets/image/appModern/app-store-badge.png';
import playStore from 'common/assets/image/appModern/badge-play-store.svg';
import circleBorder from 'common/assets/image/appModern/shape.svg';
import mockup from 'common/assets/image/appModern/home_phones.png';
// close button for modal
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
      src="https://www.youtube.com/embed/a85IP6do9c8?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"
      frameBorder="0"
    />
  </VideoWrapper>
);

const ModalContent2 = () => (
  <VideoWrapper>
    <iframe
      title="Video2"
      src="https://www.youtube.com/embed/K-jdXDpsUVA?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"
      frameBorder="0"
    />
  </VideoWrapper>
);



const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      appModernJson {
        client {
          id
          title
          image {
            publicURL
          }
        }
      }
    }
  `);
  const { client } = data.appModernJson;
  // modal handler
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

  const handleAppStoreLink = () => {
    window.location = 'https://apps.apple.com/fr/app/livroux-express/id1549240002'
  }

  const handlePlayStoreLink = () => {
    window.location = 'https://play.google.com/store/apps/details?id=fr.bigappli.apps.android5f8af04919a35&gl=FR'
  }


  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <Fade up delay={100}>
            <Heading
              as="h1"
              content="Connectez-vous à la proximité."
            />
          </Fade>
          <Fade up delay={200}>
            <Text
              content="Bénéficier d’un produit et à porté de main.
Trouvez un produit, choisissez un coursier
et faites-vous livrer quand vous voulez!"
            />
          </Fade>
            <VideoGroup>
            <img
              src={screenVideo1}
              onClick={handleVideoModal2}
              className='video1'
              alt="Microsoft"
            />
            <img
              src={screenVideo2}
              onClick={handleVideoModal2}
              className='video2'
              alt="Microsoft"
            />
          </VideoGroup>
          <VideoGroup>
            <img
              src={appStore}
              onClick={handleAppStoreLink}
              alt="Microsof"
            />
            <img
              src={playStore}
              onClick={handlePlayStoreLink}
              className='img2'
              alt="Microsoft"
            />
          </VideoGroup>
        </BannerContent>
        <BannerImage>
          <Fade up delay={100}>
            <Image src={mockup} alt="Banner" />
          </Fade>
        </BannerImage>
      </Container>
      <CustomerWrapper>
        <Text content="Commandez chez:" />
        <ImageWrapper>
          {client.map((item) => (
            <Image
              key={`client-key${item.id}`}
              src={item.image.publicURL}
              alt={item.title}
            />
          ))}
        </ImageWrapper>
      </CustomerWrapper>
      <img
        className="bannerBottomShape"
        src={circleBorder}
        alt="Bottom Circle"
      />
    </BannerWrapper>
  );
};

export default Banner;
