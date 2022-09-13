import pascalcase from 'pascalcase';
import { useLocation } from 'react-router-dom';

export default function useSubHeaderBreadCrumpList() {
	const location = useLocation();
	const routes = location?.pathname?.split('/');
	const lists = routes?.map((item, i) => {
		return { title: pascalcase(item), to: routes[i > 0 ? i - 1 : i] };
	});
	return lists;
}
