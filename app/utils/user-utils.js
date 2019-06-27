import dayjs from 'dayjs';

export const AUTH_USER_KEYS = [
  'email',
  'role',
  'password',
  'firstName',
  'lastName',
  'nickname',
];

export const ROLE_ADMIN = 'administrator';
export const ROLE_STAFF = 'staff';
export const ROLE_STUDENT = 'student';

export const STATUS_INACTIVE = 'inactive';
export const STATUS_ACTIVE = 'active';

export const roleTypes = [
  ROLE_ADMIN,
  ROLE_STAFF,
  ROLE_STUDENT,
];

export function isStaffRole(role) {
  return [ROLE_ADMIN, ROLE_STAFF].includes(role);
}

export function isStaff(user) {
  return isStaffRole(user.attributes.role);
}

export function isActive(user) {
  return user.attributes.status === STATUS_ACTIVE;
}

export function wasActive(student, month) {
  const m = dayjs(month);
  const endOfMonth = m.endOf('month').format('YYYY-MM-DD');

  if (endOfMonth < student.attributes.dateActive) {
    return false;
  }

  if (isActive(student)) {
    return true;
  }

  return month <= student.attributes.dateInactive;
}

export function compareUsers(user1, user2) {
  const lastNameCompare = user1.attributes.lastName.localeCompare(user2.attributes.lastName);
  if (lastNameCompare) return lastNameCompare;

  return user1.attributes.firstName.localeCompare(user2.attributes.firstName);
}
