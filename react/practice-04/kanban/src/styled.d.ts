import 'styled-components';
import { Theme } from './redux/theme.slice';

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {}
}
