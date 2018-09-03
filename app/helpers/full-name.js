import { helper } from '@ember/component/helper';

export function fullName(params/*, hash*/) {
  const [user, style] = params;
console.log(user)
  if (style === 'first-last') {
    return `${user.attributes.firstName} ${user.attributes.lastName}`;
  }

  return `${user.attributes.lastName}, ${user.attributes.firstName}`;
}

export default helper(fullName);
