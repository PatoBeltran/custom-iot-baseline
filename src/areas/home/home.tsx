import * as React from 'react';
import classnames from 'classnames/bind';
import { useTranslation } from '../../i18n';
import { ToggleField, CheckboxField, ComboField, RadioField, SelectField, TextAreaField, TextField } from '@microsoft/azure-iot-ux-fluent-controls/lib/components/Field';
import { Button } from '@microsoft/azure-iot-ux-fluent-controls/lib/components/Button';
import { Alert, AlertType } from '@microsoft/azure-iot-ux-fluent-controls/lib/components/Alert';
import { ActionTriggerButton, ActionTriggerLink } from '@microsoft/azure-iot-ux-fluent-controls/lib/components/ActionTrigger';
import { HorizontalLoader } from '@microsoft/azure-iot-ux-fluent-controls/lib/components/Loader';
import { Spinner } from '@microsoft/azure-iot-ux-fluent-controls/lib/components/Loader/Spinner';
import { Thumbnail } from '@microsoft/azure-iot-ux-fluent-controls/lib/components/Thumbnail';
import { GalleryCard, SolidBackground } from '@microsoft/azure-iot-ux-fluent-controls/lib/components/GalleryCard';
import { IconSize, Icon } from '@microsoft/azure-iot-ux-fluent-controls/lib/components/Icon';
import { List } from '../examples/list';
import * as InlinePopup from '@microsoft/azure-iot-ux-fluent-controls/lib/components/InlinePopup';
import { PivotMenu } from '@microsoft/azure-iot-ux-fluent-controls/lib/components/Pivot';
import { FormOption } from '@microsoft/azure-iot-ux-fluent-controls/lib/Common';
import SearchInput from '@microsoft/azure-iot-ux-fluent-controls/lib/components/SearchInput/SearchInput';
import { DateTimeField } from '@microsoft/azure-iot-ux-fluent-controls/lib/components/DateTime';
import { ThemeContext } from '../../shell/shell';

const cx = classnames.bind(require('./home.module.scss'));

export default function Home() {
    const [loc] = useTranslation();
    const [val, setVal] = React.useState(false);
    const [expanded, setExpanded] = React.useState(false);
    const [checkbox, setCheckbox] = React.useState(false);
    const [combo, setCombo] = React.useState<string | FormOption>('1');
    const [radio, setRadio] = React.useState<string | FormOption>('1');
    const [select, setSelect] = React.useState<string | FormOption>('1');
    const [textArea, setTextArea] = React.useState('');
    const [text, setText] = React.useState('');
    const [search, setSearch] = React.useState('');
    const [datetime, setDatetime] = React.useState('');
    const theme = React.useContext(ThemeContext);

    return (
        <>
            <h1 className={cx('header')}>{loc('navigation.home')}</h1>
            <div className={cx('control')}>
                <ToggleField name='toggle' label='Label' onChange={setVal} value={val} />
            </div>
            <div className={cx('control')}>
                <Button onClick={() =>{}}>Button</Button>
            </div>
            <div className={cx('control')}>
                <Button onClick={() =>{}} primary>Button</Button>
            </div>
            <div className={cx('control')}>
                <Button onClick={() =>{}} className='btn-danger'>Button</Button>
            </div>
            <div className={cx('control')}>
                <Button onClick={() =>{}} disabled>Button</Button>
            </div>
            <div className={cx('control')}>
                <Button onClick={() =>{}} primary disabled>Button</Button>
            </div>
            <div className={cx('control')}>
                <Button onClick={() =>{}} disabled className='btn-danger'>Button</Button>
            </div>
            <div className={cx('control')}>
                <ActionTriggerButton icon='add' label='Button' />
            </div>
            <div className={cx('control')}>
                <ActionTriggerLink icon='add' label='Link' href='' />
            </div>
            <div className={cx('control')}>
                <ActionTriggerButton icon='add' label='Button' disabled />
            </div>
            <div className={cx('control')}>
                <Alert onClose={() =>{}}>This is an alert!</Alert>
            </div>
            <div className={cx('control')}>
                <Alert onClose={() =>{}} type={AlertType.Warning}>This is an alert!</Alert>
            </div>
            <div className={cx('control')}>
                <Alert onClose={() =>{}} type={AlertType.Error}>This is an alert!</Alert>
            </div>
            {(theme === 'fluent-light' || theme === 'fluent-dark') && <div className={cx('control')}>
                <Alert onClose={() => { }} type={AlertType.Success}>This is an alert!</Alert>
            </div>}
            <div className={cx('control')}>
                <HorizontalLoader />
            </div>
            <div className={cx('control')} style={{ width: '50px', height: '50px', position: 'relative' }}>
                <Spinner />
            </div>
            <div className={cx('control')}>
                <Thumbnail size='search-result' kind='device' />
            </div>
            <div className={cx('control')}>
                <GalleryCard banner='Comming Soon' background={
                    <SolidBackground backgroundColor='blue' fixed>
                        <Icon icon='page' size={IconSize.large} centered className={cx('icon')} />
                    </SolidBackground>} fixed>
                    <header>This is the title</header>
                    <section>We here explain what this card is and why you should use it without any issues</section>
                </GalleryCard>
            </div>
            <div className={cx('control')}>
                <List />
            </div>
            <div className={cx('control')}>
                <InlinePopup.Container
                    expanded={expanded}
                    onClick={expanded ? () => setExpanded(false) : () => setExpanded(true)}>
                    <InlinePopup.Label>
                        <Icon icon='info' />
                    </InlinePopup.Label>
                    <InlinePopup.Panel alignment='left'>
                        <ul role='listbox' className={cx('option-list')}>
                            {['One', 'Two', 'Three'].map((option, index) =>
                                <li key={index} role='presentation'>
                                    <button
                                        data-idx={index}
                                        className={cx('inline-text-overflow')}>
                                        {option}
                                    </button>
                                </li>
                            )}
                        </ul>
                    </InlinePopup.Panel>
                </InlinePopup.Container>
            </div>
            <div className={cx('control')}>
                <PivotMenu links={[
                    {
                        key: 'one',
                        icon: 'add',
                        label: 'One',
                        href: ''
                    },
                    {
                        key: 'two',
                        icon: 'remove',
                        label: 'Two',
                        href: '',
                        disabled: true
                    },
                    {
                        key: 'three',
                        icon: 'checkMark',
                        label: 'Three',
                        href: ''
                    }
                ]} active='three' />
            </div>
            <div className={cx('control')}>
                <CheckboxField name='checkbox' label='Checkbox' value={checkbox} onChange={() => setCheckbox(c => !c)} />
            </div>
            <div className={cx('control')}>
                <CheckboxField disabled name='checkbox' label='Checkbox' value={checkbox} onChange={() => setCheckbox(c => !c)} />
            </div>
            <div className={cx('control')}>
                <ComboField
                    name='combo'
                    value={combo}
                    label='Combo'
                    options={[
                        { label: 'One', value: '1' },
                        { label: 'Two', value: '2' },
                        { label: 'Three', value: '3', disabled: true },
                        { label: 'Four', value: '4' },
                    ]}
                    onChange={setCombo}
                    optionSelect={(newValue, option) => {
                        return !!option && (newValue === option.value || (!!option.label && newValue === option.label.toString()));
                    }}
                />
            </div>
            <div className={cx('control')}>
                <ComboField
                    disabled
                    name='combo'
                    value={combo}
                    label='Combo'
                    options={[
                        { label: 'One', value: '1' },
                        { label: 'Two', value: '2' },
                        { label: 'Three', value: '3', disabled: true },
                        { label: 'Four', value: '4' },
                    ]}
                    onChange={setCombo}
                    optionSelect={(newValue, option) => {
                        return !!option && (newValue === option.value || (!!option.label && newValue === option.label.toString()));
                    }}
                />
            </div>
            <div className={cx('control')}>
                <RadioField name='radio' label='Radio' value={radio} options={[
                    { label: 'One', value: '1' },
                    { label: 'Two', value: '2' },
                    { label: 'Three', value: '3', disabled: true },
                    { label: 'Four', value: '4' }
                ]} onChange={setRadio} />
            </div>
            <div className={cx('control')}>
                <RadioField disabled name='radio' label='Radio' value={radio} options={[
                    { label: 'One', value: '1' },
                    { label: 'Two', value: '2' },
                    { label: 'Three', value: '3', disabled: true },
                    { label: 'Four', value: '4' }
                ]} onChange={setRadio} />
            </div>
            <div className={cx('control')}>
                <SelectField name='select' label='Select' value={select} options={[
                    { label: 'One', value: '1' },
                    { label: 'Two', value: '2' },
                    { label: 'Three', value: '3', disabled: true },
                    { label: 'Four', value: '4' }
                ]} onChange={setSelect} />
            </div>
            <div className={cx('control')}>
                <SelectField disabled name='select' label='Select' value={select} options={[
                    { label: 'One', value: '1' },
                    { label: 'Two', value: '2' },
                    { label: 'Three', value: '3', disabled: true },
                    { label: 'Four', value: '4' }
                ]} onChange={setSelect} />
            </div>
            <div className={cx('control')}>
                <TextAreaField name='textarea' label='TextArea' value={textArea} onChange={setTextArea} />
            </div>
            <div className={cx('control')}>
                <TextAreaField disabled name='textarea' label='TextArea' value={textArea} onChange={setTextArea} />
            </div>
            <div className={cx('control')}>
                <TextField name='text' label='Text' value={text} onChange={setText} />
            </div>
            <div className={cx('control')}>
                <TextField disabled name='text' label='Text' value={text} onChange={setText} />
            </div>
            <div className={cx('control')}>
                <TextField 
                    tooltip='This is some text for the tooltip' 
                    error='This is an error message' 
                    name='text' 
                    label='Text'
                    required 
                    value={text} 
                    onChange={setText} />
            </div>
            <div className={cx('control')}>
                <SearchInput label='Search' onSubmit={() => {}} onChange={setSearch} value={search} />
            </div>
            <div className={cx('control')}>
                <DateTimeField name='datetime' label='DateTime' initialValue={datetime} onChange={setDatetime} />
            </div>
            <div className={cx('control')}>
                <DateTimeField disabled name='datetime' label='DateTime' initialValue={datetime} onChange={setDatetime} />
            </div>
        </>
    );
}
