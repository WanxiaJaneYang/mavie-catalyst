import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import DomainCard from '../../../components/DomainCard';

function SelectedDomainCards() {
	const domainIds = useSelector((state) => state.domain.ids);
	const selectedDomain = useSelector((state) => state.filters.domain);

	return (
		<Grid container spacing={2}>
			{domainIds && domainIds.map((id) => (
				selectedDomain[id]
					&& (
						<Grid item xs={12} sm={12} md={6} key={`${id}-domain-selectedDomainCard`}>
							<DomainCard
								domainId={id}
								key={`${id}-domain`}
							/>
						</Grid>
					)
			))}
		</Grid>
	);
}

export default SelectedDomainCards;
