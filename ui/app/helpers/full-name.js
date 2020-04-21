import { helper } from '@ember/component/helper';

export function fullName(params/* , hash */) {
  const [user, style] = params;
  let name;

  if (!user) throw new Error('User model is required here');

  if (style === 'first-last') {
    name = `${user.attributes.firstName} ${user.attributes.lastName}`;
  } else {
    name = `${user.attributes.lastName}, ${user.attributes.firstName}`;
  }

  if (user.attributes.nickname) {
    name = `${name} (${user.attributes.nickname})`;
  }

  return name;
}

export default helper(fullName);
