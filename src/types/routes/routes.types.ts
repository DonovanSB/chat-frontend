type ITypesPermissionsRoute = 'users';
type ITypesConditionsRoute = 'auth';

export interface IRouteApp {
  component: any;
  path: string;
  loading?: boolean;
  private?: boolean;
}
