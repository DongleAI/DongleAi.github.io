// src/components/Footer.jsx

import { useTranslation } from 'react-i18next';
import { Youtube, Twitter, Instagram, Linkedin, Github, Sparkles, Dna, Fingerprint, Wind, ChevronRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function Footer() {
    const { t } = useTranslation();
    const location = useLocation();
    const hlParam = new URLSearchParams(location.search).get('hl');

    const appendHl = (path) => {
        if (!hlParam) return path;
        const separator = path.includes('?') ? '&' : '?';
        return `${path}${separator}hl=${hlParam}`;
    };

    const socialLinks = [
        { icon: <Twitter />, href: "#", label: "Twitter" },
        { icon: <Instagram />, href: "#", label: "Instagram" },
        { icon: <Youtube />, href: "#", label: "Youtube" },
        { icon: <Linkedin />, href: "#", label: "LinkedIn" },
        { icon: <Github />, href: "#", label: "Github" },
    ];

    const modelLinks = [
        { icon: <Sparkles />, href: appendHl("/models/dongle"), label: t('footer.models.dongle') },
        { icon: <Sparkles />, href: appendHl("/models/round"), label: t('footer.models.round') },
        { icon: <Sparkles />, href: appendHl("/models/abyss"), label: t('footer.models.abyss') },
        { icon: <Sparkles />, href: appendHl("/models/submarine"), label: t('footer.models.submarine') },
        { icon: <Sparkles />, href: appendHl("/models/universe"), label: t('footer.models.universe') },
    ];

    const scienceLinks = [
        { icon: <Dna />, href: appendHl("/science/alphasigma"), label: t('footer.science.alphasigma') },
        { icon: <Fingerprint />, href: appendHl("/science/icyid"), label: t('footer.science.icyid') },
        { icon: <Wind />, href: appendHl("/science/notalone"), label: t('footer.science.notalone') },
    ];

    const learnMoreLinks = [
        { href: appendHl("/about"), label: t('footer.learnMore.about') },
        { href: appendHl("/safety"), label: t('footer.learnMore.safety') },
        { href: appendHl("/careers"), label: t('footer.learnMore.careers') },
    ];

    return (
        <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2 lg:col-span-4 mb-8">
                        <h3 className="text-2xl font-bold text-white">{t('footer.slogan')}</h3>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white">{t('footer.models.title')}</h4>
                        <p className="text-sm mt-2">{t('footer.models.description')}</p>
                        <ul className="mt-4 space-y-2">
                            {modelLinks.map(link => (
                                <li key={link.label}>
                                    <a href={link.href} className="flex items-center hover:text-white">
                                        {link.icon && <span className="mr-2">{link.icon}</span>}
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white">{t('footer.science.title')}</h4>
                        <p className="text-sm mt-2">{t('footer.science.description')}</p>
                        <ul className="mt-4 space-y-2">
                            {scienceLinks.map(link => (
                                <li key={link.label}>
                                    <a href={link.href} className="flex items-center hover:text-white">
                                        {link.icon && <span className="mr-2">{link.icon}</span>}
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white">{t('footer.learnMore.title')}</h4>
                        <ul className="mt-4 space-y-2">
                            {learnMoreLinks.map(link => (
                                <li key={link.label}>
                                    <a href={link.href} className="hover:text-white">{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-2 lg:col-span-4 mt-8">
                        <h4 className="font-semibold text-white">{t('footer.signup.title')}</h4>
                        <form className="mt-4 flex">
                            <input type="email" placeholder={t('footer.signup.emailPlaceholder')} className="bg-slate-800 border border-slate-700 rounded-l-md p-3 w-full" />
                            <button type="submit" className="bg-fuchsia-600 text-white p-3 rounded-r-md"><ChevronRight /></button>
                        </form>
                        <p className="text-xs mt-2">{t('footer.signup.disclaimer')}</p>
                    </div>
                </div>

                <div className="mt-16 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex space-x-4">
                        {socialLinks.map(link => (
                            <a key={link.label} href={appendHl(link.href)} aria-label={link.label} className="hover:text-white">
                                {link.icon}
                            </a>
                        ))}
                    </div>
                    <div className="text-sm mt-4 md:mt-0">
                        <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
                        <div className="flex space-x-4 mt-2">
                            <a href={appendHl("/privacy")} className="hover:text-white">{t('footer.privacy')}</a>
                            <a href={appendHl("/terms")} className="hover:text-white">{t('footer.terms')}</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}