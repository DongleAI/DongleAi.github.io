import { Youtube, Twitter, Instagram, Linkedin, Github, Sparkles, Dna, Fingerprint, Wind, ChevronRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function Footer({
    slogan,
    modelsTitle,
    modelsDescription,
    modelLinks,
    scienceTitle,
    scienceDescription,
    scienceLinks,
    learnMoreTitle,
    learnMoreLinks,
    signupTitle,
    signupEmailPlaceholder,
    signupDisclaimer,
    copyrightText,
    privacyText,
    termsText,
}) {
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

    return (
        <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2 lg:col-span-4 mb-8">
                        <h3 className="text-2xl font-bold text-white">{slogan}</h3>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white">{modelsTitle}</h4>
                        <p className="text-sm mt-2">{modelsDescription}</p>
                        <ul className="mt-4 space-y-2">
                            {modelLinks.map(link => (
                                <li key={link.label}>
                                    <a href={appendHl(link.href)} className="flex items-center hover:text-white">
                                        {link.icon && <span className="mr-2">{link.icon}</span>}
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white">{scienceTitle}</h4>
                        <p className="text-sm mt-2">{scienceDescription}</p>
                        <ul className="mt-4 space-y-2">
                            {scienceLinks.map(link => (
                                <li key={link.label}>
                                    <a href={appendHl(link.href)} className="flex items-center hover:text-white">
                                        {link.icon && <span className="mr-2">{link.icon}</span>}
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white">{learnMoreTitle}</h4>
                        <ul className="mt-4 space-y-2">
                            {learnMoreLinks.map(link => (
                                <li key={link.label}>
                                    <a href={appendHl(link.href)} className="hover:text-white">{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-2 lg:col-span-4 mt-8">
                        <h4 className="font-semibold text-white">{signupTitle}</h4>
                        <form className="mt-4 flex">
                            <input type="email" placeholder={signupEmailPlaceholder} className="bg-slate-800 border border-slate-700 rounded-l-md p-3 w-full" />
                            <button type="submit" className="bg-fuchsia-600 text-white p-3 rounded-r-md"><ChevronRight /></button>
                        </form>
                        <p className="text-xs mt-2">{signupDisclaimer}</p>
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
                        <p>&copy; {new Date().getFullYear()} {copyrightText}</p>
                        <div className="flex space-x-4 mt-2">
                            <a href={appendHl("/privacy")} className="hover:text-white">{privacyText}</a>
                            <a href={appendHl("/terms")} className="hover:text-white">{termsText}</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
