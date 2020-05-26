import { ColorModeContainer } from 'src/store';

type Props = { toggle: () => void };

const Component: React.FCX<Props> = ({ className, toggle }) => (
  <main className={className}>
    test
    <button type='button' className='bg-gray-200 p-4' aria-label='toggle' onClick={toggle}>
      this is button
    </button>
    <div className='bg-gray-200 p-4'>
      <div className='bg-inverse font-body'>
        <div className='container mx-auto px-4'>
          <div className='py-16 text-center'>
            <div className='mb-6'>
              <h1 className='font-display text-inverse font-light text-5xl mb-4'>Our Big Awesome Headline</h1>
              <p className='font-normal text-inverse-soft text-2xl'>The subheadline that comes after the headline.</p>
            </div>
            <div>
              <button
                type='button'
                className='font-body rounded-btn text-xl font-medium bg-primary text-primary px-6 py-3 mr-2'
              >
                Main Action
              </button>
              <button
                type='button'
                className='font-body rounded-btn text-xl font-medium bg-secondary text-secondary px-6 py-3'
              >
                Secondary Action
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

const Container: React.FCX = () => {
  const { toggle } = ColorModeContainer.useContainer();
  return <Component toggle={toggle} />;
};

export default Container;
