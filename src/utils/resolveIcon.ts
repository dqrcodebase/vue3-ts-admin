import { h, resolveComponent } from 'vue';
import * as Icons from '@ant-design/icons-vue';

export function resolveIcon1(iconName: string) {
  return (Icons as any)[iconName] || null;
}

export function resolveIcon(iconName: string) {
  // return () => h(resolveComponent(`i-ant-design-${iconName}`));
  return `i-ant-design-${iconName}`
}