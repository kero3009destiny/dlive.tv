import streamerIcon from '../assets/icon/streamer-icon.svg';
import moderatorIcon from '../assets/icon/moderator-icon.svg';
import staffIcon from '../assets/icon/staff-icon.svg';
import guardianIcon from '../assets/icon/guardian-icon.svg';
import botIcon from '../assets/icon/bot-icon.svg';
import { Role, RoomRole } from '@/graphql/types';

class RoleInfo {
  public value: Role | RoomRole;
  public label: string;
  public img: string;
  public constructor(value: Role | RoomRole, label: string, img: string) {
    this.value = value;
    this.label = label;
    this.img = img;
  }
}

export const ROLE_OWNER = new RoleInfo(
  RoomRole.Owner,
  'Broadcaster',
  streamerIcon
);

export const ROLE_MODERATOR = new RoleInfo(
  RoomRole.Moderator,
  'Moderator',
  moderatorIcon
);

export const ROLE_MEMBER = new RoleInfo(RoomRole.Member, '', '');

export const ROLE_STAFF = new RoleInfo(Role.Staff, 'Staff', staffIcon);

export const ROLE_GUARDIAN = new RoleInfo(
  Role.Guardian,
  'Guardian',
  guardianIcon
);

export const ROLE_BOT = new RoleInfo(Role.Bot, 'Bot', botIcon);

export const ROLE_NONE = new RoleInfo(Role.None, '', '');

export const ROLES = {
  [RoomRole.Owner]: ROLE_OWNER,
  [RoomRole.Moderator]: ROLE_MODERATOR,
  [RoomRole.Member]: ROLE_MEMBER,
  [Role.Staff]: ROLE_STAFF,
  [Role.Guardian]: ROLE_GUARDIAN,
  [Role.Bot]: ROLE_BOT,
  [Role.None]: ROLE_NONE
};
