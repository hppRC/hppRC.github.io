import { ColorModeContainer } from 'src/store';
import tw from 'tailwind.macro';

import styled from '@emotion/styled';

type Props = { toggle: () => void };

const Component: React.FCX<Props> = ({ className, toggle }) => (
  <main className={className}>
    test
    <button type='button' aria-label='toggle' onClick={toggle} />
    <div className='bg-gray-200 p-4'>
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </div>
  </main>
);

const StyledComponent = styled(Component)`
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.backgroundColor};
  ${tw`bg-teal-400`}
  & > div > span {
    ${tw`block text-gray-700 text-center bg-gray-900 px-4 py-2 mt-2`}
  }
`;

const Container: React.FCX = () => {
  const { toggle } = ColorModeContainer.useContainer();
  return <StyledComponent toggle={toggle} />;
};

export default Container;
