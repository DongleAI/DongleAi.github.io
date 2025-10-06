import React, { useState } from 'react';
import { Menu, ChevronRight } from 'lucide-react';
import { headerData } from '../data/HeaderData.jsx';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const { navLinks, cta, modelsMenu, scienceMenu, researchMenu, aboutMenu } = headerData;

const MegaMenu = ({ menuData, t, appendHl, isVisible }) => {
  if (!isVisible) return null;

  const isScience = menuData === scienceMenu;
  const isResearch = menuData === researchMenu;
  const isAbout = menuData === aboutMenu;

  let gridColsClass = 'grid-cols-4';
  if (isScience) gridColsClass = 'grid-cols-5';
  if (isResearch) gridColsClass = 'grid-cols-3'; // Research has 3 columns
  if (isAbout) gridColsClass = 'grid-cols-1'; // About has 1 column of items

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="absolute top-full left-0 w-full bg-slate-900/90 backdrop-blur-xl border-b border-slate-800 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 py-10">
        {/* Main Title and Link (for Models and Science) */}
        {(isScience || menuData === modelsMenu) && (
          <div className="col-span-full mb-4">
            <p className="text-slate-400">{t(menuData.title)}</p>
            <a href="#" className="inline-flex items-center text-fuchsia-400 hover:text-fuchsia-300 text-lg font-semibold">
              {t(menuData.exploreLink)} <ChevronRight className="w-5 h-5 ml-1" />
            </a>
          </div>
        )}

        {/* Columns */}
        <div className={`grid ${gridColsClass} gap-x-8 gap-y-10`}>
          {menuData.columns.map((col, colIndex) => (
            <div key={colIndex} className={isAbout ? 'col-span-1' : ''}> {/* Ensure About items take full width if needed */}
              {col.title && <h3 className="font-semibold text-white">{t(col.title)}</h3>}
              {col.subtitle && <p className="text-sm text-slate-400 mt-1">{t(col.subtitle)}</p>}
              {col.description && <p className="text-sm text-slate-400 mt-1">{t(col.description)}</p>}
              
              {col.items && (
                <ul className="mt-4 space-y-2">
                  {col.items.map(item => (
                    <li key={t(item.key)}><a href={appendHl(item.path)} className="text-slate-300 hover:text-white">{t(item.key)}</a></li>
                  ))}
                </ul>
              )}
              {col.learnMore && (
                <a href={appendHl(col.learnMore.path)} className="text-sm text-fuchsia-400 hover:underline mt-3 inline-block">{t(col.learnMore.key)}</a>
              )}
            </div>
          ))}

          {/* Science Sidebar */}
          {isScience && menuData.sidebar && (
            <div className="border-l border-slate-800 pl-8">
                <h3 className="font-semibold text-white">{t(menuData.sidebar.title)}</h3>
                <ul className="mt-4 space-y-2">
                    {menuData.sidebar.items.map(item => (
                        <li key={t(item.key)}><a href={appendHl(item.path)} className="text-slate-300 hover:text-white">{t(item.key)}</a></li>
                    ))}
                </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Header = React.memo(() => {
  const { t } = useTranslation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const hlParam = new URLSearchParams(location.search).get('hl');

  const appendHl = (path) => {
    if (!hlParam || !path || path.startsWith('#')) return path;
    const separator = path.includes('?') ? '&' : '?';
    return path + separator + 'hl=' + hlParam;
  };

  const getMenuData = (key) => {
    if (key === 'header.models') return modelsMenu;
    if (key === 'header.science') return scienceMenu;
    if (key === 'header.research') return researchMenu;
    if (key === 'header.about') return aboutMenu;
    return null;
  };

  return (
    <header
      className="sticky top-0 z-50"
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <div className="flex justify-between items-center px-8 py-4 backdrop-blur-xl bg-slate-900/90 border-b border-slate-800">
        <a href={appendHl('/')} className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-cyan-400">
          Dongle AI
        </a>

        <nav className="hidden lg:flex gap-10 text-base text-slate-300">
          {navLinks.map((link) => (
            <div
              key={link.key}
              className="relative py-2"
              onMouseEnter={() => setOpenDropdown(link.key)}
            >
              <a href={appendHl(link.path)} className="hover:text-fuchsia-400 transition-colors font-medium">
                {t(link.key)}
              </a>
            </div>
          ))}
        </nav>

        <div className="flex gap-3 items-center">
          <button className="hidden sm:block px-5 py-2 border border-fuchsia-500 rounded-full text-fuchsia-400 bg-slate-900 hover:bg-slate-800 transition-colors text-sm font-semibold">
            {t(cta.chat)}
          </button>
          <button className="px-5 py-2 rounded-full text-white bg-gradient-to-r from-fuchsia-600 to-cyan-500 hover:from-fuchsia-700 hover:to-cyan-600 transition-all shadow-lg text-sm font-semibold">
            {t(cta.buildApi)}
          </button>
          <button className="lg:hidden p-2 text-slate-300 hover:text-fuchsia-400">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
      <AnimatePresence>
        <MegaMenu 
          menuData={getMenuData(openDropdown)} 
          t={t} 
          appendHl={appendHl} 
          isVisible={!!getMenuData(openDropdown)}
        />
      </AnimatePresence>
    </header>
  );
});

export default Header;