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
				icon: 'ViewArray',
				subMenu: {
					overView: {
						id: 'dashboardHrmOverview',
						text: 'Overview',
						path: '/hrm/overview',
						icon: 'ViewArray',
					},
					reports: {
						id: 'dashboardHrmReports',
						text: 'Reports',
						path: '/hrm/reports',
						icon: 'ViewDay',
						subMenu: {
							payroll: {
								id: 'dashboardHrmReportsPayroll',
								text: 'Payroll',
								path: '/hrm/reports/payroll',
								icon: 'ViewArray',
							},
							leave: {
								id: 'dashboardHrmReportsLeave',
								text: 'Leave',
								path: '/hrm/reports/leave',
								icon: 'ViewArray',
							},
							monthlyAttendance: {
								id: 'dashboardHrmReportsMonthlyAttendance',
								text: 'Monthly Attendance',
								path: '/hrm/reports/monthly-attendance',
								icon: 'ViewArray',
							},
						},
					},
				},
			},
			project: {
				id: 'project',
				text: 'Project',
				path: '/project',
				icon: 'ViewDay',
			},
		},
	},
	hrmSystem: {
		id: 'hrmSystem',
		text: 'HRM System',
		path: 'hrm-system/',
		icon: 'Person',
		subMenu: {
			EmplyeeSetup: {
				id: 'hrmSystemEmplyeeSetup',
				text: 'Emplyee Setup',
				path: 'hrm-system/emplyee-setup',
				icon: 'ViewArray',
			},
			payrollSetup: {
				id: 'hrmSystemPayrollSetup',
				text: 'Payroll Setup',
				path: 'hrm-system/payroll-setup',
				icon: 'ViewDay',
				subMenu: {
					setSalary: {
						id: 'hrmSystemPayrollSetupSetSalary',
						text: 'Set Salary',
						path: 'hrm-system/payroll-setup/set-salary',
						icon: 'ViewArray',
					},
					paySlip: {
						id: 'hrmSystemPayrollSetupPaySlip',
						text: 'Payslip',
						path: 'hrm-system/payroll-setup/payslip',
						icon: 'ViewDay',
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
						icon: 'ViewArray',
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
								icon: 'ViewArray',
							},
							bulkAttendance: {
								id: 'hrmSystemLeaveManagementSetupAttendanceBulkAttendance',
								text: 'Bulk Attendance',
								path: 'hrm-system/leave-management-setup/bulk-attendance',
								icon: 'ViewDay',
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
						icon: 'ViewArray',
					},
					appraisal: {
						id: 'hrmSystemPerformanceSetupAppraisal',
						text: 'Appraisal',
						path: 'hrm-system/performance-setup/appraisal',
						icon: 'ViewDay',
					},
					goalTracking: {
						id: 'hrmSystemPerformanceSetupGoalTracking',
						text: 'Goal Tracking',
						path: 'hrm-system/performance-setup/goal-tracking',
						icon: 'ViewDay',
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
						icon: 'ViewArray',
					},
					trainer: {
						id: 'hrmSystemTrainingSetupTrainer',
						text: 'Trainer',
						path: 'hrm-system/training-setup/trainer',
						icon: 'ViewDay',
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
						icon: 'ViewArray',
					},
					jobCreate: {
						id: 'hrmSystemRecruitmentSetupJobCreate',
						text: 'Job Create',
						path: 'hrm-system/recruitment-setup/job-create',
						icon: 'ViewDay',
					},
					jobApplication: {
						id: 'hrmSystemRecruitmentSetupJobApplication',
						text: 'Job Application',
						path: 'hrm-system/recruitment-setup/job-application',
						icon: 'ViewDay',
					},
					jobCandidate: {
						id: 'hrmSystemRecruitmentSetupJobCandidate',
						text: 'Job Candidate',
						path: 'hrm-system/recruitment-setup/job-cadidate',
						icon: 'ViewArray',
					},
					jobOnBoarding: {
						id: 'hrmSystemRecruitmentSetupJobOnBoarding',
						text: 'Job On-Boarding',
						path: 'hrm-system/recruitment-setup/job-on-boarding',
						icon: 'ViewDay',
					},
					customQuestion: {
						id: 'hrmSystemRecruitmentSetupCustomQuestion',
						text: 'Custom Question',
						path: 'hrm-system/recruitment-setup/custom-question',
						icon: 'ViewDay',
					},
					interviewSchedule: {
						id: 'hrmSystemRecruitmentSetupInterviewSchedule',
						text: 'Interview Schedule',
						path: 'hrm-system/recruitment-setup/interview-schedule',
						icon: 'ViewArray',
					},
					career: {
						id: 'hrmSystemRecruitmentSetupCareer',
						text: 'Career',
						path: 'hrm-system/recruitment-setup/career',
						icon: 'ViewDay',
					},
				},
			},
			adminSetup: {
				id: 'hrmSystemAdminSetup',
				text: 'Leave Management Setup',
				path: 'hrm-system/admin-setup',
				icon: 'ViewDay',
				subMenu: {
					award: {
						id: 'hrmSystemAdminSetupAward',
						text: 'Award',
						path: 'hrm-system/admin-setup/award',
						icon: 'ViewArray',
					},
					transfer: {
						id: 'hrmSystemAdminSetupTransfer',
						text: 'Transfer',
						path: 'hrm-system/admin-setup/transfer',
						icon: 'ViewDay',
					},
					resignation: {
						id: 'hrmSystemAdminSetupResignation',
						text: 'Resignation',
						path: 'hrm-system/admin-setup/resignation',
						icon: 'ViewDay',
					},
					trip: {
						id: 'hrmSystemAdminSetupTrip',
						text: 'Trip Setup',
						path: 'hrm-system/admin-setup/trip',
						icon: 'ViewArray',
					},
					promotion: {
						id: 'hrmSystemAdminSetupPromotion',
						text: 'Promotion',
						path: 'hrm-system/admin-setup/promotion',
						icon: 'ViewDay',
					},
					complaints: {
						id: 'hrmSystemAdminSetupComplaints',
						text: 'Complaints',
						path: 'hrm-system/admin-setup/complaints',
						icon: 'ViewDay',
					},
					warning: {
						id: 'hrmSystemAdminSetupWarning',
						text: 'Warning Setup',
						path: 'hrm-system/admin-setup/warning',
						icon: 'ViewArray',
					},
					termination: {
						id: 'hrmSystemAdminSetupTermination',
						text: 'Termination',
						path: 'hrm-system/admin-setup/termination',
						icon: 'ViewDay',
					},
					announcement: {
						id: 'hrmSystemAdminSetupAnnouncement',
						text: 'Announcement',
						path: 'hrm-system/admin-setup/announcement',
						icon: 'ViewArray',
					},
					holidays: {
						id: 'hrmSystemAdminSetupHolidays',
						text: 'Holidays',
						path: 'hrm-system/admin-setup/holidays',
						icon: 'ViewDay',
					},
				},
			},
			eventSetup: {
				id: 'hrmSystemEventSetup',
				text: 'Event Setup',
				path: 'hrm-system/event-setup',
				icon: 'ViewDay',
			},
			meeting: {
				id: 'hrmSystemMeeting',
				text: 'Meeting',
				path: 'hrm-system/meeting',
				icon: 'ViewDay',
			},
			employeesAssetSetup: {
				id: 'hrmSystemEmployeesAssetSetup',
				text: 'Employees Asset Setup',
				path: 'hrm-system/employees-asset-setup',
				icon: 'ViewDay',
			},
			documentSetup: {
				id: 'hrmSystemDocumentSetup',
				text: 'Document Setup',
				path: 'hrm-system/document-setup',
				icon: 'ViewDay',
			},
			companyPolicy: {
				id: 'hrmSystemCompanyPolicy',
				text: 'Company Policy',
				path: 'hrm-system/company-policy',
				icon: 'ViewDay',
			},
			hrmSystemSetup: {
				id: 'hrmSystemHrmSystemSetup',
				text: 'Hrm System Setup',
				path: 'hrm-system/hrm-system-setup',
				icon: 'ViewDay',
			},
		},
	},
	// accountingSystem: {
	// 	id: 'accountingSystem',
	// 	text: 'Accounting System',
	// 	path: 'accounting-system',
	// 	icon: 'Box',
	// 	subMenu: {
	// 		customer: {
	// 			id: 'accountingSystemCustomer',
	// 			text: 'Customer',
	// 			path: 'accounting-system/customer',
	// 			icon: 'ViewArray',
	// 		},
	// 		vendor: {
	// 			id: 'accountingSystemVendor',
	// 			text: 'Vendor',
	// 			path: 'accounting-system/vendor',
	// 			icon: 'ViewDay',
	// 		},
	// 		proposal: {
	// 			id: 'accountingSystemProposal',
	// 			text: 'Proposal',
	// 			path: 'accounting-system/proposal',
	// 			icon: 'ViewDay',
	// 		},
	// 		banking: {
	// 			id: 'accountingSystemBanking',
	// 			text: 'Banking',
	// 			path: 'accounting-system/banking',
	// 			icon: 'ViewArray',
	// 			subMenu: {
	// 				customer: {
	// 					id: 'accountingSystemBankingCustomer',
	// 					text: 'Customer',
	// 					path: 'accounting-system/customer',
	// 					icon: 'ViewArray',
	// 				},
	// 			},
	// 		},
	// 		income: {
	// 			id: 'accountingSystemIncome',
	// 			text: 'Income',
	// 			path: 'accounting-system/income',
	// 			icon: 'ViewDay',
	// 			subMenu: {
	// 				customer: {
	// 					id: 'accountingSystemIncomeCustomer',
	// 					text: 'Customer',
	// 					path: 'accounting-system/customer',
	// 					icon: 'ViewArray',
	// 				},
	// 			},
	// 		},
	// 		expense: {
	// 			id: 'accountingSystemExpense',
	// 			text: 'Expense',
	// 			path: 'accounting-system/expense',
	// 			icon: 'ViewDay',
	// 			subMenu: {
	// 				customer: {
	// 					id: 'accountingSystemExpenseCustomer',
	// 					text: 'Customer',
	// 					path: 'accounting-system/customer',
	// 					icon: 'ViewArray',
	// 				},
	// 			},
	// 		},
	// 		doubleEntry: {
	// 			id: 'accountingSystemDoubleEntry',
	// 			text: 'Double Entry',
	// 			path: 'accounting-system/doubleEntry',
	// 			icon: 'ViewDay',
	// 			subMenu: {
	// 				customer: {
	// 					id: 'accountingSystemDoubleEntryCustomer',
	// 					text: 'Customer',
	// 					path: 'accounting-system/customer',
	// 					icon: 'ViewArray',
	// 				},
	// 			},
	// 		},
	// 		budgetPlanner: {
	// 			id: 'accountingSystemBudgetPlanner',
	// 			text: 'Budget Planner',
	// 			path: 'accounting-system/budgetPlanner',
	// 			icon: 'ViewDay',
	// 		},
	// 		financialGoal: {
	// 			id: 'accountingSystemFinancialGoal',
	// 			text: 'Financial Goal',
	// 			path: 'accounting-system/financialGoal',
	// 			icon: 'ViewDay',
	// 		},
	// 		accountingSetup: {
	// 			id: 'accountingSystemAccountingSetup',
	// 			text: 'Accounting Setup',
	// 			path: 'accounting-system/accountingSetup',
	// 			icon: 'ViewDay',
	// 		},
	// 		printSettings: {
	// 			id: 'accountingSystemPrintSettings',
	// 			text: 'Print Settings',
	// 			path: 'accounting-system/printSettings',
	// 			icon: 'ViewDay',
	// 		},
	// 	},
	// },
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
				icon: 'ViewArray',
			},
			deals: {
				id: 'crmSystemDeals',
				text: 'Deals',
				path: 'crm-system/deals',
				icon: 'ViewDay',
			},
			formBuilder: {
				id: 'crmSystemFormBuilder',
				text: 'Form Builder',
				path: 'crm-system/for-builder',
				icon: 'ViewDay',
			},
			contract: {
				id: 'crmSystemContract',
				text: 'Contract',
				path: 'crm-system/contract',
				icon: 'ViewArray',
			},
			setup: {
				id: 'crmSystemSetup',
				text: 'CRM System Setup',
				path: 'crm-system/crm-system-setup',
				icon: 'ViewDay',
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
				icon: 'ViewArray',
			},
			tasks: {
				id: 'projectSystemTasks',
				text: 'Tasks',
				path: 'project-system/tasks',
				icon: 'ViewDay',
			},
			timesheet: {
				id: 'projectSystemTimesheet',
				text: 'Timesheet',
				path: 'project-system/timesheet',
				icon: 'ViewDay',
			},
			bug: {
				id: 'projectSystemBug',
				text: 'Bug',
				path: 'project-system/bug',
				icon: 'ViewArray',
			},
			tracker: {
				id: 'projectSystemTracker',
				text: 'Tracker',
				path: 'project-system/tracker',
				icon: 'ViewArray',
			},
			setup: {
				id: 'projectSystemSetup',
				text: 'Project System Setup',
				path: 'project-system/project-system-setup',
				icon: 'ViewDay',
				subMenu: {
					projectTaskStages: {
						id: 'projectSystemSetupProjectTaskStages',
						text: 'Project Task Stages',
						path: 'project-system/setup/project-task-stages',
						icon: 'ViewArray',
					},
					bugStatus: {
						id: 'projectSystemSetupBugStatus',
						text: 'Bug Status',
						path: 'project-system/setup/bug-status',
						icon: 'ViewArray',
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
				icon: 'ViewArray',
			},
			role: {
				id: 'userManagementRole',
				text: 'Role',
				path: 'user-management/role',
				icon: 'ViewDay',
			},
			client: {
				id: 'userManagementClient',
				text: 'Client',
				path: 'user-management/client',
				icon: 'ViewDay',
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
				icon: 'ViewDay',
			},
			productStock: {
				id: 'productsSystemProductStock',
				text: 'Product Stock',
				path: 'products-system/product-stock',
				icon: 'ViewDay',
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
		path: 'summary',
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
				icon: 'ViewDay',
				subMenu: {
					businessSetting: {
						id: 'systemSetupSystemSettingsBusinessSetting',
						text: 'Business Setting',
						path: 'system-setup/system-settings/business-setting',
						icon: 'ViewDay',
					},
					systemSetting: {
						id: 'systemSetupSystemSettingsSystemSetting',
						text: 'System Setting',
						path: 'system-setup/system-settings/system-setting',
						icon: 'ViewDay',
					},
					companySetting: {
						id: 'systemSetupSystemSettingsCompanySetting',
						text: 'Company Setting',
						path: 'system-setup/system-settings/company-setting',
						icon: 'ViewDay',
					},
					paymentSetting: {
						id: 'systemSetupSystemSettingsPaymentSetting',
						text: 'Payment Setting',
						path: 'system-setup/system-settings/payment-setting',
						icon: 'ViewDay',
					},
					zoomMeetingSetting: {
						id: 'systemSetupSystemSettingsZoomMeetingSetting',
						text: 'Zoom-Meeting Setting',
						path: 'system-setup/system-settings/zoom-meeting-setting',
						icon: 'ViewDay',
					},
					slackSetting: {
						id: 'systemSetupSystemSettingsSlackSetting',
						text: 'Slack Setting',
						path: 'system-setup/system-settings/slack-setting',
						icon: 'ViewDay',
					},
					telegramSetting: {
						id: 'systemSetupSystemSettingsTelegramSetting',
						text: 'Telegram Setting',
						path: 'system-setup/system-settings/telegram-setting',
						icon: 'ViewDay',
					},
					twillioSetting: {
						id: 'systemSetupSystemSettingsTwillioSetting',
						text: 'Twillio Setting',
						path: 'system-setup/system-settings/twillio-setting',
						icon: 'ViewDay',
					},
				},
			},
			setupSubscriptionPlans: {
				id: 'setup-subscription-plans',
				text: 'Setup Subscription Plans',
				path: 'system-setup/setup-subscription-plans',
				icon: 'ViewDay',
			},
			order: {
				id: 'order',
				text: 'Order',
				path: 'system-setup/order',
				icon: 'ViewDay',
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
