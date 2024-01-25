// Header.jsx
import React from 'react';
import './header.css';
import logo from '../../Images/logo.png';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="header">
        <img src={logo} className="logo" alt="Logo" />
        <div className="header-right">
          <a className="home" href="#home">
            {t("Home")}
          </a>
          <table className="about-container">
            <tbody>
              <tr className="sub-content about">
                <td>
                  <a href="#about">
                    {t("About")}
                    <div className="sub-content-details">
                      <h3>{t("Sub-content 1")}</h3>
                    </div>
                  </a>
                </td>
                <td>
                  <div className="sub-content-details">
                    <h3>{t("Sub-content 2")}</h3>
                  </div>
                </td>
                <td>
                  <div className="sub-content-details">
                    <h3>{t("Sub-content 3")}</h3>
                  </div>
                </td>
                <td>
                  <div className="sub-content-details">
                    <h3>{t("Sub-content 4")}</h3>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <a href="#activites">{t("Activites")}</a>
          <a href="#contact">{t("ContactUs")}</a>
          <a href="#">{t("Festival")}</a>
          <a href="#">{t("Media")}</a>
        </div>
        <div className="languageSwitcher">
          <LanguageSwitcher />
        </div>
      </div>
    </>
  );
};

export default Header;
