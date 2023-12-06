// Libs
import { TextInput, Button, Flex, Text, Title } from '@tremor/react';
import Link from 'next/link';

// Constant
import { ROUTES } from '../../constants';

// Components
import CheckBox from '../../components/checkbox/checkbox';
import Input from '../../components/input/input';

// Styles
import '../../components/checkbox/checkbox.css';

const SignUp = () => {
  return (
    <div className='min-h-screen pb-8'>
      <div className='bg-[linear-gradient(195deg,rgba(66,66,74,0.4),rgba(25,25,25,0.4)),url("/assets/images/bg-sign-up.webp")] m-4 pt-12 pb-56 sm:pb-60 opacity-100 rounded-xl shadow-none bg-cover bg-no-repeat bg-center w-[calc(100%-2rem)]'></div>
      <Flex className='flex-col w-[80%] sm:w-full mx-auto bg-white rounded-xl max-w-sm -mt-36 sm:-mt-32 shadow-dark-tremor-card'>
        <div className='w-full p-4'>
          <Flex className='bg-gradient-primary rounded-xl -mt-11 justify-center flex-col mb-7 pb-7 shadow-[rgba(52,71,103,0.15)_0rem_0.1875rem_0.1875rem_0rem,rgba(52,71,103,0.2)_0rem_0.1875rem_0.0625rem_-0.125rem,rgba(52,71,103,0.15)_0rem_0.0625rem_0.3125rem_0rem]'>
            <Title className='font-bold pt-8 pb-2 px-8 md:text-2xl text-white'>
              Join us today
            </Title>
            <Text className='text-white font-light max-w-xs px-6 sm:px-8 text-center'>
              Enter your email and password to register
            </Text>
          </Flex>
          <div className='w-full sm:p-3'>
            <div className="mb-4 w-full">
              <Input variant='secondary' type='text' id="name" placeholder="Name" label="Name" />
            </div>
            <div className="my-4 w-full">
              <Input variant='secondary' type='email' id="email" placeholder="Email" label="Email" />
            </div>
            <div className="my-4 w-full">
              <Input variant='secondary' type='password' id="password" placeholder="Password" label="Password" />
            </div>
            <div className='flex items-center space-x-3 mt-7'>
              <CheckBox id='checkbox'/>
              <Text className='text-secondary font-light'>
                I agree with the{' '}
                <Link
                  href={ROUTES.HOME}
                  className='hover:underline no-underline text-gray-800 text-sm font-semibold'
                >
                  Terms and conditions
                </Link>
              </Text>
            </div>
            <Button
              className='w-full font-normal bg-gradient-primary py-[9px] mt-9 uppercase border-transparent hover:border-transparent hover:shadow-[rgba(52,71,103,0.15)_0rem_0.1875rem_0.1875rem_0rem,rgba(52,71,103,0.2)_0rem_0.1875rem_0.0625rem_-0.125rem,rgba(52,71,103,0.15)_0rem_0.0625rem_0.3125rem_0rem]'
              size='xs'
            >
              Sign Up
            </Button>
            <Flex className='mt-8 mb-2 justify-center items-center'>
              <Text className='text-secondary font-light'>Already have an acccount?</Text>
              <Link
                className='text-black-300 font-semibold text-sm ml-2'
                href={ROUTES.SINGIN}
              >
                Sign In
              </Link>
            </Flex>
          </div>
        </div>
      </Flex>
    </div>
  );
};

export default SignUp;
