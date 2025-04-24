import React from 'react';

const navItems = [
  { icon: "/static/svg/icon/icon_memo.svg", label: '自分の記録' },
  { icon: "/static/svg/icon/icon_challenge.svg", label: 'チャレンジ' },
  { icon: "/static/svg/icon/icon_info.svg", label: 'お知らせ' },
];

export default function Header() {
  return (
    <header className="bg-dark-500 text-light">
      <div className="mx-auto px-4 sm:px-6 lg:px-40">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex-shrink-0 flex items-center">
            <img
              alt="Health App"
              src="/static/svg/logo.svg"
              className="mx-auto h-10 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <nav className="flex space-x-6">
            {navItems.map(({ icon, label }) => (
              <button
                key={label}
                className="flex items-center space-x-1 text-base font-light leading-[23px] text-hover-gradient"
              >

                <img
                  alt={label}
                  src={icon}
                  className="mx-auto h-8 w-8"
                />
                <span>{label}</span>
              </button>
            ))}
            <div className="flex">
              <button
                aria-label="Open menu"
                className="p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <img
                  alt="menu"
                  src="/static/svg/icon/icon_menu.svg"
                  className="mx-auto h-8 w-8"
                />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
