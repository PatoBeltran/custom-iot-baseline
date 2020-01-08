import * as React from 'react';
import classnames from 'classnames/bind';
import { TranslationFunction } from '../i18n';

import { Paths } from './routes';
import { NavLink } from 'react-router-dom';
import { NavigationItemContainer } from '@microsoft/azure-iot-ux-fluent-controls/lib/components/Shell';
import { Icon } from '@microsoft/azure-iot-ux-fluent-controls/lib/components/Icon';

const cx = classnames.bind(null);

/** Declares all the items that need to be injected into the global navigation. */
export function Navigation({ loc, isExpanded }: { loc: TranslationFunction; isExpanded: boolean}) {
    return (
        <>
            <NavItem to={Paths.home.index} exact title={loc('navigation.home')} icon='home' text={loc('navigation.home')} />
            <NavItem to={Paths.examples.index} title={loc('navigation.examples')} icon='education' text={loc('navigation.examples')} />
            <NavigationItemContainer
                containerTitle='Section 1'
                isExpanded={isExpanded}>
                <NavItem to={Paths.customize.index} title={loc('navigation.customize')} icon='add' text={loc('navigation.customize')} />
                <NavItem to={Paths.fun2.index} title={loc('navigation.examples')} icon='education' text={loc('navigation.examples')} />
            </NavigationItemContainer>
            <NavigationItemContainer
                containerTitle='Section 2'
                isExpanded={isExpanded}>
                <NavItem to={Paths.fun3.index} title={loc('navigation.examples')} icon='education' text={loc('navigation.examples')} />
                <NavItem to={Paths.fun4.index} title={loc('navigation.examples')} icon='education' text={loc('navigation.examples')} />
            </NavigationItemContainer>
        </>
    );
}

export function BottomNavigation({ loc }: { loc: TranslationFunction }) {
    return (
        <NavItem to={Paths.fun5.index} title={loc('navigation.examples')} icon='education' text={loc('navigation.examples')} />
    );
}

function NavItem({ to, exact, title, icon, text }: {
    to: string;
    exact?: boolean;
    title: string;
    icon: string;
    text: string;
}) {
    return (
        <NavLink to={to} exact={exact} title={title} className='global-nav-item' activeClassName='global-nav-item-active'>
            <Icon icon={icon} className={cx('global-nav-item-icon')} />
            <span className={cx('inline-text-overflow', 'global-nav-item-text')}>{text}</span>
        </NavLink>
    );
}
