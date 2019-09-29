import { helper } from '@ember/component/helper';
import dayjs from 'dayjs';

function getGrade(districtGrade) {
  switch (districtGrade) {
    case 12:
      return 'Senior';
    case 11:
      return 'Junior';
    case 10:
      return 'Sophomore';
    case 9:
      return 'Freshman';
    default:
      return 'Unknown';
  }
}

export default helper((params) => {
  const [student] = params;
  const { districtGrade, districtId } = student.attributes;
  const dateFormat = 'MMM YYYY';

  let enrollmentStatus;
  const strActive = dayjs(student.attributes.dateActive).format(dateFormat);

  if (student.attributes.dateInactive) {
    const strInactive = dayjs(student.attributes.dateInactive).format(dateFormat);
    enrollmentStatus = `enrolled ${strActive}-${strInactive}`;
  } else {
    enrollmentStatus = `enrolled since ${strActive}`;
  }

  return `
    ${getGrade(districtGrade)}; ${enrollmentStatus}. ${districtId}
  `;
});
