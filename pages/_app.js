import Navbar from '@/components/Navbar';
import { ConfigProvider } from 'antd';
import '@/styles/globals.css';
import theme from '@/theme/theme.config';
import MainFooter from '@/components/Footer/MainFooter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return (
    <div className='flex flex-col justify-between h-full'>
      <Navbar />
      <ConfigProvider theme={theme}>
        <Component {...pageProps} />
        <ToastContainer position='top-right' />
      </ConfigProvider>
      <foote className='h-full'>
       <MainFooter />
      </foote>
    </div>
  );
}
