import React, { useState } from 'react';
import classNames from 'classnames';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	SubheaderSeparator,
} from '../layout/SubHeader/SubHeader';
import Avatar from '../components/Avatar';
import UserImageWebp from '../assets/img/wanna/wanna1.webp';
import UserImage from '../assets/img/wanna/wanna1.png';
import Checks, { ChecksGroup } from '../components/bootstrap/forms/Checks';
import InputGroup, { InputGroupText } from '../components/bootstrap/forms/InputGroup';
import Input from '../components/bootstrap/forms/Input';
import FormGroup from '../components/bootstrap/forms/FormGroup';
import Label from '../components/bootstrap/forms/Label';
import CommonFilterTag from '../pages/common/CommonFilterTag';
import Select from '../components/bootstrap/forms/Select';
import { useFormik } from 'formik';
import useDarkMode from '../hooks/useDarkMode';
import Button from '../components/bootstrap/Button';
import Dropdown, { DropdownMenu, DropdownToggle } from '../components/bootstrap/Dropdown';

const ReportSubHeader = () => {
	const { darkModeStatus } = useDarkMode();
	const [filterMenu, setFilterMenu] = useState(false);
	const formik = useFormik({
		initialValues: {
			minPrice: '',
			maxPrice: '',
			categoryName: '3D Shapes',
			companyA: true,
			companyB: true,
			companyC: true,
			companyD: true,
		},
		onSubmit: () => {
			// alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<>
			<SubHeader>
				<SubHeaderLeft>
					<Avatar srcSet={UserImageWebp} src={UserImage} size={32} />
					<span>
						<strong>Report by</strong> Timothy J. Doe
					</span>
				</SubHeaderLeft>
				<SubHeaderRight>
					{(!!formik.values.minPrice || !!formik.values.maxPrice) && (
						<CommonFilterTag
							title='Price'
							text={`${formik.values.minPrice || '0'} to ${
								formik.values.maxPrice || 'no limit'
							}`}
						/>
					)}

					{!!formik.values.categoryName && (
						<CommonFilterTag title='Category' text={formik.values.categoryName} />
					)}

					{(formik.values.companyA ||
						formik.values.companyB ||
						formik.values.companyC ||
						formik.values.companyD) && (
						<CommonFilterTag
							title='Store'
							text={
								(formik.values.companyA ? 'Company A, ' : '') +
								(formik.values.companyB ? 'Company B, ' : '') +
								(formik.values.companyC ? 'Company C, ' : '') +
								(formik.values.companyD ? 'Company D ' : '')
							}
						/>
					)}
					<SubheaderSeparator />
					<Dropdown isOpen={filterMenu} setIsOpen={setFilterMenu}>
						<DropdownToggle hasIcon={false}>
							<Button icon='Filter' color='primary' isLight>
								Filter
								<span
									className={classNames(
										'position-absolute',
										'top-0 start-95',
										'translate-middle',
										'badge',
										'rounded-pill',
										'bg-danger',
										'border border-2',
										{
											'border-white': !darkModeStatus,
											'border-dark': darkModeStatus,
										},
									)}>
									2/3
									<span className='visually-hidden'>filter</span>
								</span>
							</Button>
						</DropdownToggle>
						<DropdownMenu isAlignmentEnd size='lg' isCloseAfterLeave={false}>
							<div className='container py-2'>
								<form className='row g-3' onSubmit={formik.handleSubmit}>
									<div className='col-12'>
										<FormGroup>
											<Label htmlFor='minPrice'>Price</Label>
											<InputGroup>
												<Input
													id='minPrice'
													ariaLabel='Minimum price'
													placeholder='Min.'
													onChange={formik.handleChange}
													value={formik.values.minPrice}
												/>
												<InputGroupText>to</InputGroupText>
												<Input
													id='maxPrice'
													ariaLabel='Maximum price'
													placeholder='Max.'
													onChange={formik.handleChange}
													value={formik.values.maxPrice}
												/>
											</InputGroup>
										</FormGroup>
									</div>
									<div className='col-12'>
										<FormGroup>
											<Label htmlFor='categoryName'>Category</Label>
											<Select
												id='categoryName'
												ariaLabel='Category'
												placeholder='Category Name'
												list={[
													{ value: '3D Shapes', text: '3D Shapes' },
													{ value: 'Illustrator', text: 'Illustrator' },
													{ value: 'Photo', text: 'Photo' },
												]}
												onChange={formik.handleChange}
												value={formik.values.categoryName}
											/>
										</FormGroup>
									</div>
									<div className='col-12'>
										<FormGroup>
											<Label>Store</Label>
											<ChecksGroup>
												<Checks
													id='companyA'
													label='Company A'
													onChange={formik.handleChange}
													checked={formik.values.companyA}
												/>
												<Checks
													id='companyB'
													label='Company B'
													onChange={formik.handleChange}
													checked={formik.values.companyB}
												/>
												<Checks
													id='companyC'
													label='Company C'
													onChange={formik.handleChange}
													checked={formik.values.companyC}
												/>
												<Checks
													id='companyD'
													label='Company D'
													onChange={formik.handleChange}
													checked={formik.values.companyD}
												/>
											</ChecksGroup>
										</FormGroup>
									</div>
									<div className='col-6'>
										<Button
											color='primary'
											isOutline
											className='w-100'
											onClick={formik.resetForm}>
											Reset
										</Button>
									</div>
									<div className='col-6'>
										<Button color='primary' className='w-100' type='submit'>
											Filter
										</Button>
									</div>
								</form>
							</div>
						</DropdownMenu>
					</Dropdown>
				</SubHeaderRight>
			</SubHeader>
		</>
	);
};

export default ReportSubHeader;
