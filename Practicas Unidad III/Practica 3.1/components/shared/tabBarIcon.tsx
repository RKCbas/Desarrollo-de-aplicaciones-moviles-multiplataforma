import FontAwesome from '@expo/vector-icons/FontAwesome';

interface TabBarIconProps {
  readonly name: React.ComponentProps<typeof FontAwesome>['name'];
  readonly color: string;
  readonly focused?: boolean;
}

function TabBarIcon({ name, color, focused }: TabBarIconProps) {
  return (
    <FontAwesome 
      name={name}
      size={focused ? 26 : 22}
      color={color}
      style={{ marginBottom: -3 }} 
    />
  );
}

export const createTabBarIcon = (iconName: React.ComponentProps<typeof FontAwesome>['name']) => {
  return ({ color, focused }: { color: string; focused: boolean }) => (
    <TabBarIcon 
      name={iconName} 
      color={color}
      focused={focused}
    />
  );
};