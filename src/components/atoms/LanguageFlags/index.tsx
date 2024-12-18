import { View } from 'react-native';
import { Typography } from '../Typography';
import { ILanguageFlagsProps, Language } from './languageflags.interfaces';

export const LanguageFlags = ({ languages }: ILanguageFlagsProps) => {
  const getFlagEmoji = (language: Language) => {
    const flags = {
      Português: '🇧🇷',
      Inglês: '🇺🇸',
      Espanhol: '🇪🇸',
    };

    return flags[language] || '🏳️';
  };

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      {languages.map((language, index) => (
        <Typography key={index} style={{ fontSize: 24 }}>
          {getFlagEmoji(language)}
        </Typography>
      ))}
    </View>
  );
};
