import React, { lazy, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';

const supportedLanguages = ['en', 'ko'];
const defaultLanguage = 'en';

const getLanguage = (searchParams) => {
  const lang = searchParams.get('lang');
  if (lang && supportedLanguages.includes(lang)) {
    return lang;
  }
  const browserLang = navigator.language.split('-')[0];
  if (supportedLanguages.includes(browserLang)) {
    return browserLang;
  }
  return defaultLanguage;
};

const LocalizedPage = ({ page, ...props }) => {
  const [searchParams] = useSearchParams();
  const lang = getLanguage(searchParams);

  const PageComponent = lazy(() => 
    import(`../pages/${page}.${lang}.jsx`)
      .catch(() => import(`../pages/${page}.${defaultLanguage}.jsx`))
  );


  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageComponent {...props} />
    </Suspense>
  );
};

export default LocalizedPage;