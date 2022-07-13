import React, { lazy } from 'react';
import { sidebarMenus } from '../menu';
// import Login from '../pages/presentation/auth/Login';

const LANDING = {
	DASHBOARD: lazy(() => import('../pages/dashboard/DashboardPage')),
	DASHBOARD_BOOKING: lazy(() => import('../pages/dashboard/DashboardBookingPage')),
	SUMMARY: lazy(() => import('../pages/SummaryPage')),
};

// const AUTH = {
// 	PAGE_404: lazy(() => import('../pages/presentation/auth/Page404')),
// };

const APP = {
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
	// 	/**
	// 	 * Landing
	// 	 */
	{
		path: sidebarMenus.dashboard.path,
		element: <LANDING.DASHBOARD />,
		exact: true,
	},
	// App > HRM system
	{
		path: sidebarMenus.hrmSystem.subMenu.emplyeeSetup.path,
		element: <APP.HRM_SYSTEM.EMPLOYEE_SETUP />,
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

	{
		path: sidebarMenus.accountingSystem.subMenu.customer.path,
		element: <APP.ACCOUNTING_SYSTEM.CUSTOMER />,
		exact: true,
	},
	{
		path: sidebarMenus.accountingSystem.subMenu.vendor.path,
		element: <APP.ACCOUNTING_SYSTEM.VENDOR />,
		exact: true,
	},
	{
		path: sidebarMenus.accountingSystem.subMenu.proposal.path,
		element: <APP.ACCOUNTING_SYSTEM.PROPOSAL />,
		exact: true,
	},
	{
		path: sidebarMenus.accountingSystem.subMenu.budgetPlanner.path,
		element: <APP.ACCOUNTING_SYSTEM.BUDGET_PLANNER />,
		exact: true,
	},
	{
		path: sidebarMenus.accountingSystem.subMenu.financialGoal.path,
		element: <APP.ACCOUNTING_SYSTEM.FINANCIAL_GOAL />,
		exact: true,
	},
	{
		path: sidebarMenus.accountingSystem.subMenu.accountingSetup.path,
		element: <APP.ACCOUNTING_SYSTEM.ACCOUNTING_SETUP />,
		exact: true,
	},
	{
		path: sidebarMenus.accountingSystem.subMenu.printSettings.path,
		element: <APP.ACCOUNTING_SYSTEM.PRINT_SETTING />,
		exact: true,
	},

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
		path: sidebarMenus.projectSystem.subMenu.projectSystemSetup.path,
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
		path: sidebarMenus.crmSystem.subMenu.crmSystemSetup.path,
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
		path: sidebarMenus.productsSystem.subMenu.role.path,
		element: <APP.PRODUCT_SYSTEM.ROLE />,
		exact: true,
	},
	{
		path: sidebarMenus.productsSystem.subMenu.client.path,
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
