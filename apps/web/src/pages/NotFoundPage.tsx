import { useNavigate } from 'react-router-dom';
import { Button } from 'src/components/Button';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const restart = () => {
    navigate('/');
  };
  return (
    <main className='container mx-auto max-w-main mt-0 md:mt-12 md:mb-12 py-6 md:py-12 px-6 md:px-24 bg-white md:rounded shadow-md content-center'>
      <div className='text-3xl font-bold pb-4'>
        <div>Page Not Found</div>
      </div>

      <div className='flex flex-col justify-center items-center m-auto'>
        The page you are looking for could not be found. Please click the button below to return to
        the main page.
        <span className='ml-4 pt-4'>
          <Button variant='primary' widthClass='w-72' onClick={restart}>
            Return
          </Button>
        </span>
      </div>
    </main>
  );
};
