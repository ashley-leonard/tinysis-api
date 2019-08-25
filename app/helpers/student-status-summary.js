import { helper } from '@ember/component/helper';

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
  const { districtGrade } = student.attributes;

  return [getGrade(districtGrade), 'active since|attended xx-yy', 'graduated'].join('; ');
});
