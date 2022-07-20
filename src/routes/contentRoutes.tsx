import React, { lazy } from 'react';
import { sidebarMenus } from '../menu';

const APP = {
	DASHBOARD: {
		PROJECT: lazy(() => import('../pages/presentation/dashboard/DashboardPage')),
		OVERVIEW: lazy(() => import('../pages/presentation/dashboard/hrm/Overview')),
		REPORTS: {
			PAYROLL: lazy(() => import('../pages/presentation/dashboard/hrm/reports/Payroll')),
			LEAVE: lazy(() => import('../pages/presentation/dashboard/hrm/reports/Leave')),
			MONTHLY_ATTENDANCE: lazy(
				() => import('../pages/presentation/dashboard/hrm/reports/MonthlyAttendance'),
			),
		},
	},
	ACCOUNTING_SYSTEM: {
		CUSTOMER: lazy(() => import('../pages/presentation/accounting-system/Customer')),
		VENDOR: lazy(() => import('../pages/presentation/accounting-system/Vendor')),
		PROPOSAL: lazy(() => import('../pages/presentation/accounting-system/Proposal')),
		BUDGET_PLANNER: lazy(() => import('../pages/presentation/accounting-system/BudgetPlanner')),
		FINANCIAL_GOAL: lazy(() => import('../pages/presentation/accounting-system/FinancialGoal')),
		ACCOUNTING_SETUP: lazy(
			() => import('../pages/presentation/accounting-system/AccountingSetup'),
		),
		PRINT_SETTING: lazy(() => import('../pages/presentation/accounting-system/PrintSetting')),
	},
	CRM_SYSTEM: {
		LEADS: lazy(() => import('../pages/presentation/crm-system/Leads')),
		DEALS: lazy(() => import('../pages/presentation/crm-system/Deals')),
		FORM_BUILDER: lazy(() => import('../pages/presentation/crm-system/FormBuilder')),
		CONTRACT: lazy(() => import('../pages/presentation/crm-system/Contract')),
		CRM_SYSTEM_SETUP: lazy(() => import('../pages/presentation/crm-system/CrmSystemSetup')),
	},
	HRM_SYSTEM: {
		EMPLOYEE_SETUP: lazy(() => import('../pages/presentation/hrm-system/EmployeeSetup')),
		PAYROLL_SETUP: {
			SET_SALARY: lazy(
				() => import('../pages/presentation/hrm-system/payroll-setup/SetSalary'),
			),
			PAYSLIP: lazy(() => import('../pages/presentation/hrm-system/payroll-setup/Paysilp')),
		},
		LEAVE_MANAGEMENT: {
			MANAGE_LEAVE: lazy(
				() => import('../pages/presentation/hrm-system/leave-management-setup/ManageLeave'),
			),
			ATTENDANCE: {
				MARK_ATTENDANCE: lazy(
					() =>
						import(
							'../pages/presentation/hrm-system//leave-management-setup/attendance/MarkAttendance'
						),
				),
				BULK_ATTENDANCE: lazy(
					() =>
						import(
							'../pages/presentation/hrm-system//leave-management-setup/attendance/BulkAttendance'
						),
				),
			},
		},
		PERFORMANCE_SETUP: {
			INDICATOR: lazy(
				() => import('../pages/presentation/hrm-system/performance-setup/Indicator'),
			),
			APPRAISAL: lazy(
				() => import('../pages/presentation/hrm-system/performance-setup/Appraisal'),
			),
			GOAL_TRACKING: lazy(
				() => import('../pages/presentation/hrm-system/performance-setup/GoalTracking'),
			),
		},
		TRAINING_SETUP: {
			TRAINING_LIST: lazy(
				() => import('../pages/presentation/hrm-system/training-setup/TrainingList'),
			),
			TRAINER: lazy(() => import('../pages/presentation/hrm-system/training-setup/Trainer')),
		},
		RECRUITMENT_SETUP: {
			JOB: lazy(() => import('../pages/presentation/hrm-system/recruitment-setup/Jobs')),
			JOB_CREATE: lazy(
				() => import('../pages/presentation/hrm-system/recruitment-setup/JobCreate'),
			),
			JOB_APPLICATION: lazy(
				() => import('../pages/presentation/hrm-system/recruitment-setup/JobApplication'),
			),
			JOB_CANDIDATE: lazy(
				() => import('../pages/presentation/hrm-system/recruitment-setup/JobCandidate'),
			),
			JOB_ONBOARDING: lazy(
				() => import('../pages/presentation/hrm-system/recruitment-setup/JobOnBoarding'),
			),
			CUSTOM_QUESTION: lazy(
				() => import('../pages/presentation/hrm-system/recruitment-setup/CustomQuestion'),
			),
			INTERVIEW_SCHEDULE: lazy(
				() =>
					import('../pages/presentation/hrm-system/recruitment-setup/InterviewSchedule'),
			),
			CAREER: lazy(() => import('../pages/presentation/hrm-system/recruitment-setup/Career')),
		},
		HR_ADMIN_SETUP: {
			AWARD: lazy(() => import('../pages/presentation/hrm-system/hr-admin-setup/Award')),
			TRANSFER: lazy(
				() => import('../pages/presentation/hrm-system/hr-admin-setup/Transfer'),
			),
			RESIGNATION: lazy(
				() => import('../pages/presentation/hrm-system/hr-admin-setup/Resignation'),
			),
			TRIP: lazy(() => import('../pages/presentation/hrm-system/hr-admin-setup/Trip')),
			PROMOTION: lazy(
				() => import('../pages/presentation/hrm-system/hr-admin-setup/Promotion'),
			),
			COMPLAINTS: lazy(
				() => import('../pages/presentation/hrm-system/hr-admin-setup/Complaints'),
			),
			WARNING: lazy(() => import('../pages/presentation/hrm-system/hr-admin-setup/Warning')),
			TERMINATION: lazy(
				() => import('../pages/presentation/hrm-system/hr-admin-setup/Termination'),
			),
			ANNOUNCEMENT: lazy(
				() => import('../pages/presentation/hrm-system/hr-admin-setup/Announcement'),
			),
			HOLIDAYS: lazy(
				() => import('../pages/presentation/hrm-system/hr-admin-setup/Holidays'),
			),
		},
		EVENT_SETUP: lazy(() => import('../pages/presentation/hrm-system/EventSetup')),
		MEETING: lazy(() => import('../pages/presentation/hrm-system/Meeting')),
		EMPLOYEES_ASSET_SETUP: lazy(
			() => import('../pages/presentation/hrm-system/EmployeesAssetSetup'),
		),
		DOCUMENT_SETUP: lazy(() => import('../pages/presentation/hrm-system/DocumentSetup')),
		COMPANY_POLICY: lazy(() => import('../pages/presentation/hrm-system/DocumentSetup')),
		HRM_SYSTEM_SETUP: lazy(() => import('../pages/presentation/hrm-system/HrmSystemSetup')),
	},
	PROJECT_SYSTEM: {
		PROJECT: lazy(() => import('../pages/presentation/project-system/Projects')),
		TASKS: lazy(() => import('../pages/presentation/project-system/Tasks')),
		BUG: lazy(() => import('../pages/presentation/project-system/Bug')),
		TIMESHEET: lazy(() => import('../pages/presentation/project-system/Timesheet')),
		TRACKER: lazy(() => import('../pages/presentation/project-system/Tracker')),
		PROJECT_SYSTEM_SETUP: lazy(
			() => import('../pages/presentation/project-system/ProjectSystemSetup'),
		),
	},
	USER_MANAGEMENT: {
		USER: lazy(() => import('../pages/presentation/user-management/User')),
		ROLE: lazy(() => import('../pages/presentation/user-management/Role')),
		CLIENT: lazy(() => import('../pages/presentation/user-management/Client')),
	},
	PRODUCT_SYSTEM: {
		ROLE: lazy(() => import('../pages/presentation/product-system/Role')),
		CLIENT: lazy(() => import('../pages/presentation/product-system/Client')),
	},
	SYSTEM_SETUP: {
		SYSTEM_SETTINGS: lazy(() => import('../pages/presentation/system-setup/SystemSettings')),
		SETUP_SUSBSCRIPTION_PLANS: lazy(
			() => import('../pages/presentation/system-setup/SetupSubscriptionPlans'),
		),
		ORDER: lazy(() => import('../pages/presentation/system-setup/Order')),
	},
	MESSENGER: lazy(() => import('../pages/presentation/messenger/Messenger')),
	ZOOM_MEETING: lazy(() => import('../pages/presentation/zoom-meeting/ZoomMeeting')),
	SUPPORT_SYSTEM: lazy(() => import('../pages/presentation/support-system/SupportSystem')),
};

const presentation = [
	// >>>>>>>>> Dashboard
	{
		path: sidebarMenus.dashboard.path,
		element: <APP.HRM_SYSTEM.EMPLOYEE_SETUP />,
		exact: true,
	},
	{
		path: sidebarMenus.dashboard.subMenu.hrm.subMenu.overView.path,
		element: <APP.HRM_SYSTEM.EMPLOYEE_SETUP />,
		exact: true,
	},
	{
		path: sidebarMenus.dashboard.path,
		element: <APP.HRM_SYSTEM.EMPLOYEE_SETUP />,
		exact: true,
	},
	{
		path: sidebarMenus.dashboard.path,
		element: <APP.HRM_SYSTEM.EMPLOYEE_SETUP />,
		exact: true,
	},
	//>>>>>>>>>> App > HRM system
	{
		path: sidebarMenus.hrmSystem.subMenu.EmplyeeSetup.path,
		element: <APP.DASHBOARD.PROJECT />,
		exact: true,
	},
	{
		path: sidebarMenus.hrmSystem.subMenu.payrollSetup.subMenu.setSalary.path,
		element: <APP.HRM_SYSTEM.PAYROLL_SETUP.SET_SALARY />,
		exact: true,
	},
	{
		path: sidebarMenus.hrmSystem.subMenu.payrollSetup.subMenu.paySlip.path,
		element: <APP.HRM_SYSTEM.PAYROLL_SETUP.PAYSLIP />,
		exact: true,
	},
	{
		path: sidebarMenus.hrmSystem.subMenu.leaveManagementSetup.subMenu.manageLeave.path,
		element: <APP.HRM_SYSTEM.LEAVE_MANAGEMENT.MANAGE_LEAVE />,
		exact: true,
	},
	{
		path: sidebarMenus.hrmSystem.subMenu.leaveManagementSetup.subMenu.attendance?.subMenu
			.bulkAttendance.path,
		element: <APP.HRM_SYSTEM.LEAVE_MANAGEMENT.ATTENDANCE.BULK_ATTENDANCE />,
		exact: true,
	},
	{
		path: sidebarMenus.hrmSystem.subMenu.leaveManagementSetup.subMenu.attendance?.subMenu
			.markAttendance.path,
		element: <APP.HRM_SYSTEM.LEAVE_MANAGEMENT.ATTENDANCE.MARK_ATTENDANCE />,
		exact: true,
	},

	{
		path: sidebarMenus.hrmSystem.subMenu.performanceSetup.subMenu.indicator.path,
		element: <APP.HRM_SYSTEM.PERFORMANCE_SETUP.INDICATOR />,
		exact: true,
	},
	{
		path: sidebarMenus.hrmSystem.subMenu.performanceSetup.subMenu.appraisal.path,
		element: <APP.HRM_SYSTEM.PERFORMANCE_SETUP.APPRAISAL />,
		exact: true,
	},
	{
		path: sidebarMenus.hrmSystem.subMenu.performanceSetup.subMenu.goalTracking.path,
		element: <APP.HRM_SYSTEM.PERFORMANCE_SETUP.GOAL_TRACKING />,
		exact: true,
	},

	{
		path: sidebarMenus.hrmSystem.subMenu.trainingSetup.subMenu.trainingList.path,
		element: <APP.HRM_SYSTEM.TRAINING_SETUP.TRAINING_LIST />,
		exact: true,
	},
	{
		path: sidebarMenus.hrmSystem.subMenu.trainingSetup.subMenu.trainer.path,
		element: <APP.HRM_SYSTEM.TRAINING_SETUP.TRAINER />,
		exact: true,
	},
	{
		path: sidebarMenus.hrmSystem.subMenu.recruitmentSetup.subMenu.jobs.path,
		element: <APP.HRM_SYSTEM.RECRUITMENT_SETUP.JOB />,
		exact: true,
	},

	{
		path: sidebarMenus.hrmSystem.subMenu.recruitmentSetup.subMenu.jobCreate.path,
		element: <APP.HRM_SYSTEM.RECRUITMENT_SETUP.JOB_CREATE />,
		exact: true,
	},
	{
		path: sidebarMenus.hrmSystem.subMenu.recruitmentSetup.subMenu.jobApplication.path,
		element: <APP.HRM_SYSTEM.RECRUITMENT_SETUP.JOB_APPLICATION />,
		exact: true,
	},
	{
		path: sidebarMenus.hrmSystem.subMenu.recruitmentSetup.subMenu.jobCandidate.path,
		element: <APP.HRM_SYSTEM.RECRUITMENT_SETUP.JOB_CANDIDATE />,
		exact: true,
	},

	{
		path: sidebarMenus.hrmSystem.subMenu.recruitmentSetup.subMenu.jobOnBoarding.path,
		element: <APP.HRM_SYSTEM.RECRUITMENT_SETUP.JOB_ONBOARDING />,
		exact: true,
	},
	{
		path: sidebarMenus.hrmSystem.subMenu.recruitmentSetup.subMenu.customQuestion.path,
		element: <APP.HRM_SYSTEM.RECRUITMENT_SETUP.CUSTOM_QUESTION />,
		exact: true,
	},
	{
		path: sidebarMenus.hrmSystem.subMenu.recruitmentSetup.subMenu.interviewSchedule.path,
		element: <APP.HRM_SYSTEM.RECRUITMENT_SETUP.INTERVIEW_SCHEDULE />,
		exact: true,
	},
	/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
	{
		path: sidebarMenus.hrmSystem.subMenu.recruitmentSetup.subMenu.interviewSchedule.path,
		element: <APP.HRM_SYSTEM.RECRUITMENT_SETUP.INTERVIEW_SCHEDULE />,
		exact: true,
	},
	{
		path: sidebarMenus.hrmSystem.subMenu.adminSetup.subMenu.award.path,
		element: <APP.HRM_SYSTEM.HR_ADMIN_SETUP.AWARD />,
		exact: true,
	},
	{
		path: sidebarMenus.hrmSystem.subMenu.adminSetup.subMenu.transfer.path,
		element: <APP.HRM_SYSTEM.HR_ADMIN_SETUP.TRANSFER />,
		exact: true,
	},
	{
		path: sidebarMenus.hrmSystem.subMenu.adminSetup.subMenu.resignation.path,
		element: <APP.HRM_SYSTEM.HR_ADMIN_SETUP.RESIGNATION />,
		exact: true,
	},
	{
		path: sidebarMenus.hrmSystem.subMenu.adminSetup.subMenu.trip.path,
		element: <APP.HRM_SYSTEM.HR_ADMIN_SETUP.TRIP />,
		exact: true,
	},
	{
		path: sidebarMenus.hrmSystem.subMenu.adminSetup.subMenu.promotion.path,
		element: <APP.HRM_SYSTEM.HR_ADMIN_SETUP.PROMOTION />,
		exact: true,
	},
	{
		path: sidebarMenus.hrmSystem.subMenu.adminSetup.subMenu.complaints.path,
		element: <APP.HRM_SYSTEM.HR_ADMIN_SETUP.COMPLAINTS />,
		exact: true,
	},
	{
		path: sidebarMenus.hrmSystem.subMenu.adminSetup.subMenu.warning.path,
		element: <APP.HRM_SYSTEM.HR_ADMIN_SETUP.WARNING />,
		exact: true,
	},
	{
		path: sidebarMenus.hrmSystem.subMenu.adminSetup.subMenu.termination.path,
		element: <APP.HRM_SYSTEM.HR_ADMIN_SETUP.TERMINATION />,
		exact: true,
	},
	//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

	{
		path: sidebarMenus.hrmSystem.subMenu.recruitmentSetup.subMenu.career.path,
		element: <APP.HRM_SYSTEM.RECRUITMENT_SETUP.CAREER />,
		exact: true,
	},
	{
		path: sidebarMenus.hrmSystem.subMenu.documentSetup.path,
		element: <APP.HRM_SYSTEM.DOCUMENT_SETUP />,
		exact: true,
	},
	{
		path: sidebarMenus.hrmSystem.subMenu.companyPolicy.path,
		element: <APP.HRM_SYSTEM.COMPANY_POLICY />,
		exact: true,
	},
	{
		path: sidebarMenus.hrmSystem.subMenu.hrmSystemSetup.path,
		element: <APP.HRM_SYSTEM.HRM_SYSTEM_SETUP />,
		exact: true,
	},
	{
		path: sidebarMenus.hrmSystem.subMenu.eventSetup.path,
		element: <APP.HRM_SYSTEM.EVENT_SETUP />,
		exact: true,
	},
	{
		path: sidebarMenus.hrmSystem.subMenu.meeting.path,
		element: <APP.HRM_SYSTEM.MEETING />,
		exact: true,
	},
	{
		path: sidebarMenus.hrmSystem.subMenu.employeesAssetSetup.path,
		element: <APP.HRM_SYSTEM.EMPLOYEES_ASSET_SETUP />,
		exact: true,
	},
	{
		path: sidebarMenus.hrmSystem.subMenu.documentSetup.path,
		element: <APP.HRM_SYSTEM.DOCUMENT_SETUP />,
		exact: true,
	},
	{
		path: sidebarMenus.hrmSystem.subMenu.companyPolicy.path,
		element: <APP.HRM_SYSTEM.COMPANY_POLICY />,
		exact: true,
	},
	{
		path: sidebarMenus.hrmSystem.subMenu.hrmSystemSetup.path,
		element: <APP.HRM_SYSTEM.HRM_SYSTEM_SETUP />,
		exact: true,
	},

	// App > Accounting system

	// {
	// 	path: sidebarMenus.accountingSystem.subMenu.customer.path,
	// 	element: <APP.ACCOUNTING_SYSTEM.CUSTOMER />,
	// 	exact: true,
	// },
	// {
	// 	path: sidebarMenus.accountingSystem.subMenu.vendor.path,
	// 	element: <APP.ACCOUNTING_SYSTEM.VENDOR />,
	// 	exact: true,
	// },
	// {
	// 	path: sidebarMenus.accountingSystem.subMenu.proposal.path,
	// 	element: <APP.ACCOUNTING_SYSTEM.PROPOSAL />,
	// 	exact: true,
	// },
	// {
	// 	path: sidebarMenus.accountingSystem.subMenu.budgetPlanner.path,
	// 	element: <APP.ACCOUNTING_SYSTEM.BUDGET_PLANNER />,
	// 	exact: true,
	// },
	// {
	// 	path: sidebarMenus.accountingSystem.subMenu.financialGoal.path,
	// 	element: <APP.ACCOUNTING_SYSTEM.FINANCIAL_GOAL />,
	// 	exact: true,
	// },
	// {
	// 	path: sidebarMenus.accountingSystem.subMenu.accountingSetup.path,
	// 	element: <APP.ACCOUNTING_SYSTEM.ACCOUNTING_SETUP />,
	// 	exact: true,
	// },
	// {
	// 	path: sidebarMenus.accountingSystem.subMenu.printSettings.path,
	// 	element: <APP.ACCOUNTING_SYSTEM.PRINT_SETTING />,
	// 	exact: true,
	// },

	// App > Project system
	{
		path: sidebarMenus.projectSystem.subMenu.projects.path,
		element: <APP.PROJECT_SYSTEM.PROJECT />,
		exact: true,
	},
	{
		path: sidebarMenus.projectSystem.subMenu.tasks.path,
		element: <APP.PROJECT_SYSTEM.TASKS />,
		exact: true,
	},
	{
		path: sidebarMenus.projectSystem.subMenu.bug.path,
		element: <APP.PROJECT_SYSTEM.BUG />,
		exact: true,
	},
	{
		path: sidebarMenus.projectSystem.subMenu.timesheet.path,
		element: <APP.PROJECT_SYSTEM.TIMESHEET />,
		exact: true,
	},
	{
		path: sidebarMenus.projectSystem.subMenu.tracker.path,
		element: <APP.PROJECT_SYSTEM.TRACKER />,
		exact: true,
	},
	{
		path: sidebarMenus.projectSystem.subMenu.setup.path,
		element: <APP.PROJECT_SYSTEM.PROJECT_SYSTEM_SETUP />,
		exact: true,
	},

	// App > HRM System

	// {
	// 	path: sidebarMenus.projectSystem.subMenu.projects.path,
	// 	element: <APP.PROJECT_SYSTEM.PROJECT />,
	// 	exact: true,
	// },
	// {
	// 	path: sidebarMenus.projectSystem.subMenu.tasks.path,
	// 	element: <APP.PROJECT_SYSTEM.TASKS />,
	// 	exact: true,
	// },
	// {
	// 	path: sidebarMenus.projectSystem.subMenu.bug.path,
	// 	element: <APP.PROJECT_SYSTEM.BUG />,
	// 	exact: true,
	// },
	// {
	// 	path: sidebarMenus.projectSystem.subMenu.timesheet.path,
	// 	element: <APP.PROJECT_SYSTEM.TIMESHEET />,
	// 	exact: true,
	// },
	// {
	// 	path: sidebarMenus.projectSystem.subMenu.tracker.path,
	// 	element: <APP.PROJECT_SYSTEM.TRACKER />,
	// 	exact: true,
	// },
	// {
	// 	path: sidebarMenus.projectSystem.subMenu.projectSystemSetup.path,
	// 	element: <APP.PROJECT_SYSTEM.PROJECT_SYSTEM_SETUP />,
	// 	exact: true,
	// },

	// App > CRM system

	{
		path: sidebarMenus.crmSystem.subMenu.leads.path,
		element: <APP.CRM_SYSTEM.LEADS />,
		exact: true,
	},
	{
		path: sidebarMenus.crmSystem.subMenu.deals.path,
		element: <APP.CRM_SYSTEM.DEALS />,
		exact: true,
	},
	{
		path: sidebarMenus.crmSystem.subMenu.formBuilder.path,
		element: <APP.CRM_SYSTEM.FORM_BUILDER />,
		exact: true,
	},
	{
		path: sidebarMenus.crmSystem.subMenu.contract.path,
		element: <APP.CRM_SYSTEM.CONTRACT />,
		exact: true,
	},
	// {
	// 	path: sidebarMenus.crmSystem.subMenu.tracker.path,
	// 	element: <APP.CRM_SYSTEM.TRACKER />,
	// 	exact: true,
	// },
	{
		path: sidebarMenus.crmSystem.subMenu.setup.path,
		element: <APP.CRM_SYSTEM.CRM_SYSTEM_SETUP />,
		exact: true,
	},

	// App > User management
	{
		path: sidebarMenus.userManagement.subMenu.user.path,
		element: <APP.USER_MANAGEMENT.USER />,
		exact: true,
	},
	{
		path: sidebarMenus.userManagement.subMenu.role.path,
		element: <APP.USER_MANAGEMENT.ROLE />,
		exact: true,
	},
	{
		path: sidebarMenus.userManagement.subMenu.client.path,
		element: <APP.USER_MANAGEMENT.CLIENT />,
		exact: true,
	},

	// App > Product System
	{
		path: sidebarMenus.productsSystem.subMenu.productAndServices.path,
		element: <APP.PRODUCT_SYSTEM.ROLE />,
		exact: true,
	},
	{
		path: sidebarMenus.productsSystem.subMenu.productStock.path,
		element: <APP.PRODUCT_SYSTEM.CLIENT />,
		exact: true,
	},
	// App > System Setup
	{
		path: sidebarMenus.systemSetup.subMenu.order.path,
		element: <APP.SYSTEM_SETUP.ORDER />,
		exact: true,
	},
	{
		path: sidebarMenus.systemSetup.subMenu.setupSubscriptionPlans.path,
		element: <APP.SYSTEM_SETUP.SETUP_SUSBSCRIPTION_PLANS />,
		exact: true,
	},
	{
		path: sidebarMenus.systemSetup.subMenu.systemSettings.path,
		element: <APP.SYSTEM_SETUP.SYSTEM_SETTINGS />,
		exact: true,
	},
	// App > messenger
	{
		path: sidebarMenus.messenger.path,
		element: <APP.MESSENGER />,
		exact: true,
	},
	// App > Zoom meeting
	{
		path: sidebarMenus.zoomMeeting.path,
		element: <APP.ZOOM_MEETING />,
		exact: true,
	},
	// App > Support system
	{
		path: sidebarMenus.supportSystem.path,
		element: <APP.SUPPORT_SYSTEM />,
		exact: true,
	},
];

const contents = [...presentation];

export default contents;
