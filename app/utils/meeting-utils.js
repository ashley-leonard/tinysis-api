import { capitalize } from '../helpers/titleize';

export const PARTICIPATION_ABSENT = 'absent';
export const PARTICIPATION_PRESENT = 'present';
export const PARTICIPATION_TARDY = 'tardy';
export const PARTICIPATION_EXCUSED = 'excused';

export const CONTACT_TYPE_CLASS = 'class';
export const CONTACT_TYPE_COOR = 'coor';
export const CONTACT_TYPE_OTHER = 'other';

export const participationOptions = [
  PARTICIPATION_PRESENT,
  PARTICIPATION_TARDY,
  PARTICIPATION_ABSENT,
  PARTICIPATION_EXCUSED,
].map(value => ({
  name: capitalize(value),
  value,
}));

export const contactTypeOptions = [
  CONTACT_TYPE_CLASS,
  CONTACT_TYPE_COOR,
  CONTACT_TYPE_OTHER,
].map(value => ({
  name: capitalize(value),
  value,
}));

export function attendanceDisplay(meetingParticipant) {
  if (!meetingParticipant) return '-';

  if (!meetingParticipant.attributes.participation) return '-';

  return meetingParticipant.attributes.participation.charAt(0).toUpperCase();
}

export function participationByKey(key) {
  return {
    a: PARTICIPATION_ABSENT,
    p: PARTICIPATION_PRESENT,
    t: PARTICIPATION_TARDY,
    e: PARTICIPATION_EXCUSED,
  }[key];
}
