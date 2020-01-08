import { AvailableColors, LightDefaults, CustomizableColors, DarkDefaults, CommonDefaults } from "./customizeColors";
import ColorUtils from 'color';

function masthead(colors: AvailableColors, color: string) {
    colors.mastheadBackground = color;

    const mastheadBackground = ColorUtils(color);
    if (mastheadBackground.isLight()) {
        colors.mastheadForeground = LightDefaults.foregroundDefault;
        colors.mastheadButtonHover = mastheadBackground.darken(0.2).hex();
        content(colors, DarkDefaults.contentBackgroundPrimary);
    } else {
        colors.mastheadForeground = DarkDefaults.foregroundDefault;
        colors.mastheadButtonHover = mastheadBackground.lighten(0.2).hex();
        content(colors, LightDefaults.contentBackgroundPrimary);
    }
}

function content(colors: AvailableColors, color: string) {
    colors.contentBackgroundPrimary = color;

    const contentPrimaryColor = ColorUtils(color);
    if (contentPrimaryColor.isLight()) {
        colors.contentBackgroundSecondary = contentPrimaryColor.darken(0.2).hex();

        colors.foregroundDefault = LightDefaults.foregroundDefault;
        colors.foregroundComplementary = DarkDefaults.foregroundDefault;
        colors.foregroundInactive = LightDefaults.foregroundInactive;
        colors.foregroundDisabled = CommonDefaults.foregroundDisabled;
        colors.foregroundSecondary = contentPrimaryColor.darken(0.23).hex();

        colors.stateHover = contentPrimaryColor.darken(0.4).hex();
        colors.stateSelected = contentPrimaryColor.darken(0.6).hex();
        colors.stateSelectedHover = contentPrimaryColor.darken(0.8).hex();
        colors.stateDisabled = LightDefaults.stateDisabled;

        statusSuccess(colors, LightDefaults.statusSuccess);
        statusInformational(colors, CommonDefaults.statusInformational);
        statusWarning(colors, LightDefaults.statusWarning);
        statusDanger(colors, LightDefaults.statusDanger);
        navigation(colors, LightDefaults.mainNavBackground);
    } else {
        colors.contentBackgroundSecondary = contentPrimaryColor.lighten(0.2).hex();

        colors.foregroundDefault = DarkDefaults.foregroundDefault;
        colors.foregroundComplementary = LightDefaults.foregroundDefault;
        colors.foregroundInactive = DarkDefaults.foregroundInactive;
        colors.foregroundDisabled = CommonDefaults.foregroundDisabled;
        colors.foregroundSecondary = contentPrimaryColor.lighten(0.23).hex();

        colors.stateHover = contentPrimaryColor.darken(0.4).hex();
        colors.stateSelected = contentPrimaryColor.darken(0.6).hex();
        colors.stateSelectedHover = contentPrimaryColor.darken(0.8).hex();
        colors.stateDisabled = DarkDefaults.stateDisabled;

        statusSuccess(colors, DarkDefaults.statusSuccess);
        statusInformational(colors, CommonDefaults.statusInformational);
        statusWarning(colors, DarkDefaults.statusWarning);
        statusDanger(colors, DarkDefaults.statusDanger);
        navigation(colors, DarkDefaults.mainNavBackground);
    }

    notificationSuccess(colors, CommonDefaults.globalBackgroundSuccess);
    notificationInformational(colors, CommonDefaults.globalBackgroundInformational);
    notificationWarning(colors, CommonDefaults.globalBackgroundWarning);
    notificationError(colors, CommonDefaults.globalBackgroundError);
}

function navigation(colors: AvailableColors, color: string) {
    colors.mainNavBackground = color;

    const navigationColor = ColorUtils(color);
    if (navigationColor.isLight()) {
        colors.mainNavBackgroundHover = navigationColor.darken(0.10).hex();
        colors.mainNavBackgroundSelected = navigationColor.darken(0.23).hex();
        colors.mainNavForegroundPrimary = LightDefaults.foregroundDefault

        accent(colors, LightDefaults.accent);
    } else {
        colors.mainNavBackgroundHover = navigationColor.lighten(0.10).hex();
        colors.mainNavBackgroundSelected = navigationColor.lighten(0.23).hex();
        colors.mainNavForegroundPrimary = DarkDefaults.foregroundDefault;

        accent(colors, DarkDefaults.accent);
    }    

    colors.mainNavForegroundSecondary = colors.foregroundSecondary;
}

function accent(colors: AvailableColors, color: string) {
    colors.accent = color;

    const accentColor = ColorUtils(color);
    if (accentColor.isLight()) {
        colors.accentForeground = LightDefaults.foregroundDefault;

        colors.accentHover = accentColor.darken(0.35).hex();
        colors.accentSelected = accentColor.darken(0.60).hex();
        colors.accentSelectedHover = accentColor.darken(0.80).hex();
    } else {
        colors.accentForeground = DarkDefaults.foregroundDefault;

        colors.accentHover = accentColor.lighten(0.35).hex();
        colors.accentSelected = accentColor.lighten(0.60).hex();
        colors.accentSelectedHover = accentColor.lighten(0.80).hex();
    }
}

function statusSuccess(colors: AvailableColors, color: string) {
    colors.statusSuccess = color;

    const successColor = ColorUtils(color);
    colors.statusSuccessForeground = successColor.isLight()
        ? LightDefaults.foregroundDefault
        : DarkDefaults.foregroundDefault;
}

function statusInformational(colors: AvailableColors, color: string) {
    colors.statusInformational = color;

    const informationalColor = ColorUtils(color);
    colors.statusInformationalForeground = informationalColor.isLight()
        ? LightDefaults.foregroundDefault
        : DarkDefaults.foregroundDefault;
}

function statusWarning(colors: AvailableColors, color: string) {
    colors.statusWarning = color;

    const warningColor = ColorUtils(color);
    colors.statusWarningForeground = warningColor.isLight()
        ? LightDefaults.foregroundDefault
        : DarkDefaults.foregroundDefault;
}

function statusDanger(colors: AvailableColors, color: string) {
    colors.statusDanger = color;

    const dangercolor = ColorUtils(color);
    colors.statusDangerForeground = dangercolor.isLight()
        ? LightDefaults.foregroundDefault
        : DarkDefaults.foregroundDefault;
}

function notificationSuccess(colors: AvailableColors, color: string) {
    colors.globalBackgroundSuccess = color;

    const successColor = ColorUtils(color);
    colors.globalForegroundSuccess = successColor.isLight()
        ? LightDefaults.globalForegroundSuccess
        : DarkDefaults.globalForegroundSuccess;
}

function notificationInformational(colors: AvailableColors, color: string) {
    colors.globalBackgroundInformational = color;

    const informationalColor = ColorUtils(color);
    colors.globalForegroundInformational = informationalColor.isLight()
        ? LightDefaults.globalForegroundInformational
        : DarkDefaults.globalForegroundInformational;
}

function notificationWarning(colors: AvailableColors, color: string) {
    colors.globalBackgroundWarning = color;

    const warningColor = ColorUtils(color);
    colors.globalForegroundWarning = warningColor.isLight()
        ? LightDefaults.globalForegroundWarning
        : DarkDefaults.globalForegroundWarning;
}

function notificationError(colors: AvailableColors, color: string) {
    colors.globalBackgroundError = color;

    const errorColor = ColorUtils(color);
    colors.globalForegroundError = errorColor.isLight()
        ? LightDefaults.globalForegroundError
        : DarkDefaults.globalForegroundError;
}

const customizeMap = {
    [CustomizableColors.mastheadBackground]: masthead,
    [CustomizableColors.contentBackgroundPrimary]: content,
    [CustomizableColors.mainNavBackground]: navigation,
    [CustomizableColors.accent]: accent,
    [CustomizableColors.statusSuccess]: statusSuccess,
    [CustomizableColors.statusInformational]: statusInformational,
    [CustomizableColors.statusWarning]: statusWarning,
    [CustomizableColors.statusDanger]: statusDanger,
    [CustomizableColors.globalBackgroundSuccess]: notificationSuccess,
    [CustomizableColors.globalBackgroundInformational]: notificationInformational,
    [CustomizableColors.globalBackgroundWarning]: notificationWarning,
    [CustomizableColors.globalBackgroundError]: notificationError,
};

export default function customize(color: CustomizableColors, colors: AvailableColors, colorValue: string) {
    customizeMap[color](colors, colorValue);
}