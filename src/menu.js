export const sidebarMenus = {
	dashboard: {
		id: 'dashboard',
		text: 'Dashboard',
		path: '/',
		icon: 'Dashboard',
		subMenu: {
			// accounting: {
			// 	id: 'dashboardAccounting',
			// 	text: 'Accounting',
			// 	path: '/accounting',
			// 	icon: 'ViewArray',
			// 	subMenu: {
			// 		overView: {
			// 			id: 'dashboardAccountingOverview',
			// 			text: 'Overview',
			// 			path: '/accounting/overview',
			// 			icon: 'ViewArray',
			// 		},
			// 		reports: {
			// 			id: 'dashboardAccountingReports',
			// 			text: 'Reports',
			// 			path: '/accounting/reports',
			// 			icon: 'ViewDay',
			// 			subMenu: {
			// 				expenseSummary: {
			// 					id: 'dashboardAccountingReportsExpenseSummary',
			// 					text: 'Expense Summary',
			// 					path: '/accounting/reports',
			// 					icon: 'ViewArray',
			// 				},
			// 				incomeVsExpense: {
			// 					id: 'dashboardAccountingReportsIncomeVsExpense',
			// 					text: 'Income Vs Expense',
			// 					path: '/accounting/reports',
			// 					iExpensecon: 'ViewDay',
			// 					icon: 'ViewArray',
			// 				},
			// 				accountStatement: {
			// 					id: 'dashboardAccountingReportsAccountStatement',
			// 					text: 'Account Statement',
			// 					path: '/accounting/reports',
			// 					icon: 'ViewArray',
			// 				},
			// 				invoiceSummary: {
			// 					id: 'dashboardAccountingReportsInvoiceSummary',
			// 					text: 'Invoice Summary',
			// 					path: '/accounting/reports',
			// 					icon: 'ViewDay',
			// 				},
			// 				billSummary: {
			// 					id: 'dashboardAccountingReportsBillSummary',
			// 					text: 'Bill Summary',
			// 					path: '/accounting/reports',
			// 					icon: 'ViewArray',
			// 				},
			// 				productStock: {
			// 					id: 'dashboardAccountingReportsProductStock',
			// 					text: 'Product Stock',
			// 					path: '/accounting/reports',
			// 					icon: 'ViewDay',
			// 				},
			// 				profitAndLoss: {
			// 					id: 'dashboardAccountingReportsProfitAndLoss',
			// 					text: 'Profit And Loss',
			// 					path: '/accounting/reports',
			// 					iLosscon: 'ViewArray',
			// 				},
			// 				transaction: {
			// 					id: 'dashboardAccountingReportsTransaction',
			// 					text: 'Transaction',
			// 					path: '/accounting/reports',
			// 					icon: 'ViewDay',
			// 				},
			// 				incomeSummary: {
			// 					id: 'dashboardAccountingReportsIncomeSummary',
			// 					text: 'incomeSummary',
			// 					path: '/accounting/reports',
			// 					icon: 'ViewArray',
			// 				},
			// 				taxSummary: {
			// 					id: 'dashboardAccountingReportsTaxSummary',
			// 					text: 'taxSummary',
			// 					path: '/accounting/reports',
			// 					icon: 'ViewDay',
			// 				},
			// 			},
			// 		},
			// 	},
			// },
			hrm: {
				id: 'dashboardHrm',
				text: 'HRM',
				path: '/hrm',
				icon: 'ViewDay',
				subMenu: {
					overView: {
						id: 'dashboardHrmOverview',
						text: 'OverView',
						path: '/hrm/overview',
						icon: 'Dot',
					},
					reports: {
						id: 'dashboardHrmReports',
						text: 'Reports',
						path: '/hrm/reports',
						icon: 'ViewArray',
						subMenu: {
							payroll: {
								id: 'dashboardHrmReportsPayroll',
								text: 'Payroll',
								path: '/hrm/reports/payroll',
								icon: 'Dot',
							},
							leave: {
								id: 'dashboardHrmReportsLeave',
								text: 'Leave',
								path: '/hrm/reports/leave',
								icon: 'Dot',
							},
							monthlyAttendance: {
								id: 'dashboardHrmReportsMonthlyAttendance',
								text: 'Monthly Attendance',
								path: '/hrm/reports/monthlyAttendance',
								icon: 'Dot',
							},
						},
					},
				},
			},
			project: {
				id: 'dashboardProject',
				text: 'Project',
				path: '/',
				icon: 'Dot',
			},
		},
	},
	hrmSystem: {
		id: 'hrmSystem',
		text: 'HRM System',
		path: 'hrm-system',
		icon: 'Person',
		subMenu: {
			EmplyeeSetup: {
				id: 'hrmSystemEmplyeeSetup',
				text: 'Emplyee Setup',
				path: '/hrm-system/emplyee-setup',
				icon: 'Dot',
			},
			payrollSetup: {
				id: 'hrmSystemPayrollSetup',
				text: 'Payroll Setup',
				path: '/hrm-system/payroll-setup',
				icon: 'ViewDay',
				subMenu: {
					setSalary: {
						id: 'hrmSystemPayrollSetupSetSalary',
						text: 'Set Salary',
						path: 'hrm-system/payroll-setup/set-salary',
						icon: 'Dot',
					},
					paySlip: {
						id: 'hrmSystemPayrollSetupPaySlip',
						text: 'Payslip',
						path: 'hrm-system/payroll-setup/payslip',
						icon: 'Dot',
					},
				},
			},
			leaveManagementSetup: {
				id: 'hrmSystemLeaveManagementSetup',
				text: 'Leave Management Setup',
				path: 'hrm-system/leave-management-setup',
				icon: 'ViewDay',
				subMenu: {
					manageLeave: {
						id: 'hrmSystemLeaveManagementSetupManageLeave',
						text: 'Manage Leave',
						path: 'hrm-system/leave-management-setup/manage-leave',
						icon: 'Dot',
					},
					attendance: {
						id: 'hrmSystemLeaveManagementSetupAttendance',
						text: 'Attendance',
						path: 'hrm-system/leave-management-setup/attendance',
						icon: 'ViewDay',
						subMenu: {
							markAttendance: {
								id: 'hrmSystemLeaveManagementSetupAttendanceMarkAttendance',
								text: 'Mark Attendance',
								path: 'hrm-system/leave-management-setup/mark-attendance',
								icon: 'Dot',
							},
							bulkAttendance: {
								id: 'hrmSystemLeaveManagementSetupAttendanceBulkAttendance',
								text: 'Bulk Attendance',
								path: 'hrm-system/leave-management-setup/bulk-attendance',
								icon: 'Dot',
							},
						},
					},
				},
			},
			performanceSetup: {
				id: 'hrmSystemPerformanceSetup',
				text: 'Performance Setup',
				path: 'hrm-system/performance-setup/',
				icon: 'ViewDay',
				subMenu: {
					indicator: {
						id: 'hrmSystemPerformanceSetupIndicator',
						text: 'Indicator',
						path: 'hrm-system/performance-setup/indicator',
						icon: 'Dot',
					},
					appraisal: {
						id: 'hrmSystemPerformanceSetupAppraisal',
						text: 'Appraisal',
						path: 'hrm-system/performance-setup/appraisal',
						icon: 'Dot',
					},
					goalTracking: {
						id: 'hrmSystemPerformanceSetupGoalTracking',
						text: 'Goal Tracking',
						path: 'hrm-system/performance-setup/goal-tracking',
						icon: 'Dot',
					},
				},
			},
			trainingSetup: {
				id: 'hrmSystemTrainingSetup',
				text: 'Training Setup',
				path: 'hrm-system/training-setup',
				icon: 'ViewDay',
				subMenu: {
					trainingList: {
						id: 'hrmSystemTrainingSetupTrainingList',
						text: 'Training List',
						path: 'hrm-system/training-setup/training-list',
						icon: 'Dot',
					},
					trainer: {
						id: 'hrmSystemTrainingSetupTrainer',
						text: 'Trainer',
						path: 'hrm-system/training-setup/trainer',
						icon: 'Dot',
					},
				},
			},
			recruitmentSetup: {
				id: 'hrmSystemRecruitmentSetup',
				text: 'Recruitment Setup',
				path: '/leave-management-setup',
				icon: 'ViewDay',
				subMenu: {
					jobs: {
						id: 'hrmSystemRecruitmentSetupJobs',
						text: 'Jobs',
						path: 'hrm-system/recruitment-setup/jobs',
						icon: 'Dot',
					},
					jobCreate: {
						id: 'hrmSystemRecruitmentSetupJobCreate',
						text: 'Job Create',
						path: 'hrm-system/recruitment-setup/job-create',
						icon: 'Dot',
					},
					jobApplication: {
						id: 'hrmSystemRecruitmentSetupJobApplication',
						text: 'Job Application',
						path: 'hrm-system/recruitment-setup/job-application',
						icon: 'Dot',
					},
					jobCandidate: {
						id: 'hrmSystemRecruitmentSetupJobCandidate',
						text: 'Job Candidate',
						path: 'hrm-system/recruitment-setup/job-cadidate',
						icon: 'Dot',
					},
					jobOnBoarding: {
						id: 'hrmSystemRecruitmentSetupJobOnBoarding',
						text: 'Job On-Boarding',
						path: 'hrm-system/recruitment-setup/job-on-boarding',
						icon: 'Dot',
					},
					customQuestion: {
						id: 'hrmSystemRecruitmentSetupCustomQuestion',
						text: 'Custom Question',
						path: 'hrm-system/recruitment-setup/custom-question',
						icon: 'Dot',
					},
					interviewSchedule: {
						id: 'hrmSystemRecruitmentSetupInterviewSchedule',
						text: 'Interview Schedule',
						path: 'hrm-system/recruitment-setup/interview-schedule',
						icon: 'Dot',
					},
					career: {
						id: 'hrmSystemRecruitmentSetupCareer',
						text: 'Career',
						path: 'hrm-system/recruitment-setup/career',
						icon: 'Dot',
					},
				},
			},
			adminSetup: {
				id: 'hrmSystemAdminSetup',
				text: 'HR Admin Setup',
				path: 'hrm-system/admin-setup',
				icon: 'ViewDay',
				subMenu: {
					award: {
						id: 'hrmSystemAdminSetupAward',
						text: 'Award',
						path: 'hrm-system/admin-setup/award',
						icon: 'Dot',
					},
					transfer: {
						id: 'hrmSystemAdminSetupTransfer',
						text: 'Transfer',
						path: 'hrm-system/admin-setup/transfer',
						icon: 'Dot',
					},
					resignation: {
						id: 'hrmSystemAdminSetupResignation',
						text: 'Resignation',
						path: 'hrm-system/admin-setup/resignation',
						icon: 'Dot',
					},
					trip: {
						id: 'hrmSystemAdminSetupTrip',
						text: 'Trip Setup',
						path: 'hrm-system/admin-setup/trip',
						icon: 'Dot',
					},
					promotion: {
						id: 'hrmSystemAdminSetupPromotion',
						text: 'Promotion',
						path: 'hrm-system/admin-setup/promotion',
						icon: 'Dot',
					},
					complaints: {
						id: 'hrmSystemAdminSetupComplaints',
						text: 'Complaints',
						path: 'hrm-system/admin-setup/complaints',
						icon: 'Dot',
					},
					warning: {
						id: 'hrmSystemAdminSetupWarning',
						text: 'Warning Setup',
						path: 'hrm-system/admin-setup/warning',
						icon: 'Dot',
					},
					termination: {
						id: 'hrmSystemAdminSetupTermination',
						text: 'Termination',
						path: 'hrm-system/admin-setup/termination',
						icon: 'Dot',
					},
					announcement: {
						id: 'hrmSystemAdminSetupAnnouncement',
						text: 'Announcement',
						path: 'hrm-system/admin-setup/announcement',
						icon: 'Dot',
					},
					holidays: {
						id: 'hrmSystemAdminSetupHolidays',
						text: 'Holidays',
						path: 'hrm-system/admin-setup/holidays',
						icon: 'Dot',
					},
				},
			},
			eventSetup: {
				id: 'hrmSystemEventSetup',
				text: 'Event Setup',
				path: 'hrm-system/event-setup',
				icon: 'Dot',
			},
			meeting: {
				id: 'hrmSystemMeeting',
				text: 'Meeting',
				path: 'hrm-system/meeting',
				icon: 'Dot',
			},
			employeesAssetSetup: {
				id: 'hrmSystemEmployeesAssetSetup',
				text: 'Employees Asset Setup',
				path: 'hrm-system/employees-asset-setup',
				icon: 'Dot',
			},
			documentSetup: {
				id: 'hrmSystemDocumentSetup',
				text: 'Document Setup',
				path: 'hrm-system/document-setup',
				icon: 'Dot',
			},
			companyPolicy: {
				id: 'hrmSystemCompanyPolicy',
				text: 'Company Policy',
				path: 'hrm-system/company-policy',
				icon: 'Dot',
			},
			hrmSystemSetup: {
				id: 'hrmSystemHrmSystemSetup',
				text: 'Hrm System Setup',
				path: 'hrm-system/hrm-system-setup',
				icon: 'Dot',
			},
		},
	},
	accountingSystem: {
		id: 'accountingSystem',
		text: 'Accounting System',
		path: 'accounting-system',
		icon: 'Box',
		subMenu: {
			customer: {
				id: 'accountingSystemCustomer',
				text: 'Customer',
				path: 'accounting-system/customer',
				icon: 'ViewArray',
			},
			vendor: {
				id: 'accountingSystemVendor',
				text: 'Vendor',
				path: 'accounting-system/vendor',
				icon: 'ViewArray',
			},
			proposal: {
				id: 'accountingSystemProposal',
				text: 'Proposal',
				path: 'accounting-system/proposal',
				icon: 'ViewDay',
			},
			banking: {
				id: 'accountingSystemBanking',
				text: 'Banking',
				path: 'accounting-system/banking',
				icon: 'ViewDay',
				subMenu: {
					account: {
						id: 'accountingSystemBankingAccount',
						text: 'Account',
						path: 'accounting-system/banking/account',
						icon: 'ViewArray',
					},
					transfer: {
						id: 'accountingSystemVoucherTransfer',
						text: 'Transfer',
						path: 'accounting-system/ledger/transfer',
						icon: 'ViewArray',
					},
				},
			},

			income: {
				id: 'accountingSystemIncome',
				text: 'Income',
				path: 'accounting-system/income',
				icon: 'ViewDay',
				subMenu: {
					invoice: {
						id: 'accountingSystemIncomeInvoice',
						text: 'Invoice',
						path: 'accounting-system/income/invoice',
						icon: 'ViewArray',
					},
					revenue: {
						id: 'accountingSystemIncomeRevenue',
						text: 'Revenue',
						path: 'accounting-system/income/revenue',
						icon: 'ViewArray',
					},
					creditnote: {
						id: 'accountingSystemInvoiceCreditnote',
						text: 'Creditnote',
						path: 'accounting-system/Income/creditnote',
						icon: 'ViewArray',
					},
				},
			},
			expense: {
				id: 'accountingSystemExpense',
				text: 'Expense',
				path: 'accounting-system/expense',
				icon: 'ViewDay',
				subMenu: {
					bill: {
						id: 'accountingSystemExpenseeRequisition',
						text: 'Requisition',
						path: 'accounting-system/expense/requisition',
						icon: 'ViewArray',
					},
					payment: {
						id: 'accountingSystemExpensePayment',
						text: 'Payment',
						path: 'accounting-system/expense/payment',
						icon: 'ViewArray',
					},
					debitnote: {
						id: 'accountingSystemExpenseDebitnote',
						text: 'Debitnote',
						path: 'accounting-system/expense/debitnote',
						icon: 'ViewArray',
					},
				},
			},
			doubleentry: {
				id: 'accountingSystemDoubleentry',
				text: 'Double Entry',
				path: 'accounting-system/doubleentry',
				icon: 'ViewDay',
				subMenu: {
					chartofaccounts: {
						id: 'accountingSystemDoubleentryChartofaccounts',
						text: 'Chart of accounts',
						path: 'accounting-system/doubleentry/chartofaccounts',
						icon: 'ViewArray',
					},
					journalaccount: {
						id: 'accountingSystemDoubleentryJournalaccount',
						text: 'Journal Account',
						path: 'accounting-system/doubleentry/journalaccount',
						icon: 'ViewArray',
					},
					ledgersummary: {
						id: 'accountingSystemDoubleentryLedgersummary',
						text: 'Ledger Summary',
						path: 'accounting-system/doubleentry/ledgersummary',
						icon: 'ViewArray',
					},
					balancesheet: {
						id: 'accountingSystemDoubleentryBalancesheet',
						text: 'Balance Sheet',
						path: 'accounting-system/doubleentry/balancesheet',
						icon: 'ViewArray',
					},
					trialbalance: {
						id: 'accountingSystemDoubleentryTrialbalance',
						text: 'Trial Balance',
						path: 'accounting-system/doubleentry/trialbalance',
						icon: 'ViewArray',
					},
				},
			},
			budgetplanner: {
				id: 'accountingSystemBudgetplanner',
				text: 'Budget Planner',
				path: 'accounting-system/budgetplanner',
				icon: 'ViewArray',
			},
			financialgoal: {
				id: 'accountingSystemFinancialgoal',
				text: 'Financial Goal',
				path: 'accounting-system/financialgoal',
				icon: 'ViewArray',
			},
			accountingsetup: {
				id: 'accountingSystemAccountingsetup',
				text: 'Accounting Setup',
				path: 'accounting-system/accountingsetup',
				icon: 'ViewArray',
			},
			printsetup: {
				id: 'accountingSystemPrintsetup',
				text: 'Print setup',
				path: 'accounting-system/printsetup',
				icon: 'ViewArray',
			},
		},
	},
	crmSystem: {
		id: 'crmSystem',
		text: 'CRM',
		path: 'crm-system',
		icon: 'ContentCopy',
		subMenu: {
			leads: {
				id: 'crmSystemLeads',
				text: 'Leads',
				path: 'crm-system/leads',
				icon: 'Dot',
			},
			deals: {
				id: 'crmSystemDeals',
				text: 'Deals',
				path: 'crm-system/deals',
				icon: 'Dot',
			},
			formBuilder: {
				id: 'crmSystemFormBuilder',
				text: 'Form Builder',
				path: 'crm-system/for-builder',
				icon: 'Dot',
			},
			contract: {
				id: 'crmSystemContract',
				text: 'Contract',
				path: 'crm-system/contract',
				icon: 'Dot',
			},
			setup: {
				id: 'crmSystemSetup',
				text: 'CRM System Setup',
				path: 'crm-system/crm-system-setup',
				icon: 'Dot',
			},
		},
	},
	projectSystem: {
		id: 'projectSystem',
		text: 'Project System',
		path: 'project-system',
		icon: 'Share',
		subMenu: {
			projects: {
				id: 'projectSystemProjects',
				text: 'Projects',
				path: 'project-system/projects',
				icon: 'Dot',
			},
			tasks: {
				id: 'projectSystemTasks',
				text: 'Tasks',
				path: 'project-system/tasks',
				icon: 'Dot',
			},
			timesheet: {
				id: 'projectSystemTimesheet',
				text: 'Timesheet',
				path: 'project-system/timesheet',
				icon: 'Dot',
			},
			bug: {
				id: 'projectSystemBug',
				text: 'Bug',
				path: 'project-system/bug',
				icon: 'Dot',
			},
			tracker: {
				id: 'projectSystemTracker',
				text: 'Tracker',
				path: 'project-system/tracker',
				icon: 'Dot',
			},
			projectSysytemSetup: {
				id: 'projectSystemSetup',
				text: 'Project System Setup',
				path: 'project-system/project-system-setup',
				icon: 'ViewDay',
				subMenu: {
					projectTaskStages: {
						id: 'projectSystemSetupProjectTaskStages',
						text: 'Project Task Stages',
						path: 'project-system/setup/project-task-stages',
						icon: 'Dot',
					},
					bugStatus: {
						id: 'projectSystemSetupBugStatus',
						text: 'Bug Status',
						path: 'project-system/setup/bug-status',
						icon: 'Dot',
					},
				},
			},
		},
	},
	userManagement: {
		id: 'userManagement',
		text: 'User Managements',
		path: 'user-management',
		icon: 'People',
		subMenu: {
			user: {
				id: 'userManagementUser',
				text: 'User',
				path: 'user-management/user',
				icon: 'Dot',
			},
			role: {
				id: 'userManagementRole',
				text: 'Role',
				path: 'user-management/role',
				icon: 'Dot',
			},
			client: {
				id: 'userManagementClient',
				text: 'Client',
				path: 'user-management/client',
				icon: 'Dot',
			},
		},
	},
	productsSystem: {
		id: 'productsSystem',
		text: 'Products System',
		path: 'products-system',
		icon: 'Cart2',
		subMenu: {
			productAndServices: {
				id: 'productsSystemProductAndServices',
				text: 'Product & Services',
				path: 'products-system/product-and-services',
				icon: 'Dot',
			},
			productStock: {
				id: 'productsSystemProductStock',
				text: 'Product Stock',
				path: 'products-system/product-stock',
				icon: 'Dot',
			},
		},
	},
	supportSystem: {
		id: 'supportSystem',
		text: 'Support System',
		path: 'support-system',
		icon: 'Headphones',
		subMenu: null,
	},
	zoomMeeting: {
		id: 'zoomMeeting',
		text: 'Zoom Meeting',
		path: '/zoom-meeting',
		icon: 'CameraVideoFill',
		subMenu: null,
	},
	messenger: {
		id: 'messenger',
		text: 'Messenger',
		path: 'messenger',
		icon: 'Messenger',
		subMenu: null,
	},
	systemSetup: {
		id: 'systemSetup',
		text: 'System Setup',
		path: 'system-setup',
		icon: 'Gear',
		subMenu: {
			systemSettings: {
				id: 'systemSetupSystemSettings',
				text: 'System Settings',
				path: 'system-setup/system-settings',
				icon: 'Dot',
				// subMenu: {
				// 	businessSetting: {
				// 		id: 'systemSetupSystemSettingsBusinessSetting',
				// 		text: 'Business Setting',
				// 		path: 'system-setup/system-settings/business-setting',
				// 		icon: 'Dot',
				// 	},
				// 	systemSetting: {
				// 		id: 'systemSetupSystemSettingsSystemSetting',
				// 		text: 'System Setting',
				// 		path: 'system-setup/system-settings/system-setting',
				// 		icon: 'Dot',
				// 	},
				// 	companySetting: {
				// 		id: 'systemSetupSystemSettingsCompanySetting',
				// 		text: 'Company Setting',
				// 		path: 'system-setup/system-settings/company-setting',
				// 		icon: 'Dot',
				// 	},
				// 	paymentSetting: {
				// 		id: 'systemSetupSystemSettingsPaymentSetting',
				// 		text: 'Payment Setting',
				// 		path: 'system-setup/system-settings/payment-setting',
				// 		icon: 'Dot',
				// 	},
				// 	zoomMeetingSetting: {
				// 		id: 'systemSetupSystemSettingsZoomMeetingSetting',
				// 		text: 'Zoom-Meeting Setting',
				// 		path: 'system-setup/system-settings/zoom-meeting-setting',
				// 		icon: 'Dot',
				// 	},
				// 	slackSetting: {
				// 		id: 'systemSetupSystemSettingsSlackSetting',
				// 		text: 'Slack Setting',
				// 		path: 'system-setup/system-settings/slack-setting',
				// 		icon: 'Dot',
				// 	},
				// 	telegramSetting: {
				// 		id: 'systemSetupSystemSettingsTelegramSetting',
				// 		text: 'Telegram Setting',
				// 		path: 'system-setup/system-settings/telegram-setting',
				// 		icon: 'Dot',
				// 	},
				// 	twillioSetting: {
				// 		id: 'systemSetupSystemSettingsTwillioSetting',
				// 		text: 'Twillio Setting',
				// 		path: 'system-setup/system-settings/twillio-setting',
				// 		icon: 'Dot',
				// 	},
				// },
			},
			setupSubscriptionPlans: {
				id: 'setup-subscription-plans',
				text: 'Setup Subscription Plans',
				path: 'system-setup/setup-subscription-plans',
				icon: 'Dot',
			},
			order: {
				id: 'order',
				text: 'Order',
				path: 'system-setup/order',
				icon: 'Dot',
			},
		},
	},
};

export const componentsMenu = {
	bootstrap: {
		id: 'bootstrap',
		text: 'Bootstrap',
		icon: 'Extension',
	},
	notification: {
		id: 'notification',
		text: 'Notification',
		path: 'notifications',
		icon: 'NotificationsNone',
	},
	hooks: {
		id: 'hooks',
		text: 'Hooks',
		path: 'hooks',
		icon: 'Anchor',
	},
};

export const productsMenu = {
	companyA: {
		id: 'companyA',
		text: 'Company A',
		path: 'grid-pages/products',
		subMenu: null,
	},
	companyB: { id: 'companyB', text: 'Company B', path: '/', subMenu: null },
	companyC: { id: 'companyC', text: 'Company C', path: '/', subMenu: null },
	companyD: { id: 'companyD', text: 'Company D', path: '/', subMenu: null },
};
