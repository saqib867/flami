import ProductItem from '@/components/Products/ProductItem';
import { Breadcrumb } from 'antd';
import Head from 'next/head';
import { useRouter } from 'next/router';
const SingleProductPage = () => {
  const router = useRouter();
  return (
    <>
    <Head>
      <title>{router.query.name}</title>
    </Head>
      <div className='flex flex-col max-w-7xl p-5 m-auto'>
        <Breadcrumb
          items={[
            {
              title: 'Home',
              className: ' cursor-pointer',
              onClick: () => router.push('/'),
            },
            {
              title: 'Products',
              className: ' cursor-pointer',
              onClick: () => router.push('/products'),
            },
            {
              title: router.query.name,
            },
          ]}
        />

        <ProductItem />
      </div>
    </>
  );
};

export default SingleProductPage;
