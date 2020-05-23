import { ColorModeContainer } from 'src/store';

import styled from '@emotion/styled';

type Props = { toggle: () => void };

const Component: React.FCX<Props> = ({ className, toggle }) => (
  <main className={className}>
    tt page
    <button type='button' aria-label='toggle' onClick={toggle} />
  </main>
);

const StyledComponent = styled(Component)`
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Container: React.FCX = () => {
  const { toggle } = ColorModeContainer.useContainer();
  return <StyledComponent toggle={toggle} />;
};

export default Container;
