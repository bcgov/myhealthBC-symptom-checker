import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

import globe from 'src/images/globe.svg';

const languages = {
  en: 'English',
  fr: 'Français',
  zh: '中文(繁體)',
  pa: 'ਪੰਜਾਬੀ',
};

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  const ln = i18n.language?.substring(0, 2) || 'en';
  const language = languages[ln] || 'English';

  return (
    <Menu as='div' className='relative inline-block text-left bg-transparent md:w-36'>
      <div>
        <Menu.Button
          className={classNames(
            'inline-flex justify-between w-full',
            'rounded md:border border-gray-300 shadow-sm',
            'ml-2 pr-2 md:pl-2 py-2',
            'text-bcLightGray text-sm font-medium',
            'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500',
          )}
        >
          <div className='inline-flex align-middle text-base'>
            <img className='inline-block mr-2 ' src={globe} alt='Select language' />
            {isDesktop ? language : ln.toUpperCase()}
          </div>
          <ChevronDownIcon className='-mr-1 ml-4 h-5 w-5' aria-hidden='true' />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='origin-top-right absolute right-0 mt-2 md:w-56 rounded shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='py-1'>
            {Object.keys(languages).map(ln => {
              return (
                <Menu.Item key={ln}>
                  {({ active }) => (
                    // eslint-disable-next-line
                    <a
                      id={`ln-${ln}`}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      )}
                      onClick={() => i18n.changeLanguage(ln)}
                    >
                      {languages[ln]}
                    </a>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
