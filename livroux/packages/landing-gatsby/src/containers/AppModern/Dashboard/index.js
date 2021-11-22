import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import FeatureBlock from 'common/components/FeatureBlock';
import appStore from 'common/assets/image/appModern/app-store-badge.png';
import playStore from 'common/assets/image/appModern/badge-play-store.svg';
import Container from 'common/components/UI/Container';
import GatsbyImage from 'common/components/GatsbyImage';
import Particles from '../Particle';
import DashboardWrapper, { DashboardObject } from './dashboard.style';
import BannerWrapper, {
  VideoGroup,
} from '../Banner/banner.style.js';

const DashboardSection = ({ row, col, title, btnStyle, description }) => {
  const data = useStaticQuery(graphql`
    query {
      dashboard: file(relativePath: { eq: "image/appModern/iphone_x.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 981
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  const ButtonGroup = () => (
     <VideoGroup>
            <img
              src={appStore}
              alt="Microsof"
              className='img'
            />
            <img
              src={playStore}
              className='img2'
              alt="Microsof"
            />
      </VideoGroup>
  );
  return (
    <DashboardWrapper id="banner_section">
      <Particles />
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <Heading className="subtitle" as="h5" content="DEVENIR COURSIER" />
            <FeatureBlock
              title={
                <Heading
                  content="Obtenez un complément de revenus."
                  {...title}
                />
              }
              description={
                <Text
                  content="Bénéficier d’un produit et à porté de main. Trouvez un produit, choisissez un coursier et faites-vous livrer quand vous voulez!"
                  {...description}
                />
              }
              button={<ButtonGroup />}
            />
          </Box>
        </Box>
      </Container>
      <DashboardObject>
        <div className="dashboardWrapper">
          <GatsbyImage
            src={
              (data.dashboard !== null) | undefined
                ? data.dashboard.childImageSharp.gatsbyImageData
                : {}
            }
            alt="Dashboard Object"
          />
        </div>
      </DashboardObject>
    </DashboardWrapper>
    
  );
};

DashboardSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
};

DashboardSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, '70%', '50%', '45%'],
  },
  title: {
    fontSize: ['22px', '30px', '30px', '30px', '36px'],
    fontWeight: '700',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['20px', '15px', '15px', '20px', '25px'],
    lineHeight: '1.3',
    maxWidth: ['100%', '400px'],
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.85',
    mb: '0',
  },
  btnStyle: {
    minWidth: ['120px', '120px', '120px', '156px'],
    fontSize: ['13px', '14px'],
    fontWeight: '500',
    colors: 'primaryWithBg',
  },
};

export default DashboardSection;