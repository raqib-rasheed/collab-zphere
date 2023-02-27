import React, { useState } from 'react';
import Button from '../../../components/bootstrap/Button';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import PresentaionPagesSubHeader from '../../../widgets/PresentaionPagesSubHeader';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import BusinessSetting from './system-settings/BusinessSetting';
import CompanySetting from './system-settings/CompanySetting';
import SystemSetting from './system-settings/SystemSettings';
import PaymentSetting from './system-settings/PaymentSetting';
import ZoomMeetingSetting from './system-settings/ZoomMeetingSetting';
import SlackSetting from './system-settings/SlackSetting';
import TelegramSetting from './system-settings/TelegramSetting';
import TwillioSetting from './system-settings/TwilloSetting';
import EmailNotificationSetting from './system-settings/EmailNotificationSettings';
import OfferLetterSettings from './system-settings/OfferLetterSettings';
import JoiningLetterSettings from './system-settings/JoiningLetterSettings';
import GoogleCalendarSettings from './system-settings/GoogleCalendarSettings';
import NOCSettings from './system-settings/NOCSettings';
import ExperienceCertificateSettings from './system-settings/ExperienceCertificateSettings';

type TColumnTitles =
	| 'Business setting'
	| 'System Setting'
	| 'Company Setting'
	| 'Payment Setting'
	| 'Zoom-Meeting Setting'
	| 'Slack Setting'
	| 'Telegram Setting'
	| 'Twillio Setting'
	| 'Email Notification Settings'
	| 'Offer Letter Settings'
	| 'Joining Letter Settings'
	| 'Experience Certificate Settings'
	| 'NOC Settings'
	| 'Google Calendar Settings';

const SystemSettings = () => {
	const TABS = {
		BUSINESS_SETTING: 'Business setting',
		SYSTEM_SETTING: 'System Setting',
		COMPANY_SETTING: 'Company Setting',
		PAYMENT_SETTING: 'Payment Setting',
		ZOOM_MEETING_SETTING: 'Zoom-Meeting Setting',
		SLACK_SETTING: 'Slack Setting',
		TELEGRAM_SETTING: 'Telegram Setting',
		TWILLO_SETTING: 'Twillio Setting',
		EMAIL_NOTIFICATION_SETTINGS: 'Email Notification Settings',
		OFFER_LETTER_SETTINGS: 'Offer Letter Settings',
		JOINING_LETTER_SETTINGS: 'Joining Letter Settings',
		EC_SETTINGS: 'Experience Certificate Settings',
		NOC_SETTINGS: 'NOC Settings',
		GOOGLE_CALENDAR_SETTINGS: 'Google Calendar Settings',
	};

	const [activeTab, setActiveTab] = useState<TColumnTitles>('Business setting');

	return (
		<PageWrapper title='Holidays'>
			<PresentaionPagesSubHeader title='Manage Competencies' />
			<Page container='fluid'>
				<div className='row h-100'>
					<div className='col-xxl-3 col-xl-4 col-lg-6'>
						<Card stretch>
							<CardBody isScrollable>
								<div className='row g-3'>
									{Object.values(TABS)?.map((tab: any) => {
										return (
											<div key={tab} className='col-12'>
												<Button
													color='info'
													className='w-100 p-3'
													isLight={tab !== activeTab}
													onClick={() => setActiveTab(tab)}>
													{tab}
												</Button>
											</div>
										);
									})}
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-xxl-9 col-xl-8 col-lg-6'>
						<Card stretch>
							{activeTab === 'Business setting' && <BusinessSetting />}
							{activeTab === 'System Setting' && <SystemSetting />}
							{activeTab === 'Company Setting' && <CompanySetting />}
							{activeTab === 'Payment Setting' && <PaymentSetting />}
							{activeTab === 'Zoom-Meeting Setting' && <ZoomMeetingSetting />}
							{activeTab === 'Slack Setting' && <SlackSetting />}
							{activeTab === 'Telegram Setting' && <TelegramSetting />}
							{activeTab === 'Twillio Setting' && <TwillioSetting />}
							{activeTab === 'Email Notification Settings' && (
								<EmailNotificationSetting />
							)}
							{activeTab === 'Offer Letter Settings' && <OfferLetterSettings />}
							{activeTab === 'Joining Letter Settings' && <JoiningLetterSettings />}
							{activeTab === 'Experience Certificate Settings' && (
								<ExperienceCertificateSettings />
							)}
							{activeTab === 'NOC Settings' && <NOCSettings />}
							{activeTab === 'Google Calendar Settings' && <GoogleCalendarSettings />}
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default SystemSettings;
