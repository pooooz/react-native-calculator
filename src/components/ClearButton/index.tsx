import {setCalculationsHistory} from '@utils/asyncStorage';

import {Button, Value} from './styled';

export const ClearButton = () => {
  const clearHistory = async () => {
    await setCalculationsHistory([]);
  };

  return (
    <Button onPress={clearHistory}>
      <Value>Clear all history</Value>
    </Button>
  );
};
