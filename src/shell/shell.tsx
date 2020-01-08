import * as React from 'react';
import { Shell as FluentShell, NavigationProperties, MastheadProperties } from '@microsoft/azure-iot-ux-fluent-controls/lib/components/Shell';
import { HorizontalLoader } from '@microsoft/azure-iot-ux-fluent-controls/lib/components/Loader/HorizontalLoader';

import { TranslationFunction, useTranslation } from '../i18n';
import { Settings, SettingsPanel, Themes } from './settings';
import { HelpPanel } from './help';
import { Routes } from './routes';
import { Navigation, BottomNavigation } from './navigation';

import './shell.fonts.scss';
import { ErrorBoundary } from '../errorBoundary';
import { withRouter } from 'react-router';

export const ThemeContext = React.createContext<string>(Themes.light);

function Shell() {
  const [loc] = useTranslation();
  const [expanded, changeExpanded] = React.useState<string>('');
  const [settings, changeSettings] = React.useState({ theme: Themes.light });

  const handleViewCollapse = React.useCallback(() => {
    // reset expanded to its default state. IMPORTANT: don't stop event
    // propagation here: this will block clicking behavior for some html
    // elements like <a>, input checkboxes, and buttons.
    changeExpanded('');
  }, []);

  React.useEffect(() => {
    document.documentElement.setAttribute('theme', settings.theme);

    document.addEventListener('click', handleViewCollapse, { passive: true });
    return document.removeEventListener('click', handleViewCollapse);
  }, [settings.theme, handleViewCollapse]);

  const handleSettingsSave = React.useCallback((newSettings: Settings) => {
    changeSettings(newSettings);
    handleViewCollapse();
  }, [handleViewCollapse]);

  const navProps = useNavigationProperties(loc);
  const mastheadProps = useMastheadProperties(loc, expanded, changeExpanded, navProps)
  return (
    <ThemeContext.Provider value={settings.theme}>
      <FluentShell
        navigation={navProps}
        masthead={mastheadProps}>
        <ErrorBoundary message={loc('errors.default')}>
          <React.Suspense fallback={<HorizontalLoader />}>
            <Routes />
          </React.Suspense>
        </ErrorBoundary>
        <div onClick={blockViewCollapse}>
          {expanded === 'settingsPanel' && <SettingsPanel settings={settings} onSave={handleSettingsSave} onCancel={handleViewCollapse} loc={loc} />}
          {expanded === 'helpPanel' && <HelpPanel onCancel={handleViewCollapse} loc={loc} />}
        </div>
      </FluentShell>
    </ThemeContext.Provider>
  );
}

function useNavigationProperties(loc: TranslationFunction): NavigationProperties {
  const [isExpanded, changeExpanded] = React.useState(true);
  return {
    isExpanded: isExpanded,
    onClick: () => {
      // toggle expanded and let the event propagate up to collapse any expanded views:
      changeExpanded(!isExpanded);
    },
    attr: {
      navButton: {
        title: loc(isExpanded ? 'navigation.collapse': 'navigation.expand'),
      },
    },
    children: <Navigation loc={loc} isExpanded={isExpanded} />,
    farBottomChildren: <BottomNavigation loc={loc} />
  }
}

function useMastheadProperties(loc: TranslationFunction, expanded: string, changeExpanded: (expanded: string) => void, navProps: NavigationProperties): MastheadProperties {
  const [serachVal, setSearchVal] = React.useState('');
  return {
    logo: <svg style={{ fill: 'var(--color-masthead-foreground)' }} width="21" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.375 17.341l4.446-2.668V9.042l-4.446-2.667L5.929 9.04v5.633l4.446 2.667z"></path><path d="M10.375 0L0 5.929V9.93l4.891 2.816v-2.223L1.927 8.745v-1.63l8.448-4.892 8.448 4.891V16.6l-8.448 4.891L0 15.563v2.223l10.375 5.928 10.375-5.928V5.929L10.375 0z"></path></svg>,
    branding: loc('masthead'),
    more: {
      onClick: getExpandCallback('moreMenu', changeExpanded),
      selected: expanded === 'moreMenu',
      title: loc('more')
    },
    navigation: {
      isExpanded: expanded === 'navMenu',
      onClick: getExpandCallback('navMenu', changeExpanded),
      attr: navProps.attr,
      children: navProps.children,
      farBottomChildren: navProps.farBottomChildren
    },
    search: {
      label: 'Search',
      value: serachVal,
      onChange: setSearchVal,
      onSubmit: () => {},
      expanded: expanded === 'search',
      onExpand: getExpandCallback('search', changeExpanded)
    },
    toolbarItems: [
      {
        icon: 'settings',
        label: loc('settings.title'),
        onClick: getExpandCallback('settingsPanel', changeExpanded),
        selected: expanded === "settingsPanel",
        attr: { button: { 'aria-label': loc('settings.title') } }
      },
      {
        icon: 'help',
        label: loc('help.title'),
        onClick: getExpandCallback('helpPanel', changeExpanded),
        selected: expanded === 'helpPanel',
        attr: { button: { 'aria-label': loc('help.title') } }
      },
    ],
    user: undefined // @todo add implementation for login control 
  };
}

function blockViewCollapse(e?: React.MouseEvent<any>) {
  e && e.stopPropagation();
}

function getExpandCallback(expand: string, changeExpanded: (expanded: string) => void) {
  return (e?: React.MouseEvent<any>) => {
    e && e.stopPropagation();
    changeExpanded(expand);
  };
}

export default withRouter(Shell);