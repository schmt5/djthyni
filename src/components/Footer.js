import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import {
  mainMenuItems,
  footerMenuItems,
  socialMenuItems,
} from "../constants/menu-items"
import styled from "styled-components"
import PropTypes from "prop-types"

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
            authorSite
          }
        }
      }
    `
  )

  const footerData = data.site.siteMetadata

  return (
    <FooterStyles>
      <div className="flex">
        <div style={{ paddingRight: 16 }} className="brand-cont">
          <h1 style={{ margin: 0, marginBottom: 6 }}>THYNI</h1>
          <address style={{ fontSize: 12 }}>
            Unfortunately, due to too many fan letters, we can no longer provide a phone number. Please contact us via E-mail
            </address>
        </div>

        {mainMenuItems || socialMenuItems || footerMenuItems ? (
          <div style={{ justifyContent: 'flex-start' }} className="menus-cont">
            {/* If social menu items are being imported, render this */}
            {socialMenuItems && (
              <ul className="footer-menu socials">
                {socialMenuItems.map((item, index) => {
                  return (
                    <li key={index}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.icon}
                        <span className="sr-only">{item.name}</span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        ) : null}


        <div className="copy-cont">
          <ul className="copy">
            <li style={{ fontSize: 16 }}>&copy; {new Date().getFullYear()}</li>

            {/* if there is an author stated in the config, render this */}
            <li style={{ fontSize: 16 }}>
              <a
                href={'https://www.thierryschmidt.ch/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                {'✌️ Thierry Schmidt'}
              </a>
            </li>
            <li style={{ fontSize: 16 }}>
              <a
                href={'https://www.genauglich.ch/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                {'✌️ Nico Stähli'}
              </a>
            </li>
          </ul>
        </div>
        {footerData.author && (
          <span style={{margin: '12px auto', fontSize: 12}}>Gatsby Starter {footerData.author}</span>
        )}
      </div>
    </FooterStyles>
  )
}

Footer.propTypes = {
  Logo: PropTypes.string,
}

const FooterStyles = styled.footer`
  padding: calc(var(--spacing) * 2);
  background-color: #015871;
  font-family: var(--sansSerif);
  font-weight: 300;
  font-style: normal;
  color: #fff;

  .flex {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: flex-end;
    }
  }

  .telephone,
  address,
  li {
    font-size: var(--footerMenuItem);
  }

  address {
    font-style: normal;
    margin-bottom: var(--spacing);
  }

  li {
    text-transform: capitalize;
    list-style: none;
    padding-left: 0;
    margin-top: 5px;
    margin-bottom: 5px;

    @media (min-width: 768px) {
      margin-top: 10px;
      margin-bottom: var(--spacing);
    }
  }

  a {
    text-decoration: none;
    color: #fff;
    transition: var(--transMed);

    &:hover {
      color: var(--primaryColor);
    }
  }

  @media (min-width: 768px) {
    padding-top: calc(var(--spacing) * 4);
    padding-bottom: calc(var(--spacing) * 2);
  }

  .brand-cont,
  .brand-cont img {
    margin-bottom: calc(var(--spacing) * 2);
  }

  .brand-cont {
    width: 100%;

    @media (min-width: 768px) {
      width: 25%;
    }

    a {
      display: inline-block;
    }

    img {
      max-width: 125px;
      width: 100%;
    }
  }

  .menus-cont {
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.1);

    @media (min-width: 768px) {
      width: 75%;
      border-top: 0;
    }
  }

  .footer-menu {
    padding: 0;
    width: 50%;
    margin-top: calc(var(--spacing) * 2);
    margin-bottom: 0;

    > *:first-child {
      margin-top: 0;
    }

    li {
      margin-bottom: var(--spacing);

      &:last-child {
        margin-bottom: 0;
      }
    }

    @media (min-width: 768px) {
      width: auto;
      margin-top: 0;
      margin-bottom: 0;
      border-left: 1px solid rgba(255, 255, 255, 0.1);
      padding-left: calc(var(--spacing) * 2);
      padding-right: calc(var(--spacing) * 5);

      li {
        padding-left: calc(var(--spacing) / 2);
      }

      &:last-child {
        padding-right: 0;
      }
    }
  }

  .menus-cont {
    display: flex;
    justify-content: flex-end;
  }

  .socials {
    display: flex;

    li {
      margin-top: 0;
      padding: 0;
      margin-right: var(--spacing);

      &:last-child {
        margin-right: 0;
      }
    }

    a {
      font-size: 24px;
    }
  }
  .copy-cont {
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: calc(var(--spacing) * 2);
    padding-top: calc(var(--spacing) * 2);

    @media (min-width: 768px) {
      border-top: none;
    }

    .copy {
      display: flex;
      padding: 0;
      margin-top: 0;

      margin-bottom: 0;

      li {
        margin-right: var(--spacing);
      }

      @media (min-width: 768px) {
        justify-content: center;

        li {
          margin: 0 calc(var(--spacing) / 2);
          font-size: 0.75rem;
        }
      }
    }
  }
`

export default Footer
