import React from 'react';

const EditableNote = () => {
	return (
		<div className='note-editor note-frame card'>
			<div className='note-dropzone'>
				{' '}
				<div className='note-dropzone-message' />
			</div>
			<div className='note-toolbar-wrapper' style={{ height: 72 }}>
				<div
					className='note-toolbar card-header'
					style={{ position: 'relative', top: 0, width: '100%' }}>
					<div className='note-btn-group btn-group note-style'>
						<div className='note-btn-group btn-group'>
							<button
								type='button'
								className='note-btn btn btn-light btn-sm dropdown-toggle'
								tabIndex={-1}
								data-toggle='dropdown'
								title=''
								data-bs-original-title='Style'
								aria-label='Style'>
								<i className='note-icon-magic' />
							</button>
							<div className='dropdown-menu dropdown-style'>
								<a className='dropdown-item' href='#' data-value='p'>
									<p>Normal</p>
								</a>
								<a className='dropdown-item' href='#' data-value='blockquote'>
									<blockquote className='blockquote'>Blockquote</blockquote>
								</a>
								<a className='dropdown-item' href='#' data-value='pre'>
									<pre>Code</pre>
								</a>
								<a className='dropdown-item' href='#' data-value='h1'>
									<h1>Header 1</h1>
								</a>
								<a className='dropdown-item' href='#' data-value='h2'>
									<h2>Header 2</h2>
								</a>
								<a className='dropdown-item' href='#' data-value='h3'>
									<h3>Header 3</h3>
								</a>
								<a className='dropdown-item' href='#' data-value='h4'>
									<h4>Header 4</h4>
								</a>
								<a className='dropdown-item' href='#' data-value='h5'>
									<h5>Header 5</h5>
								</a>
								<a className='dropdown-item' href='#' data-value='h6'>
									<h6>Header 6</h6>
								</a>
							</div>
						</div>
					</div>
					<div className='note-btn-group btn-group note-font'>
						<button
							type='button'
							className='note-btn btn btn-light btn-sm note-btn-bold'
							tabIndex={-1}
							title=''
							data-bs-original-title='Bold (CTRL+B)'
							aria-label='Bold (CTRL+B)'>
							<i className='note-icon-bold' />
						</button>
						<button
							type='button'
							className='note-btn btn btn-light btn-sm note-btn-italic'
							tabIndex={-1}
							title=''
							data-bs-original-title='Italic (CTRL+I)'
							aria-label='Italic (CTRL+I)'>
							<i className='note-icon-italic' />
						</button>
						<button
							type='button'
							className='note-btn btn btn-light btn-sm note-btn-underline'
							tabIndex={-1}
							title=''
							data-bs-original-title='Underline (CTRL+U)'
							aria-label='Underline (CTRL+U)'>
							<i className='note-icon-underline' />
						</button>
						<button
							type='button'
							className='note-btn btn btn-light btn-sm'
							tabIndex={-1}
							title=''
							data-bs-original-title='Remove Font Style (CTRL+\)'
							aria-label='Remove Font Style (CTRL+\)'>
							<i className='note-icon-eraser' />
						</button>
						<button
							type='button'
							className='note-btn btn btn-light btn-sm note-btn-strikethrough'
							tabIndex={-1}
							title=''
							data-bs-original-title='Strikethrough (CTRL+SHIFT+S)'
							aria-label='Strikethrough (CTRL+SHIFT+S)'>
							<i className='note-icon-strikethrough' />
						</button>
					</div>
					<div className='note-btn-group btn-group note-fontname'>
						<div className='note-btn-group btn-group'>
							<button
								type='button'
								className='note-btn btn btn-light btn-sm dropdown-toggle'
								tabIndex={-1}
								data-toggle='dropdown'
								title=''
								data-bs-original-title='Font Family'
								aria-label='Font Family'>
								<span
									className='note-current-fontname'
									style={{ fontFamily: '"Open Sans"' }}>
									Open Sans
								</span>
							</button>
							<div className='dropdown-menu note-check dropdown-fontname'>
								<a className='dropdown-item' href='#' data-value='Arial'>
									<i className='note-icon-menu-check' />{' '}
									<span style={{ fontFamily: '"Arial"' }}>Arial</span>
								</a>
								<a className='dropdown-item' href='#' data-value='Courier New'>
									<i className='note-icon-menu-check' />{' '}
									<span style={{ fontFamily: '"Courier New"' }}>Courier New</span>
								</a>
								<a className='dropdown-item' href='#' data-value='Helvetica'>
									<i className='note-icon-menu-check' />{' '}
									<span style={{ fontFamily: '"Helvetica"' }}>Helvetica</span>
								</a>
								<a
									className='dropdown-item checked'
									href='#'
									data-value='Open Sans'>
									<i className='note-icon-menu-check' />{' '}
									<span style={{ fontFamily: '"Open Sans"' }}>Open Sans</span>
								</a>
							</div>
						</div>
					</div>
					<div className='note-btn-group btn-group note-color'>
						<div className='note-btn-group btn-group note-color'>
							<button
								type='button'
								className='note-btn btn btn-light btn-sm note-current-color-button'
								tabIndex={-1}
								title=''
								data-bs-original-title='Recent Color'
								aria-label='Recent Color'
								data-backcolor='#FFFF00'>
								<i
									className='note-icon-font note-recent-color'
									style={{ backgroundColor: 'rgb(255, 255, 0)' }}
								/>
							</button>
							<button
								type='button'
								className='note-btn btn btn-light btn-sm dropdown-toggle'
								tabIndex={-1}
								data-toggle='dropdown'
								title=''
								data-bs-original-title='More Color'
								aria-label='More Color'
							/>
							<div className='dropdown-menu'>
								<div className='note-palette'>
									{' '}
									<div className='note-palette-title'>Background Color</div>{' '}
									<div>
										{' '}
										<button
											type='button'
											className='note-color-reset btn btn-light'
											data-event='backColor'
											data-value='inherit'>
											Transparent{' '}
										</button>
									</div>{' '}
									<div className='note-holder' data-event='backColor'>
										<div className='note-color-palette'>
											<div className='note-color-row'>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#000000' }}
													data-event='backColor'
													data-value='#000000'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#000000'
													aria-label='#000000'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#424242' }}
													data-event='backColor'
													data-value='#424242'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#424242'
													aria-label='#424242'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#636363' }}
													data-event='backColor'
													data-value='#636363'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#636363'
													aria-label='#636363'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#9C9C94' }}
													data-event='backColor'
													data-value='#9C9C94'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#9C9C94'
													aria-label='#9C9C94'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#CEC6CE' }}
													data-event='backColor'
													data-value='#CEC6CE'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#CEC6CE'
													aria-label='#CEC6CE'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#EFEFEF' }}
													data-event='backColor'
													data-value='#EFEFEF'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#EFEFEF'
													aria-label='#EFEFEF'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#F7F7F7' }}
													data-event='backColor'
													data-value='#F7F7F7'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#F7F7F7'
													aria-label='#F7F7F7'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#FFFFFF' }}
													data-event='backColor'
													data-value='#FFFFFF'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#FFFFFF'
													aria-label='#FFFFFF'
												/>
											</div>
											<div className='note-color-row'>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#FF0000' }}
													data-event='backColor'
													data-value='#FF0000'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#FF0000'
													aria-label='#FF0000'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#FF9C00' }}
													data-event='backColor'
													data-value='#FF9C00'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#FF9C00'
													aria-label='#FF9C00'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#FFFF00' }}
													data-event='backColor'
													data-value='#FFFF00'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#FFFF00'
													aria-label='#FFFF00'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#00FF00' }}
													data-event='backColor'
													data-value='#00FF00'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#00FF00'
													aria-label='#00FF00'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#00FFFF' }}
													data-event='backColor'
													data-value='#00FFFF'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#00FFFF'
													aria-label='#00FFFF'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#0000FF' }}
													data-event='backColor'
													data-value='#0000FF'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#0000FF'
													aria-label='#0000FF'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#9C00FF' }}
													data-event='backColor'
													data-value='#9C00FF'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#9C00FF'
													aria-label='#9C00FF'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#FF00FF' }}
													data-event='backColor'
													data-value='#FF00FF'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#FF00FF'
													aria-label='#FF00FF'
												/>
											</div>
											<div className='note-color-row'>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#F7C6CE' }}
													data-event='backColor'
													data-value='#F7C6CE'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#F7C6CE'
													aria-label='#F7C6CE'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#FFE7CE' }}
													data-event='backColor'
													data-value='#FFE7CE'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#FFE7CE'
													aria-label='#FFE7CE'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#FFEFC6' }}
													data-event='backColor'
													data-value='#FFEFC6'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#FFEFC6'
													aria-label='#FFEFC6'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#D6EFD6' }}
													data-event='backColor'
													data-value='#D6EFD6'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#D6EFD6'
													aria-label='#D6EFD6'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#CEDEE7' }}
													data-event='backColor'
													data-value='#CEDEE7'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#CEDEE7'
													aria-label='#CEDEE7'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#CEE7F7' }}
													data-event='backColor'
													data-value='#CEE7F7'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#CEE7F7'
													aria-label='#CEE7F7'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#D6D6E7' }}
													data-event='backColor'
													data-value='#D6D6E7'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#D6D6E7'
													aria-label='#D6D6E7'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#E7D6DE' }}
													data-event='backColor'
													data-value='#E7D6DE'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#E7D6DE'
													aria-label='#E7D6DE'
												/>
											</div>
											<div className='note-color-row'>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#E79C9C' }}
													data-event='backColor'
													data-value='#E79C9C'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#E79C9C'
													aria-label='#E79C9C'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#FFC69C' }}
													data-event='backColor'
													data-value='#FFC69C'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#FFC69C'
													aria-label='#FFC69C'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#FFE79C' }}
													data-event='backColor'
													data-value='#FFE79C'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#FFE79C'
													aria-label='#FFE79C'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#B5D6A5' }}
													data-event='backColor'
													data-value='#B5D6A5'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#B5D6A5'
													aria-label='#B5D6A5'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#A5C6CE' }}
													data-event='backColor'
													data-value='#A5C6CE'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#A5C6CE'
													aria-label='#A5C6CE'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#9CC6EF' }}
													data-event='backColor'
													data-value='#9CC6EF'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#9CC6EF'
													aria-label='#9CC6EF'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#B5A5D6' }}
													data-event='backColor'
													data-value='#B5A5D6'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#B5A5D6'
													aria-label='#B5A5D6'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#D6A5BD' }}
													data-event='backColor'
													data-value='#D6A5BD'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#D6A5BD'
													aria-label='#D6A5BD'
												/>
											</div>
											<div className='note-color-row'>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#E76363' }}
													data-event='backColor'
													data-value='#E76363'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#E76363'
													aria-label='#E76363'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#F7AD6B' }}
													data-event='backColor'
													data-value='#F7AD6B'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#F7AD6B'
													aria-label='#F7AD6B'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#FFD663' }}
													data-event='backColor'
													data-value='#FFD663'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#FFD663'
													aria-label='#FFD663'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#94BD7B' }}
													data-event='backColor'
													data-value='#94BD7B'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#94BD7B'
													aria-label='#94BD7B'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#73A5AD' }}
													data-event='backColor'
													data-value='#73A5AD'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#73A5AD'
													aria-label='#73A5AD'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#6BADDE' }}
													data-event='backColor'
													data-value='#6BADDE'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#6BADDE'
													aria-label='#6BADDE'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#8C7BC6' }}
													data-event='backColor'
													data-value='#8C7BC6'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#8C7BC6'
													aria-label='#8C7BC6'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#C67BA5' }}
													data-event='backColor'
													data-value='#C67BA5'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#C67BA5'
													aria-label='#C67BA5'
												/>
											</div>
											<div className='note-color-row'>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#CE0000' }}
													data-event='backColor'
													data-value='#CE0000'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#CE0000'
													aria-label='#CE0000'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#E79439' }}
													data-event='backColor'
													data-value='#E79439'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#E79439'
													aria-label='#E79439'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#EFC631' }}
													data-event='backColor'
													data-value='#EFC631'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#EFC631'
													aria-label='#EFC631'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#6BA54A' }}
													data-event='backColor'
													data-value='#6BA54A'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#6BA54A'
													aria-label='#6BA54A'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#4A7B8C' }}
													data-event='backColor'
													data-value='#4A7B8C'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#4A7B8C'
													aria-label='#4A7B8C'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#3984C6' }}
													data-event='backColor'
													data-value='#3984C6'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#3984C6'
													aria-label='#3984C6'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#634AA5' }}
													data-event='backColor'
													data-value='#634AA5'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#634AA5'
													aria-label='#634AA5'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#A54A7B' }}
													data-event='backColor'
													data-value='#A54A7B'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#A54A7B'
													aria-label='#A54A7B'
												/>
											</div>
											<div className='note-color-row'>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#9C0000' }}
													data-event='backColor'
													data-value='#9C0000'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#9C0000'
													aria-label='#9C0000'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#B56308' }}
													data-event='backColor'
													data-value='#B56308'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#B56308'
													aria-label='#B56308'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#BD9400' }}
													data-event='backColor'
													data-value='#BD9400'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#BD9400'
													aria-label='#BD9400'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#397B21' }}
													data-event='backColor'
													data-value='#397B21'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#397B21'
													aria-label='#397B21'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#104A5A' }}
													data-event='backColor'
													data-value='#104A5A'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#104A5A'
													aria-label='#104A5A'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#085294' }}
													data-event='backColor'
													data-value='#085294'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#085294'
													aria-label='#085294'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#311873' }}
													data-event='backColor'
													data-value='#311873'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#311873'
													aria-label='#311873'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#731842' }}
													data-event='backColor'
													data-value='#731842'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#731842'
													aria-label='#731842'
												/>
											</div>
											<div className='note-color-row'>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#630000' }}
													data-event='backColor'
													data-value='#630000'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#630000'
													aria-label='#630000'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#7B3900' }}
													data-event='backColor'
													data-value='#7B3900'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#7B3900'
													aria-label='#7B3900'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#846300' }}
													data-event='backColor'
													data-value='#846300'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#846300'
													aria-label='#846300'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#295218' }}
													data-event='backColor'
													data-value='#295218'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#295218'
													aria-label='#295218'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#083139' }}
													data-event='backColor'
													data-value='#083139'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#083139'
													aria-label='#083139'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#003163' }}
													data-event='backColor'
													data-value='#003163'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#003163'
													aria-label='#003163'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#21104A' }}
													data-event='backColor'
													data-value='#21104A'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#21104A'
													aria-label='#21104A'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#4A1031' }}
													data-event='backColor'
													data-value='#4A1031'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#4A1031'
													aria-label='#4A1031'
												/>
											</div>
										</div>
									</div>
								</div>
								<div className='note-palette'>
									{' '}
									<div className='note-palette-title'>Foreground Color</div>{' '}
									<div>
										{' '}
										<button
											type='button'
											className='note-color-reset btn btn-light'
											data-event='removeFormat'
											data-value='foreColor'>
											Reset to default{' '}
										</button>
									</div>{' '}
									<div className='note-holder' data-event='foreColor'>
										<div className='note-color-palette'>
											<div className='note-color-row'>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#000000' }}
													data-event='foreColor'
													data-value='#000000'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#000000'
													aria-label='#000000'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#424242' }}
													data-event='foreColor'
													data-value='#424242'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#424242'
													aria-label='#424242'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#636363' }}
													data-event='foreColor'
													data-value='#636363'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#636363'
													aria-label='#636363'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#9C9C94' }}
													data-event='foreColor'
													data-value='#9C9C94'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#9C9C94'
													aria-label='#9C9C94'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#CEC6CE' }}
													data-event='foreColor'
													data-value='#CEC6CE'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#CEC6CE'
													aria-label='#CEC6CE'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#EFEFEF' }}
													data-event='foreColor'
													data-value='#EFEFEF'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#EFEFEF'
													aria-label='#EFEFEF'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#F7F7F7' }}
													data-event='foreColor'
													data-value='#F7F7F7'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#F7F7F7'
													aria-label='#F7F7F7'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#FFFFFF' }}
													data-event='foreColor'
													data-value='#FFFFFF'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#FFFFFF'
													aria-label='#FFFFFF'
												/>
											</div>
											<div className='note-color-row'>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#FF0000' }}
													data-event='foreColor'
													data-value='#FF0000'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#FF0000'
													aria-label='#FF0000'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#FF9C00' }}
													data-event='foreColor'
													data-value='#FF9C00'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#FF9C00'
													aria-label='#FF9C00'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#FFFF00' }}
													data-event='foreColor'
													data-value='#FFFF00'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#FFFF00'
													aria-label='#FFFF00'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#00FF00' }}
													data-event='foreColor'
													data-value='#00FF00'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#00FF00'
													aria-label='#00FF00'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#00FFFF' }}
													data-event='foreColor'
													data-value='#00FFFF'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#00FFFF'
													aria-label='#00FFFF'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#0000FF' }}
													data-event='foreColor'
													data-value='#0000FF'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#0000FF'
													aria-label='#0000FF'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#9C00FF' }}
													data-event='foreColor'
													data-value='#9C00FF'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#9C00FF'
													aria-label='#9C00FF'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#FF00FF' }}
													data-event='foreColor'
													data-value='#FF00FF'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#FF00FF'
													aria-label='#FF00FF'
												/>
											</div>
											<div className='note-color-row'>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#F7C6CE' }}
													data-event='foreColor'
													data-value='#F7C6CE'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#F7C6CE'
													aria-label='#F7C6CE'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#FFE7CE' }}
													data-event='foreColor'
													data-value='#FFE7CE'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#FFE7CE'
													aria-label='#FFE7CE'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#FFEFC6' }}
													data-event='foreColor'
													data-value='#FFEFC6'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#FFEFC6'
													aria-label='#FFEFC6'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#D6EFD6' }}
													data-event='foreColor'
													data-value='#D6EFD6'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#D6EFD6'
													aria-label='#D6EFD6'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#CEDEE7' }}
													data-event='foreColor'
													data-value='#CEDEE7'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#CEDEE7'
													aria-label='#CEDEE7'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#CEE7F7' }}
													data-event='foreColor'
													data-value='#CEE7F7'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#CEE7F7'
													aria-label='#CEE7F7'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#D6D6E7' }}
													data-event='foreColor'
													data-value='#D6D6E7'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#D6D6E7'
													aria-label='#D6D6E7'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#E7D6DE' }}
													data-event='foreColor'
													data-value='#E7D6DE'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#E7D6DE'
													aria-label='#E7D6DE'
												/>
											</div>
											<div className='note-color-row'>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#E79C9C' }}
													data-event='foreColor'
													data-value='#E79C9C'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#E79C9C'
													aria-label='#E79C9C'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#FFC69C' }}
													data-event='foreColor'
													data-value='#FFC69C'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#FFC69C'
													aria-label='#FFC69C'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#FFE79C' }}
													data-event='foreColor'
													data-value='#FFE79C'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#FFE79C'
													aria-label='#FFE79C'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#B5D6A5' }}
													data-event='foreColor'
													data-value='#B5D6A5'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#B5D6A5'
													aria-label='#B5D6A5'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#A5C6CE' }}
													data-event='foreColor'
													data-value='#A5C6CE'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#A5C6CE'
													aria-label='#A5C6CE'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#9CC6EF' }}
													data-event='foreColor'
													data-value='#9CC6EF'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#9CC6EF'
													aria-label='#9CC6EF'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#B5A5D6' }}
													data-event='foreColor'
													data-value='#B5A5D6'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#B5A5D6'
													aria-label='#B5A5D6'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#D6A5BD' }}
													data-event='foreColor'
													data-value='#D6A5BD'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#D6A5BD'
													aria-label='#D6A5BD'
												/>
											</div>
											<div className='note-color-row'>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#E76363' }}
													data-event='foreColor'
													data-value='#E76363'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#E76363'
													aria-label='#E76363'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#F7AD6B' }}
													data-event='foreColor'
													data-value='#F7AD6B'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#F7AD6B'
													aria-label='#F7AD6B'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#FFD663' }}
													data-event='foreColor'
													data-value='#FFD663'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#FFD663'
													aria-label='#FFD663'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#94BD7B' }}
													data-event='foreColor'
													data-value='#94BD7B'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#94BD7B'
													aria-label='#94BD7B'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#73A5AD' }}
													data-event='foreColor'
													data-value='#73A5AD'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#73A5AD'
													aria-label='#73A5AD'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#6BADDE' }}
													data-event='foreColor'
													data-value='#6BADDE'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#6BADDE'
													aria-label='#6BADDE'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#8C7BC6' }}
													data-event='foreColor'
													data-value='#8C7BC6'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#8C7BC6'
													aria-label='#8C7BC6'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#C67BA5' }}
													data-event='foreColor'
													data-value='#C67BA5'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#C67BA5'
													aria-label='#C67BA5'
												/>
											</div>
											<div className='note-color-row'>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#CE0000' }}
													data-event='foreColor'
													data-value='#CE0000'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#CE0000'
													aria-label='#CE0000'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#E79439' }}
													data-event='foreColor'
													data-value='#E79439'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#E79439'
													aria-label='#E79439'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#EFC631' }}
													data-event='foreColor'
													data-value='#EFC631'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#EFC631'
													aria-label='#EFC631'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#6BA54A' }}
													data-event='foreColor'
													data-value='#6BA54A'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#6BA54A'
													aria-label='#6BA54A'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#4A7B8C' }}
													data-event='foreColor'
													data-value='#4A7B8C'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#4A7B8C'
													aria-label='#4A7B8C'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#3984C6' }}
													data-event='foreColor'
													data-value='#3984C6'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#3984C6'
													aria-label='#3984C6'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#634AA5' }}
													data-event='foreColor'
													data-value='#634AA5'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#634AA5'
													aria-label='#634AA5'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#A54A7B' }}
													data-event='foreColor'
													data-value='#A54A7B'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#A54A7B'
													aria-label='#A54A7B'
												/>
											</div>
											<div className='note-color-row'>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#9C0000' }}
													data-event='foreColor'
													data-value='#9C0000'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#9C0000'
													aria-label='#9C0000'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#B56308' }}
													data-event='foreColor'
													data-value='#B56308'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#B56308'
													aria-label='#B56308'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#BD9400' }}
													data-event='foreColor'
													data-value='#BD9400'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#BD9400'
													aria-label='#BD9400'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#397B21' }}
													data-event='foreColor'
													data-value='#397B21'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#397B21'
													aria-label='#397B21'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#104A5A' }}
													data-event='foreColor'
													data-value='#104A5A'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#104A5A'
													aria-label='#104A5A'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#085294' }}
													data-event='foreColor'
													data-value='#085294'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#085294'
													aria-label='#085294'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#311873' }}
													data-event='foreColor'
													data-value='#311873'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#311873'
													aria-label='#311873'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#731842' }}
													data-event='foreColor'
													data-value='#731842'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#731842'
													aria-label='#731842'
												/>
											</div>
											<div className='note-color-row'>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#630000' }}
													data-event='foreColor'
													data-value='#630000'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#630000'
													aria-label='#630000'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#7B3900' }}
													data-event='foreColor'
													data-value='#7B3900'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#7B3900'
													aria-label='#7B3900'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#846300' }}
													data-event='foreColor'
													data-value='#846300'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#846300'
													aria-label='#846300'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#295218' }}
													data-event='foreColor'
													data-value='#295218'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#295218'
													aria-label='#295218'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#083139' }}
													data-event='foreColor'
													data-value='#083139'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#083139'
													aria-label='#083139'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#003163' }}
													data-event='foreColor'
													data-value='#003163'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#003163'
													aria-label='#003163'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#21104A' }}
													data-event='foreColor'
													data-value='#21104A'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#21104A'
													aria-label='#21104A'
												/>
												<button
													type='button'
													className='note-color-btn'
													style={{ backgroundColor: '#4A1031' }}
													data-event='foreColor'
													data-value='#4A1031'
													title=''
													data-toggle='button'
													tabIndex={-1}
													data-bs-original-title='#4A1031'
													aria-label='#4A1031'
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='note-btn-group btn-group note-para'>
						<button
							type='button'
							className='note-btn btn btn-light btn-sm'
							tabIndex={-1}
							title=''
							data-bs-original-title='Unordered list (CTRL+SHIFT+NUM7)'
							aria-label='Unordered list (CTRL+SHIFT+NUM7)'>
							<i className='note-icon-unorderedlist' />
						</button>
						<button
							type='button'
							className='note-btn btn btn-light btn-sm'
							tabIndex={-1}
							title=''
							data-bs-original-title='Ordered list (CTRL+SHIFT+NUM8)'
							aria-label='Ordered list (CTRL+SHIFT+NUM8)'>
							<i className='note-icon-orderedlist' />
						</button>
						<div className='note-btn-group btn-group'>
							<button
								type='button'
								className='note-btn btn btn-light btn-sm dropdown-toggle'
								tabIndex={-1}
								data-toggle='dropdown'
								title=''
								data-bs-original-title='Paragraph'
								aria-label='Paragraph'>
								<i className='note-icon-align-left' />
							</button>
							<div className='dropdown-menu'>
								<div className='note-btn-group btn-group note-align'>
									<button
										type='button'
										className='note-btn btn btn-light btn-sm'
										tabIndex={-1}
										title=''
										data-bs-original-title='Align left (CTRL+SHIFT+L)'
										aria-label='Align left (CTRL+SHIFT+L)'>
										<i className='note-icon-align-left' />
									</button>
									<button
										type='button'
										className='note-btn btn btn-light btn-sm'
										tabIndex={-1}
										title=''
										data-bs-original-title='Align center (CTRL+SHIFT+E)'
										aria-label='Align center (CTRL+SHIFT+E)'>
										<i className='note-icon-align-center' />
									</button>
									<button
										type='button'
										className='note-btn btn btn-light btn-sm'
										tabIndex={-1}
										title=''
										data-bs-original-title='Align right (CTRL+SHIFT+R)'
										aria-label='Align right (CTRL+SHIFT+R)'>
										<i className='note-icon-align-right' />
									</button>
									<button
										type='button'
										className='note-btn btn btn-light btn-sm'
										tabIndex={-1}
										title=''
										data-bs-original-title='Justify full (CTRL+SHIFT+J)'
										aria-label='Justify full (CTRL+SHIFT+J)'>
										<i className='note-icon-align-justify' />
									</button>
								</div>
								<div className='note-btn-group btn-group note-list'>
									<button
										type='button'
										className='note-btn btn btn-light btn-sm'
										tabIndex={-1}
										title=''
										data-bs-original-title='Outdent (CTRL+[)'
										aria-label='Outdent (CTRL+[)'>
										<i className='note-icon-align-outdent' />
									</button>
									<button
										type='button'
										className='note-btn btn btn-light btn-sm'
										tabIndex={-1}
										title=''
										data-bs-original-title='Indent (CTRL+])'
										aria-label='Indent (CTRL+])'>
										<i className='note-icon-align-indent' />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='note-editing-area'>
				<div className='note-handle'>
					<div className='note-control-selection' style={{ display: 'none' }}>
						<div className='note-control-selection-bg' />
						<div className='note-control-holder note-control-nw' />
						<div className='note-control-holder note-control-ne' />
						<div className='note-control-holder note-control-sw' />
						<div className='note-control-sizing note-control-se' />
						<div className='note-control-selection-info' />
					</div>
				</div>
				<textarea className='note-codable' defaultValue={''} />
				<div
					className='note-editable card-block'
					contentEditable='true'
					style={{ minHeight: 200, height: '186.016px' }}>
					<p>
						<br />
					</p>
				</div>
			</div>
			<div className='note-statusbar'>
				{' '}
				<div className='note-resizebar'>
					{' '}
					<div className='note-icon-bar' /> <div className='note-icon-bar' />{' '}
					<div className='note-icon-bar' />
				</div>
			</div>
		</div>
	);
};
export default EditableNote;
