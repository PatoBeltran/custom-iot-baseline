import * as React from 'react';
import { ContextPanel } from '@microsoft/azure-iot-ux-fluent-controls/lib/components/ContextPanel';
import { TranslationFunction } from '../i18n';

export interface Properties {
    loc: TranslationFunction;
    onCancel: () => void;
}

export function HelpPanel({ loc, onCancel }: Properties) {
    return (
        <ContextPanel header={loc('help.title')} onClose={onCancel} attr={{ footer: { style: 'display: flex; justify-content: space-around'}}}>
            <a className='link' href='https://github.com/Azure/iot-ux-baseline' target='_blank' rel='noopener noreferrer'>{loc('help.getStarted')}</a>
        </ContextPanel>
    );
}
