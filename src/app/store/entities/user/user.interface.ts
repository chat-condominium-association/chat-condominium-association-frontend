import { UserRole } from '@core/enums/user.roles.enum';
import { ApiError } from '@core/models/api.inetrface';

export interface UserState {
  isLoading: boolean;
  error: ApiError | null;
  userData: UserData | null;
  role: UserRole;
}

interface UserData {
  username: string | null;
  email: string | null;
  image_id: number | null;
}
