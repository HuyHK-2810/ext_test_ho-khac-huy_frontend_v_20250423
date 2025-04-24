import React from 'react';

const navItems = [
  { url: "/", label: '会員登録' },
  { url: "/", label: '運営会社' },
  { url: "/", label: '利用規約' },
  { url: "/", label: '個人情報の取扱について' },
  { url: "/", label: '特定商取引法に基づく表記' },
  { url: "/", label: 'お問い合わせ' },
];

export default function Footer() {
  return (
    <header className="bg-dark-500 text-light">
      <div className="mx-auto px-4 sm:px-6 lg:px-40">
        <div className="flex items-center justify-start h-32">

          <nav className="flex gap-5 lg:gap-11">
            {navItems.map(({ url, label },index) => (
              <a
              key={label+index}
                href={url}
                className="flex items-center space-x-1 text-11 font-light leading-4 tracking-0.03 text-hover-gradient"
              >
                <span>{label}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
