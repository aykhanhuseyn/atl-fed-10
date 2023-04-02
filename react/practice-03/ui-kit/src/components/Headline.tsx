import styled from 'styled-components';

interface HeadlineProps {
	level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Headline = styled.h1<HeadlineProps>`
	font-size: ${({ level }) =>
		level === 1
			? '79px'
			: level === 2
			? '50px'
			: level === 3
			? '40px'
			: level === 4
			? '28px'
			: level === 5
			? '20px'
			: '17px'};
	font-weight: ${({ level }) =>
		level === 1
			? '300'
			: level === 2
			? '300'
			: level === 3
			? '400'
			: level === 4
			? '400'
			: level === 5
			? '400'
			: '500'};
	line-height: ${({ level }) =>
		level === 1
			? '95px'
			: level === 2
			? '60.5%'
			: level === 3
			? '48px'
			: level === 4
			? '34px'
			: level === 5
			? '24px'
			: '20.5px'};
	letter-spacing: ${({ level }) =>
		level === 1
			? '-1.5px'
			: level === 2
			? '-0.5px'
			: level === 3
			? '0px'
			: level === 4
			? '0.25px'
			: level === 5
			? '0.5px'
			: '1.5px'};
`;

export default Headline;
