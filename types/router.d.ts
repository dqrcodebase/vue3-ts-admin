import 'vue-router';
import { type RouteRecordRaw, type RouteMeta } from 'vue-router';

declare global {
  type RouterType = RouteRecordRaw & {
    meta: CustomizeRouteMeta;
    children?: RouterType[];
  };
  interface CustomizeRouteMeta extends RouteMeta {
    title: string;
    icon?: any;
    isHide?: boolean;
    closable?: boolean;
    subMenuOpenKeys?: string[];
  }
}
