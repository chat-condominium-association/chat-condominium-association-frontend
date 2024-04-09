import { UserRole } from '@core/enums/user.roles.enum';
import { ApiError } from '@core/models/api.inetrface';

export interface UserState {
  isLoading: boolean;
  error: ApiError | null;
  username: string | null;
  email: string | null;
  image_id: string | null;
  role: UserRole;
  isLoggedIn: boolean | null;
}
