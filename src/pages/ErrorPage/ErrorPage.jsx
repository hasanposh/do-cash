import Lottie from 'lottie-react';
import loadingAnimation from '../../../public/loading.json';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Lottie animationData={loadingAnimation} loop={true} autoplay={true} />
    </div>
  );
};

export default ErrorPage;
