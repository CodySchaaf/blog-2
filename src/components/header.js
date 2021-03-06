import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { color } from '../utils/theme';
import { Logo } from "./logo"

const box = css`
  border-top: 5px solid #424242;
  border-bottom: 1px solid #e8e8e8;
`;

const LeftVoid = styled.div`
  ${box};
  grid-column: left-gutter;
  grid-row: header;
`;

const RightVoid = styled.div`
  ${box};
  grid-column: right-gutter;
  grid-row: header;
`;

const Container = styled.header`
  ${box};
  grid-column: content;
  grid-row: header;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  color: ${color('darkText')};
  margin: 0;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  background-image: none;
  font-size: 26px;
  line-height: 56px;
  letter-spacing: -1px;
  text-shadow: none;
`;

const Header = ({ siteTitle }) => (
  <>
    <LeftVoid />
    <Container>
      <div>
        <StyledLink to="/">
          <Logo
            css={css`
              height: 56px;
              margin: 0;
              padding-right: 5px;
            `}
          />{' '}
          {siteTitle}
        </StyledLink>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </div>

    </Container>
    <RightVoid />
  </>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
