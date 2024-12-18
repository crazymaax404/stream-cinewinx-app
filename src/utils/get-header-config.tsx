import { Button } from '@components/atoms';

export const getHeaderConfig = (pathname: string) => {
  switch (pathname) {
    case '/home/post':
      return {
        avatar: undefined,
        sideElements: undefined,
        goBack: true,
      };

    default:
      return {
        avatar:
          'https://i.pinimg.com/564x/ec/b3/d1/ecb3d1d08927b6cec14f34b4e3b19d2b.jpg',
        sideElements: (
          <Button
            iconName="search"
            variant="outlined"
            onPress={() => console.log('click')}
          />
        ),
        goBack: false,
      };
  }
};
