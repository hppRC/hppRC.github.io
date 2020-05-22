import styled from '@emotion/styled';

type ContainerProps = Record<string, unknown>;
type Props = Record<string, unknown> & ContainerProps;

const Component: React.FCX<Props> = ({ className }) => <div className={className}>index page</div>;

const StyledComponent = styled(Component)``;

const Container: React.FCX<ContainerProps> = (props) => <StyledComponent {...props} />;

export default Container;
