import React, { lazy } from 'react';
import { sidebarMenus } from '../menu';

const APP = {
	DASHBOARD: {
		PROJECT: lazy(() => import('../pages/presentation/dashboard/DashboardPage')),
		HRM: {
			OVERVIEW: lazy(() => import('../pages/presentation/dashboard/hrm/Overview')),
			REPORTS: {
				PAYROLL: lazy(() => import('../pages/presentation/dashboard/hrm/reports/Payroll')),
				LEAVE: lazy(() => import('../pages/presentation/dashboard/hrm/reports/Leave')),
				MONTHLY_ATTENDANCE: lazy(
					() => import('../pages/presentation/dashboard/hrm/reports/MonthlyAttendance'),
				),
			},
		},
		ACCOUNTING: {
			OVERVIEW: lazy(() => import('../pages/presentation/dashboard/accounting/Overview')),
			REPORTS: {
				EXPENSE_SUMMARY: lazy(
					() =>
						import('../pages/presentation/dashboard/accounting/reports/ExpenseSummary'),
				),
				INCOME_VS_EXPENSE: lazy(
					() =>
						import(
							'../pages/presentation/dashboard/accounting/reports/IncomeVsExpense'
						),
				),
				ACCOUNT_STATEMENT: lazy(
					() =>
						import(
							'../pages/presentation/dashboard/accounting/reports/AccountStatement'
						),
				),
				INVOICE_SUMMARY: lazy(
					() =>
						import('../pages/presentation/dashboard/accounting/reports/InvoiceSummary'),
				),
				BILL_SUMMARY: lazy(
					() => import('../pages/presentation/dashboard/accounting/reports/BillSummary'),
				),
				PRODUCT_STOCK: lazy(
					() => import('../pages/presentation/dashboard/accounting/reports/ProductStock'),
				),
				PROFIT_AND_LOSS: lazy(
					() =>
						import('../pages/presentation/dashboard/accounting/reports/ProfitAndLoss'),
				),
				TRANSACTION: lazy(
					() => import('../pages/presentation/dashboard/accounting/reports/Transaction'),
				),
				INCOME_SUMMARY: lazy(
					() =>
						import('../pages/presentation/dashboard/accounting/reports/IncomeSummary'),
				),
				TAX_SUMMARY: lazy(
					() => import('../pages/presentation/dashboard/accounting/reports/TaxSummary'),
				),
			},
		},
	},
	ACCOUNTING_SYSTEM: {
		CUSTOMER: lazy(() => import('../pages/presentation/accounting-system/Customer')),
		VENDOR: lazy(() => import('../pages/presentation/accounting-system/Vendor')),

		PROPOSAL: lazy(() => import('../pages/presentation/accounting-system/Proposal')),
		ACCOUNTINGSETUP: lazy(
			() => import('../pages/presentation/accounting-system/Accountingsetup'),
		),
		PRINTSETUP: lazy(() => import('../pages/presentation/accounting-system/Printsetup')),

		FINANCIALGOAL: lazy(() => import('../pages/presentation/accounting-system/Financialgoal')),

		BUDGETPLANNER: lazy(() => import('../pages/presentation/accounting-system/Budgetplanner')),

		BANKING: {
			ACCOUNT: lazy(() => import('../pages/presentation/accounting-system/banking/Account')),
			TRANSFER: lazy(
				() => import('../pages/presentation/accounting-system/banking/Transfer'),
			),
		},

		INCOME: {
			INVOICE: lazy(() => import('../pages/presentation/accounting-system/income/Invoice')),
			REVENUE: lazy(() => import('../pages/presentation/accounting-system/income/Revenue')),
			CREDITNOTE: lazy(
				() => import('../pages/presentation/accounting-system/income/Creditnote'),
			),
		},

		EXPENSE: {
			BILL: lazy(() => import('../pages/presentation/accounting-system/expense/Bill')),
			PAYMENT: lazy(() => import('../pages/presentation/accounting-system/expense/Payment')),
			DEBITNOTE: lazy(
				() => import('../pages/presentation/accounting-system/expense/Debitnote'),
			),
		},

		DOUBLEENTRY: {
			CHARTOFACCOUNTS: lazy(
				() => import('../pages/presentation/accounting-system/doubleentry/Chartofaccounts'),
			),
			JOURNALACCOUNT: lazy(
				() => import('../pages/presentation/accounting-system/doubleentry/Journalaccount'),
			),
			LEDGERSUMMARY: lazy(
				() => import('../pages/presentation/accounting-system/doubleentry/Ledgersummary'),
			),
			BALANCESHEET: lazy(
				() => import('../pages/presentation/accounting-system/doubleentry/Balancesheet'),
			),
			TRIALBALANCE: lazy(
				() => import('../pages/presentation/accounting-system/doubleentry/Trialbalance'),
			),
		},
	},
	CRM_SYSTEM: {
		LEADS: lazy(() => import('../pages/presentation/crm-system/Leads')),
		DEALS: lazy(() => import('../pages/presentation/crm-system/Deals')),
		FORM_BUILDER: lazy(() => import('../pages/presentation/crm-system/FormBuilder')),
		CONTRACT: lazy(() => import('../pages/presentation/crm-system/Contract')),
		CRM_SYSTEM_SETUP: lazy(
			() => import('../pages/presentation/crm-system/crm-system-setup/CrmSystemSetup'),
		),
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
		COMPANY_POLICY: lazy(() => import('../pages/presentation/hrm-system/CompanyPolicy')),
		HRM_SYSTEM_SETUP: lazy(() => import('../pages/presentation/hrm-system/HrmSystemSetup')),
	},
	PROJECT_SYSTEM: {
		PROJECT: lazy(() => import('../pages/presentation/project-system/Projects')),
		PROJECTDETAILS: lazy(
			() => import('../pages/presentation/project-system/project-details/ProjectDetails'),
		),
		TASKS: lazy(() => import('../pages/presentation/project-system/Tasks')),
		TASKS_DETAILS: lazy(
			() => import('../pages/presentation/project-system/Task-details/TaskDetails'),
		),
		BUG: lazy(() => import('../pages/presentation/project-system/Bug')),
		BUG_DETAILS: lazy(
			() => import('../pages/presentation/project-system/bug-details/BugDetails'),
		),
		TIMESHEET: lazy(() => import('../pages/presentation/project-system/Timesheet')),
		TRACKER: lazy(() => import('../pages/presentation/project-system/Tracker')),
		PROJECT_SYSTEM_SETUP: {
			PROJECT_TASK_STAGES: lazy(
				() =>
					import(
						'../pages/presentation/project-system/project-system-setup/ProjectTaskStages'
					),
			),
			BUG_STATUS: lazy(
				() => import('../pages/presentation/project-system/project-system-setup/BugStatus'),
			),
		},
	},
	USER_MANAGEMENT: {
		USER: lazy(() => import('../pages/presentation/user-management/User')),
		ROLE: lazy(() => import('../pages/presentation/user-management/Role')),
		CLIENT: lazy(() => import('../pages/presentation/user-management/clients/Client')),
	},
	PRODUCT_SYSTEM: {
		ROLE: lazy(() => import('../pages/presentation/product-system/ProductAndServices')),
		CLIENT: lazy(() => import('../pages/presentation/product-system/ProductStock')),
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
	SUPPORT_SYSTEM_TICKETS: lazy(
		() => import('../pages/presentation/support-system/SupportTickets'),
	),
};

const presentation = [
	//  >>>>>>>>> Dashboard
	{
		path: sidebarMenus.dashboard.path,
		element: <APP.DASHBOARD.PROJECT />,
		exact: true,
	},
	{
		path: sidebarMenus.dashboard.subMenu.hrm.subMenu.overView.path,
		element: <APP.DASHBOARD.HRM.OVERVIEW />,
		exact: true,
	},
	{
		path: sidebarMenus.dashboard.subMenu.hrm.subMenu.reports.subMenu.payroll.path,
		element: <APP.DASHBOARD.HRM.REPORTS.PAYROLL />,
		exact: true,
	},
	{
		path: sidebarMenus.dashboard.subMenu.hrm.subMenu.reports.subMenu.leave.path,
		element: <APP.DASHBOARD.HRM.REPORTS.LEAVE />,
		exact: true,
	},
	{
		path: sidebarMenus.dashboard.subMenu.hrm.subMenu.reports.subMenu.monthlyAttendance.path,
		element: <APP.DASHBOARD.HRM.REPORTS.MONTHLY_ATTENDANCE />,
		exact: true,
	},

	//  >>>>>>>>> Dashboard > Accounting

	{
		path: sidebarMenus.dashboard.subMenu.accounting.subMenu.overView.path,
		element: <APP.DASHBOARD.ACCOUNTING.OVERVIEW />,
		exact: true,
	},
	{
		path: sidebarMenus.dashboard.subMenu.accounting.subMenu.reports.subMenu.accountStatement
			.path,
		element: <APP.DASHBOARD.ACCOUNTING.REPORTS.ACCOUNT_STATEMENT />,
		exact: true,
	},
	{
		path: sidebarMenus.dashboard.subMenu.accounting.subMenu.reports.subMenu.expenseSummary.path,
		element: <APP.DASHBOARD.ACCOUNTING.REPORTS.EXPENSE_SUMMARY />,
		exact: true,
	},
	{
		path: sidebarMenus.dashboard.subMenu.accounting.subMenu.reports.subMenu.incomeVsExpense
			.path,
		element: <APP.DASHBOARD.ACCOUNTING.REPORTS.INCOME_VS_EXPENSE />,
		exact: true,
	},
	{
		path: sidebarMenus.dashboard.subMenu.accounting.subMenu.reports.subMenu.billSummary.path,
		element: <APP.DASHBOARD.ACCOUNTING.REPORTS.BILL_SUMMARY />,
		exact: true,
	},
	{
		path: sidebarMenus.dashboard.subMenu.accounting.subMenu.reports.subMenu.productStock.path,
		element: <APP.DASHBOARD.ACCOUNTING.REPORTS.PRODUCT_STOCK />,
		exact: true,
	},
	{
		path: sidebarMenus.dashboard.subMenu.accounting.subMenu.reports.subMenu.invoiceSummary.path,
		element: <APP.DASHBOARD.ACCOUNTING.REPORTS.INVOICE_SUMMARY />,
		exact: true,
	},
	{
		path: sidebarMenus.dashboard.subMenu.accounting.subMenu.reports.subMenu.billSummary.path,
		element: <APP.DASHBOARD.ACCOUNTING.REPORTS.PRODUCT_STOCK />,
		exact: true,
	},
	{
		path: sidebarMenus.dashboard.subMenu.accounting.subMenu.reports.subMenu.profitAndLoss.path,
		element: <APP.DASHBOARD.ACCOUNTING.REPORTS.PROFIT_AND_LOSS />,
		exact: true,
	},
	{
		path: sidebarMenus.dashboard.subMenu.accounting.subMenu.reports.subMenu.transaction.path,
		element: <APP.DASHBOARD.ACCOUNTING.REPORTS.TRANSACTION />,
		exact: true,
	},
	{
		path: sidebarMenus.dashboard.subMenu.accounting.subMenu.reports.subMenu.incomeSummary.path,
		element: <APP.DASHBOARD.ACCOUNTING.REPORTS.INCOME_SUMMARY />,
		exact: true,
	},
	{
		path: sidebarMenus.dashboard.subMenu.accounting.subMenu.reports.subMenu.taxSummary.path,
		element: <APP.DASHBOARD.ACCOUNTING.REPORTS.TAX_SUMMARY />,
		exact: true,
	},

	//  >>>>>>>>>> App > HRM system
	{
		path: sidebarMenus.hrmSystem.subMenu.EmplyeeSetup.path,
		element: <APP.HRM_SYSTEM.EMPLOYEE_SETUP />,
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
	{
		path: sidebarMenus.hrmSystem.subMenu.recruitmentSetup.subMenu.career.path,
		element: <APP.HRM_SYSTEM.RECRUITMENT_SETUP.CAREER />,
		exact: true,
	},
	/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */

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
	{
		path: sidebarMenus.hrmSystem.subMenu.adminSetup.subMenu.announcement.path,
		element: <APP.HRM_SYSTEM.HR_ADMIN_SETUP.ANNOUNCEMENT />,
		exact: true,
	},
	{
		path: sidebarMenus.hrmSystem.subMenu.adminSetup.subMenu.holidays.path,
		element: <APP.HRM_SYSTEM.HR_ADMIN_SETUP.HOLIDAYS />,
		exact: true,
	},
	//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

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
		path: sidebarMenus.accountingSystem.subMenu.budgetplanner.path,
		element: <APP.ACCOUNTING_SYSTEM.BUDGETPLANNER />,
		exact: true,
	},
	{
		path: sidebarMenus.accountingSystem.subMenu.accountingsetup.path,
		element: <APP.ACCOUNTING_SYSTEM.ACCOUNTINGSETUP />,
		exact: true,
	},
	{
		path: sidebarMenus.accountingSystem.subMenu.printsetup.path,
		element: <APP.ACCOUNTING_SYSTEM.PRINTSETUP />,
		exact: true,
	},
	{
		path: sidebarMenus.accountingSystem.subMenu.financialgoal.path,
		element: <APP.ACCOUNTING_SYSTEM.FINANCIALGOAL />,
		exact: true,
	},
	{
		path: sidebarMenus.accountingSystem.subMenu.income.subMenu.invoice.path,
		element: <APP.ACCOUNTING_SYSTEM.INCOME.INVOICE />,
		exact: true,
	},
	{
		path: sidebarMenus.accountingSystem.subMenu.income.subMenu.revenue.path,
		element: <APP.ACCOUNTING_SYSTEM.INCOME.REVENUE />,
		exact: true,
	},
	{
		path: sidebarMenus.accountingSystem.subMenu.income.subMenu.creditnote.path,
		element: <APP.ACCOUNTING_SYSTEM.INCOME.CREDITNOTE />,
		exact: true,
	},
	{
		path: sidebarMenus.accountingSystem.subMenu.expense.subMenu.bill.path,
		element: <APP.ACCOUNTING_SYSTEM.EXPENSE.BILL />,
		exact: true,
	},
	{
		path: sidebarMenus.accountingSystem.subMenu.expense.subMenu.payment.path,
		element: <APP.ACCOUNTING_SYSTEM.EXPENSE.PAYMENT />,
		exact: true,
	},
	{
		path: sidebarMenus.accountingSystem.subMenu.expense.subMenu.debitnote.path,
		element: <APP.ACCOUNTING_SYSTEM.EXPENSE.DEBITNOTE />,
		exact: true,
	},
	{
		path: sidebarMenus.accountingSystem.subMenu.proposal.path,
		element: <APP.ACCOUNTING_SYSTEM.PROPOSAL />,
		exact: true,
	},
	{
		path: sidebarMenus.accountingSystem.subMenu.banking.subMenu.account.path,
		element: <APP.ACCOUNTING_SYSTEM.BANKING.ACCOUNT />,
		exact: true,
	},
	{
		path: sidebarMenus.accountingSystem.subMenu.banking.subMenu.transfer.path,
		element: <APP.ACCOUNTING_SYSTEM.BANKING.TRANSFER />,
		exact: true,
	},
	{
		path: sidebarMenus.accountingSystem.subMenu.doubleentry.subMenu.chartofaccounts.path,
		element: <APP.ACCOUNTING_SYSTEM.DOUBLEENTRY.CHARTOFACCOUNTS />,
		exact: true,
	},
	{
		path: sidebarMenus.accountingSystem.subMenu.doubleentry.subMenu.journalaccount.path,
		element: <APP.ACCOUNTING_SYSTEM.DOUBLEENTRY.JOURNALACCOUNT />,
		exact: true,
	},
	{
		path: sidebarMenus.accountingSystem.subMenu.doubleentry.subMenu.ledgersummary.path,
		element: <APP.ACCOUNTING_SYSTEM.DOUBLEENTRY.LEDGERSUMMARY />,
		exact: true,
	},
	{
		path: sidebarMenus.accountingSystem.subMenu.doubleentry.subMenu.balancesheet.path,
		element: <APP.ACCOUNTING_SYSTEM.DOUBLEENTRY.BALANCESHEET />,
		exact: true,
	},
	{
		path: sidebarMenus.accountingSystem.subMenu.doubleentry.subMenu.trialbalance.path,
		element: <APP.ACCOUNTING_SYSTEM.DOUBLEENTRY.TRIALBALANCE />,
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
		path: sidebarMenus.projectSystem.subMenu.tasks.path + '/:id',
		element: <APP.PROJECT_SYSTEM.TASKS_DETAILS />,
		exact: true,
	},
	{
		path: sidebarMenus.projectSystem.subMenu.timesheet.path,
		element: <APP.PROJECT_SYSTEM.TIMESHEET />,
		exact: true,
	},
	{
		path: sidebarMenus.projectSystem.subMenu.bug.path,
		element: <APP.PROJECT_SYSTEM.BUG />,
		exact: true,
	},
	{
		path: sidebarMenus.projectSystem.subMenu.bug.path + '/:id',
		element: <APP.PROJECT_SYSTEM.BUG_DETAILS />,
		exact: true,
	},
	{
		path: sidebarMenus.projectSystem.subMenu.tracker.path,
		element: <APP.PROJECT_SYSTEM.TRACKER />,
		exact: true,
	},
	{
		path: sidebarMenus.projectSystem.subMenu.projectSysytemSetup.subMenu.bugStatus.path,
		element: <APP.PROJECT_SYSTEM.PROJECT_SYSTEM_SETUP.BUG_STATUS />,
		exact: true,
	},
	{
		path: sidebarMenus.projectSystem.subMenu.projectSysytemSetup.subMenu.projectTaskStages.path,
		element: <APP.PROJECT_SYSTEM.PROJECT_SYSTEM_SETUP.PROJECT_TASK_STAGES />,
		exact: true,
	},
	{
		path: sidebarMenus.projectSystem.subMenu.projects.path + '/id',
		element: <APP.PROJECT_SYSTEM.PROJECTDETAILS />,
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
	{
		path: sidebarMenus.supportSystem.path + '/ticket/:id',
		element: <APP.SUPPORT_SYSTEM_TICKETS />,
		exact: true,
	},
];

const contents = [...presentation];

export default contents;
