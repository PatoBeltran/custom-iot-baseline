export enum CustomizableColors {
    mastheadBackground = 'mastheadBackground',
    accent = 'accent',
    mainNavBackground = 'mainNavBackground',
    contentBackgroundPrimary = 'contentBackgroundPrimary',
    statusSuccess = 'statusSuccess',
    statusInformational = 'statusInformational',
    statusWarning = 'statusWarning',
    statusDanger = 'statusDanger',
    globalBackgroundSuccess = 'globalBackgroundSuccess',
    globalBackgroundInformational = 'globalBackgroundInformational',
    globalBackgroundWarning = 'globalBackgroundWarning',
    globalBackgroundError = 'globalBackgroundError'
}

export type AvailableColors = {
    [key in CustomizableColors]: string;
} & {
    // Content
    contentBackgroundSecondary: string;

    // State
    stateHover: string;
    stateSelected: string;
    stateSelectedHover: string;
    stateDisabled: string;

    // Accent
    accentHover: string;
    accentSelected: string;
    accentSelectedHover: string;
    accentForeground: string;

    // Status
    statusSuccessForeground: string;
    statusInformationalForeground: string;
    statusWarningForeground: string;
    statusDangerForeground: string;

    // Foreground
    foregroundDefault: string;
    foregroundComplementary: string;
    foregroundInactive: string;
    foregroundDisabled: string;
    foregroundSecondary: string;

    // Masthead
    mastheadForeground: string;
    mastheadButtonHover: string;
    searchBackground: string;
    searchBackgroundHover: string;
    searchTextHover: string;
    searchTextPlaceholder: string;
    searchButtonForeground: string;

    // Main nav
    mainNavBackgroundHover: string;
    mainNavBackgroundSelected: string;
    mainNavForegroundPrimary: string;
    mainNavForegroundSecondary: string;

    // Notifications
    globalForegroundSuccess: string;
    globalForegroundInformational: string;
    globalForegroundWarning: string;
    globalForegroundError: string;
};

export const ColorDefinitions: AvailableColors = {
    contentBackgroundPrimary: '--color-content-background-primary',
    contentBackgroundSecondary: '--color-content-background-secondary',

    stateHover: '--color-state-hover',
    stateSelected: '--color-state-selected',
    stateSelectedHover: '--color-state-selected-hover',
    stateDisabled: '--color-state-disabled',

    accent: '--color-accent',
    accentHover: '--color-accent-hover',
    accentSelected: '--color-accent-selected',
    accentSelectedHover: '--color-accent-selected-hover',
    accentForeground: '--color-accent-foreground',

    statusSuccess: '--color-status-success',
    statusSuccessForeground: '--color-status-success-foreground',
    statusInformational: '--color-status-informational',
    statusInformationalForeground: '--color-status-informational-foreground',
    statusWarning: '--color-status-warning',
    statusWarningForeground: '--color-status-warning-foreground',
    statusDanger: '--color-status-danger',
    statusDangerForeground: '--color-status-danger-foreground',

    foregroundDefault: '--color-foreground-default',
    foregroundComplementary: '--color-foreground-complementary',
    foregroundInactive: '--color-foreground-inactive',
    foregroundDisabled: '--color-foreground-disabled',
    foregroundSecondary: '--color-foreground-secondary',

    mastheadBackground: '--color-masthead-background',
    mastheadForeground: '--color-masthead-foreground',
    mastheadButtonHover: '--color-masthead-button-hover',

    searchBackground: '--color-search-background',
    searchBackgroundHover: '--color-search-background-hover',
    searchTextHover: '--color-search-text-hover',
    searchTextPlaceholder: '--color-search-text-placeholder',
    searchButtonForeground: '--color-search-button-foreground',

    mainNavBackground: '--color-main-nav-background',
    mainNavBackgroundHover: '--color-main-nav-background-hover',
    mainNavBackgroundSelected: '--color-main-nav-background-selected',
    mainNavForegroundPrimary: '--color-main-nav-foreground-primary',
    mainNavForegroundSecondary: '--color-main-nav-foreground-secondary',

    globalBackgroundSuccess: '--color-global-background-success',
    globalForegroundSuccess: '--color-global-foreground-success',
    globalBackgroundInformational: '--color-global-background-informational',
    globalForegroundInformational: '--color-global-foreground-informational',
    globalBackgroundWarning: '--color-global-background-warning',
    globalForegroundWarning: '--color-global-foreground-warning',
    globalBackgroundError: '--color-global-background-error',
    globalForegroundError: '--color-global-foreground-error',
};

export const CommonDefaults = {
    globalBackgroundSuccess: '#dff6dd',
    globalBackgroundInformational: '#cef1ff',
    globalBackgroundWarning: '#fff4ce',
    globalBackgroundError: '#fde7e9',
    foregroundDisabled: '#a6a6a6',
    statusInformational: '#879092',
}

export const LightDefaults = {
    foregroundDefault: '#323130',
    contentBackgroundPrimary: '#ffffff',
    globalForegroundSuccess: '#323130',
    globalForegroundInformational: '#00418c',
    globalForegroundWarning: '#323130',
    globalForegroundError: '#a50606',
    statusSuccess: '#3bb44a',
    statusWarning: '#d58e00',
    statusDanger: '#a50606',
    foregroundInactive: '#666666',
    foregroundSecondary: '#dadada',
    stateDisabled: '#f3f2f1',
    accent: '#136bfb',
    mainNavBackground: '#f3f2f1',
};

export const DarkDefaults = {
    foregroundDefault: '#ffffff',
    contentBackgroundPrimary: '#292d30',
    globalForegroundSuccess: '#ffffff',
    globalForegroundInformational: '#3e97ff',
    globalForegroundWarning: '#ffffff',
    globalForegroundError: '#f94f4f',
    statusSuccess: '#89ff98',
    statusWarning: '#f2c80f',
    statusDanger: '#ff2828',
    foregroundInactive: '#f2f2f2',
    foregroundSecondary: '#434343',
    stateDisabled: '#31373e',
    accent: '#60aaff',
    mainNavBackground: '#31373e',
};