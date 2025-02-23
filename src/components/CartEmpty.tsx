import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const CartEmpty: React.FC = () => {
  return (
    <>
      <div className="no_media">
        <DotLottieReact
          src="https://lottie.host/8476df42-7ef8-48b2-893f-c03f70f2d29a/ojpfNf37L1.json"
          speed={1}
          style={{ width: '150px', height: '150px' }}
          loop
          autoplay
        />
        <p>Корзина пуста...</p>
      </div>
    </>
  );
}
export default CartEmpty;