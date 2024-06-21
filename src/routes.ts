import { Routes } from '@angular/router';
import { NotFoundPageComponent } from '@core/components/not-found-page/not-found-page.component';
import { authmoduleGuard } from '@core/guards/authmodule.guard';
import { loggedInGuard } from '@core/guards/logged-in.guard';
import { StartPageComponent } from '@auth/pages/start-page/start-page.component';
import { BaseComponent } from '@chats/components/base/base.component';
import { AppRoutes } from '@core/enums/routes.enum';
import { RegisterPageComponent } from '@auth/pages/register-page/register-page.component';
import { LoginPageComponent } from '@auth/pages/login-page/login-page.component';
import { ForgotPasswordComponent } from '@auth/pages/forgot-password/forgot-password.component';
import { ResetCodeComponent } from '@auth/pages/reset-code/reset-code.component';
import { NewPasswordComponent } from '@auth/pages/new-password/new-password.component';
import { SuccesNewPasswordComponent } from '@auth/pages/succes-new-password/succes-new-password.component';
import { ProfilePageComponent } from '@chats/pages/profile-page/profile-page.component';
import { ChatsPageComponent } from '@chats/pages/chats-page/chats-page.component';
import { adminRoleGuard } from '@core/guards/admin-role.guard';
import { MembersPageComponent } from '@chats/pages/members-page/members-page.component';
import { ChatPageComponent } from '@chats/pages/chat-page/chat-page.component';
import { CommentsPageComponent } from '@chats/pages/comments-page/comments-page.component';

const routeConfig: Routes = [
  {
    path: '',
    canActivate: [authmoduleGuard],
    // canActivateChild: [authmoduleGuard],
    component: StartPageComponent,
  },
  {
    path: '',
    canActivate: [loggedInGuard],
    // canActivateChild: [loggedInGuard],
    component: BaseComponent,
    children: [
      { path: AppRoutes.PROFILE_PAGE_ROUTE, component: ProfilePageComponent },
      { path: AppRoutes.CHATS_PAGE_ROUTE, component: ChatsPageComponent },
      {
        path: AppRoutes.MEMBERS_PAGE_ROUTE,
        canActivate: [adminRoleGuard],
        component: MembersPageComponent,
      },
      { path: AppRoutes.CHAT_PAGE_ROUTE, component: ChatPageComponent },
      { path: AppRoutes.COMMENTS_PAGE_ROUTE, component: CommentsPageComponent },
    ],
  },

  { path: AppRoutes.REGISTRATION_PAGE_ROUTE, component: RegisterPageComponent },
  { path: AppRoutes.LOGIN_PAGE_ROUTE, component: LoginPageComponent },
  { path: AppRoutes.FORGOT_PASSWORD_PAGE_ROUTE, component: ForgotPasswordComponent },
  { path: AppRoutes.RESET_CODE_PAGE_ROUTE, component: ResetCodeComponent },
  { path: AppRoutes.NEW_PASSWORD_PAGE_ROUTE, component: NewPasswordComponent },
  { path: AppRoutes.SUCCESS_NEW_PASSWORD_PAGE_ROUTE, component: SuccesNewPasswordComponent },

  { path: '**', component: NotFoundPageComponent },
];

export default routeConfig;
