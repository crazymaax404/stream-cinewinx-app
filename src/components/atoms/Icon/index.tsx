import { useTheme } from '@contexts/theme-provider';
import { IconProps } from './icon.interfaces';
import {
  Plus,
  AlertCircle,
  Bell,
  Home,
  User,
  Cat,
  Search,
  ArrowLeft,
} from '@tamagui/lucide-icons';

export const Icon = ({ color, name, size = 20, style, testID }: IconProps) => {
  const { colors } = useTheme();
  const props = { color: color ?? colors.fullColor, size, style, testID };
  switch (name) {
    case 'plus':
      return <Plus {...props} />;
    case 'alert-circle':
      return <AlertCircle {...props} />;
    case 'bell':
      return <Bell {...props} />;
    case 'home':
      return <Home {...props} />;
    case 'user':
      return <User {...props} />;
    case 'cat':
      return <Cat {...props} />;
    case 'arrow-left':
      return <ArrowLeft {...props} />;
    case 'search':
      return <Search {...props} />;

    default:
      return <AlertCircle {...props} />;
  }
};
