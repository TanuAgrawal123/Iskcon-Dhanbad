import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';
import { initReactI18next } from "react-i18next";
import Header from './components/Header';

function App() {
  const { t,i18n } = useTranslation();


  return (
    <>

{/* <Header/> */}
 <LanguageSwitcher/>
   <div>
     <LanguageSwitcher/> 
     <h1>{t('welcome')}</h1>
      <p>{t('aboutUs')}</p>
    </div>
    </>
  )
}

export default App
