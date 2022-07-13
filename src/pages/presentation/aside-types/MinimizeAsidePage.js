import React from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import SubHeader, { SubHeaderLeft } from '../../../layout/SubHeader/SubHeader';
import Page from '../../../layout/Page/Page';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import Humans from '../../../assets/img/scene6.png';
import HumansWebp from '../../../assets/img/scene6.webp';
import CommonLayoutRightSubheader from '../../common/SubHeaders/CommonLayoutRightSubheader';
import useMinimizeAside from '../../../hooks/useMinimizeAside';

const MinimizeAsidePage = () => {
	useMinimizeAside();
	return (
		<PageWrapper title=''>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Page Layout', to: '/page-layouts' },
							{
								title: 'Header & Subheader',
								to: '/page-layouts/header-and-subheader',
							},
						]}
					/>
				</SubHeaderLeft>
				<CommonLayoutRightSubheader />
			</SubHeader>
			<Page>
				<div className='row d-flex align-items-center h-100'>
					<div
						className='col-12 d-flex justify-content-center'
						style={{ fontSize: 'calc(3rem + 3vw)' }}>
						<p>
							Minimize <span className='text-primary fw-bold mx-1'>Aside</span>
						</p>
					</div>
					<div className='col-12 d-flex align-items-baseline justify-content-center'>
						<img
							srcSet={HumansWebp}
							src={Humans}
							alt='Humans'
							style={{ height: '50vh', transform: 'translateX(3vw)' }}
						/>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default MinimizeAsidePage;
