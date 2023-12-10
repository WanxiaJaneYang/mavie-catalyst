import { useSelector, useDispatch } from 'react-redux';
import { Checkbox } from '@mui/material';
import { useEffect } from 'react';
import { setSelectedDomain } from '../../../../../../features/filters/domainFilterSlice';
import theme from '../../../../../../theme';
import DynamicSvg from '../../../../../../components/DynamicSvgIcon';

function DomainSelectorContent() {
	const dispatch = useDispatch();
	const selectedDomains = useSelector((state) => state.filters.domain);
	const allDomainIds = useSelector((state) => state.domain.ids);
	const domainInfo = useSelector((state) => state.domain.entities);
	const defaultSvgData = '<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.8622 3.13991C12.8622 4.3982 11.8442 5.41824 10.5884 5.41824C9.33257 5.41824 8.31455 4.3982 8.31455 3.13991C8.31455 1.88162 9.33257 0.861572 10.5884 0.861572C11.8442 0.861572 12.8622 1.88162 12.8622 3.13991ZM15.4893 3.67546L12.5729 6.69237H8.62255L5.68104 3.67213C5.27808 3.2584 4.61608 3.25063 4.20316 3.65439C3.79024 4.05814 3.78249 4.72146 4.18545 5.13519L7.83512 8.88218V18.6142C7.83512 19.1921 8.30339 19.6613 8.88015 19.6613C9.45691 19.6613 9.92518 19.1933 9.92518 18.6142V14.6058H11.2525V18.6142C11.2525 19.1921 11.7208 19.6613 12.2975 19.6613H12.2986C12.8754 19.6613 13.3437 19.1933 13.3437 18.6142V8.90549L16.9904 5.13297C17.3922 4.71813 17.3823 4.05481 16.9671 3.65217C16.5531 3.24952 15.8911 3.25951 15.4893 3.67546Z" fill="#455468"/></svg>';

	const getDomainLabel = (domainId) => {
		if (domainInfo[domainId]) {
			return domainInfo[domainId].name;
		}
		return 'defaultDomain';
	};

	const handleSelectCheckbox = (domainId) => {
		dispatch(
			setSelectedDomain({
				...selectedDomains,
				[domainId]: !selectedDomains[domainId], // Note the square brackets around domainId
			}),
		);
	};

	useEffect(() => {
		if (allDomainIds && allDomainIds.length > 0) {
			console.log('allDomainIds', allDomainIds);
		}
	}, [allDomainIds]);

	return (
		<div>
			{allDomainIds && allDomainIds.length > 0 && allDomainIds.map((domainId) => (
				<div
					key={`${domainId} checkbox selector`}
					style={{
						display: 'flex', alignItems: 'center', gap: '1px', marginLeft: '8px',
					}}
				>
					<Checkbox
						checked={selectedDomains[domainId]}
						key={`${domainId} checkbox`}
						onChange={() => handleSelectCheckbox(domainId)}
						sx={
							{
								color: theme.palette.grey,
								'&.Mui-checked': {
									color: theme.palette.primary.light,
								},
								verticalAlign: 'middle',
								marginRight: '0px',
							}
						}
					/>
					<DynamicSvg
						key={`${domainId} checkbox icon`}
						style={{
							width: '24px',
							height: '24px',
							borderRadius: '50%',
							verticalAlign: 'middle',
							marginLeft: '0px',
							marginRight: '8px',
						}}
						onClick={() => handleSelectCheckbox(domainId)}
						svgData={domainInfo[domainId].icon !== '' ? domainInfo[domainId].icon : defaultSvgData}
					/>
					<span
						key={`${domainId} checkbox label`}
						style={{
							fontFamily: 'Inter',
							fontWeight: '600',
							fontSize: '12px',
							verticalAlign: 'middle',
						}}
					>
						{getDomainLabel(domainId)}

					</span>
				</div>
			))}
		</div>
	);
}

export default DomainSelectorContent;
