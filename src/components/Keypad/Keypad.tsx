import {buttonValues} from './mock';
import {KeypadProps} from './interfaces';
import {KeypadContainer, List} from './styled';

import {KeypadButton} from './components/KeypadButton';

export const Keypad = ({handlePress}: KeypadProps) => {
  return (
    <KeypadContainer>
      <List
        data={buttonValues}
        renderItem={({item}) => (
          <KeypadButton handlePress={handlePress(item)}>{item}</KeypadButton>
        )}
        keyExtractor={item => item}
        horizontal={false}
        numColumns={5}
      />
    </KeypadContainer>
  );
};
