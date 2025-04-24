import React, { useState }  from 'react';
import { Element } from 'react-scroll';

const navItems = [
  { icon: "/static/svg/icon/icon_memo.svg", label: '自分の記録', url: "/my-record" },
  { icon: "/static/svg/icon/icon_challenge.svg", label: 'チャレンジ', url: "#" },
  { icon: "/static/svg/icon/icon_info.svg", label: 'お知らせ', url: "#" },
];

const hamMenus = [
  {  label: '自分の記録', url: "/my-record" },
  {  label: '体重グラフ', url: "#" },
  {  label: '目標', url: "#" },
  {  label: '選択中のコース', url: "#" },
  {  label: 'コラム一覧', url: "/column" },
  {  label: '設定', url: "#" },
];


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-dark-500 text-light">
      <Element name="top" className="mx-auto px-4 sm:px-6 lg:px-40">
        <div className="flex items-center justify-between h-16">
          <a href="/my-page" className="flex-shrink-0 flex items-center">
            <img
              alt="Health App"
              src="/static/svg/logo.svg"
              className="mx-auto h-10 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <nav className="flex space-x-6">
            {navItems.map(({ icon, label, url }) => (
              <a
                href={url}
                key={label}
                className="flex items-center space-x-1 text-base font-light leading-23 text-hover-gradient"
              >
                <div className=" relative ">
                  <img
                    alt={label}
                    src={icon}
                    className="mx-auto h-8 w-8 relative"
                  />
                  {label === "お知らせ" && <div className="absolute top-0 -right-2 rounded-full bg-primary-500 w-4 h-4 text-white flex justify-center items-center text-10 font-normal font-inter leading-3 tracking-normal">8</div>}
                </div>
                <span>{label}</span>
              </a>
            ))}
            <div className="flex relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Open menu"
                className="p-2 rounded-md hover:bg-gray-800 focus:outline-none  "
              >
                <img
                  alt="menu"
                  src={isMenuOpen ? "/static/svg/icon/icon_close.svg":"/static/svg/icon/icon_menu.svg"}
                  className="mx-auto h-8 w-8"
                />
              </button>
              {isMenuOpen && (
          <div className="absolute top-12 right-4 sm:right-6 lg:right-[88px] mt-2 w-48 bg-dark-500 shadow-lg z-10">
            <ul className="flex flex-col w-[280px] divide-y-2 divide-gray-500">
              {hamMenus.map(({ label, url }) => (
                <li key={label}>
                  <a
                    href={url}
                    className="flex items-start bg-gray-400 h-[72px] pl-8 py-[23px]"
                  >
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
            </div>
            
          </nav>
        </div>
      </Element>
    </header>
  );
}
