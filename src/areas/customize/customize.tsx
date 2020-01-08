import * as React from 'react';

import classnames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { SliderPicker } from 'react-color';
import { ActionTriggerButton } from '@microsoft/azure-iot-ux-fluent-controls/lib/components/ActionTrigger';
import customize from './customizeFunctions';
import { AvailableColors, CustomizableColors, ColorDefinitions } from './customizeColors';

const cx = classnames.bind(require('./customize.module.scss'));

function reducer(state: AvailableColors, action: { color: CustomizableColors; value: string }): AvailableColors {
  const newState: AvailableColors = { ...state };

  // Updated derived colors based on the one being modified
  customize(action.color, newState, action.value);

  return newState;
}

function initState(styles: CSSStyleDeclaration): AvailableColors {
  const availableColors: any = {};
  for (const [colorName, colorValue] of Object.entries(ColorDefinitions)) {
    availableColors[colorName] = styles.getPropertyValue(colorValue as string);
  }

  return availableColors;
}

export function Customize() {
  const [loc] = useTranslation();
  const styles = React.useMemo(() => window.getComputedStyle(document.documentElement), []);
  const [colors, dispatch] = React.useReducer(reducer, styles, initState);

  const [detailOpen, setDetailOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    for (const color in colors) {
      document.documentElement.style.setProperty(ColorDefinitions[color as keyof AvailableColors], colors[color as keyof AvailableColors]);
    }
  }, [colors]);

  const toggleDetails = React.useCallback(() => {
    setDetailOpen(expanded => !expanded);
  }, []);

  const setColor = React.useCallback((color: CustomizableColors) => (value: string) => dispatch({ color, value }), [dispatch]);

  return (
    <div className={cx('container')}>
      <h1 className={cx("header")}>{loc("navigation.customize")}</h1>
      <ColorSelector displayName={loc('customize.masthead')} color={colors.mastheadBackground} onChange={setColor(CustomizableColors.mastheadBackground)} />
      <Accordion expanded={detailOpen} onToggle={toggleDetails} label={loc('customize.details')}>
        <ColorSelector displayName={loc('customize.content')} color={colors.contentBackgroundPrimary} onChange={setColor(CustomizableColors.contentBackgroundPrimary)} />
        <ColorSelector displayName={loc('customize.navigation')} color={colors.mainNavBackground} onChange={setColor(CustomizableColors.mainNavBackground)} />
        <ColorSelector displayName={loc('customize.accent')} color={colors.accent} onChange={setColor(CustomizableColors.accent)} />
        <h2 className={cx('header')}>{loc('customize.status.title')}</h2>
        <ColorSelector displayName={loc('customize.status.success')} color={colors.statusSuccess} onChange={setColor(CustomizableColors.statusSuccess)} />
        <ColorSelector displayName={loc('customize.status.informational')} color={colors.statusInformational} onChange={setColor(CustomizableColors.statusInformational)} />
        <ColorSelector displayName={loc('customize.status.warning')} color={colors.statusWarning} onChange={setColor(CustomizableColors.statusWarning)} />
        <ColorSelector displayName={loc('customize.status.danger')} color={colors.statusDanger} onChange={setColor(CustomizableColors.statusDanger)} />
        <h2 className={cx('header')}>{loc('customize.notifications.title')}</h2>
        <ColorSelector displayName={loc('customize.notifications.success')} color={colors.globalBackgroundSuccess} onChange={setColor(CustomizableColors.globalBackgroundSuccess)} />
        <ColorSelector displayName={loc('customize.notifications.informational')} color={colors.globalBackgroundInformational} onChange={setColor(CustomizableColors.globalBackgroundInformational)} />
        <ColorSelector displayName={loc('customize.notifications.warning')} color={colors.globalBackgroundWarning} onChange={setColor(CustomizableColors.globalBackgroundWarning)} />
        <ColorSelector displayName={loc('customize.notifications.error')} color={colors.globalBackgroundError} onChange={setColor(CustomizableColors.globalBackgroundError)} />
      </Accordion>
    </div>
  );
}

interface ColorSelectorProperties {
  displayName: string;
  color?: string;
  onChange: (color: string) => void;
}

function ColorSelector({ displayName, color, onChange }: ColorSelectorProperties) {
  const handleColorChange = React.useCallback((color) => {
    onChange(color.hex);
  }, [onChange]);

  return (
    <div className={cx('color-container')}>
      <h3>{displayName}</h3>
      <SliderPicker 
        color={color}
        onChangeComplete={handleColorChange} />
    </div>
  );
}

interface AccordionProperties {
  expanded: boolean;
  onToggle: () => void;
  label: string;
  children: React.ReactNode;
}

function Accordion({label, onToggle, expanded, children}: AccordionProperties) {
  return (
    <div className={cx('accordion-container')}>
      <ActionTriggerButton 
        onClick={onToggle} 
        icon={expanded ? 'chevronUp' : 'chevronDown'}
        label={label}
      />
      {expanded && children}
    </div>
  );
}