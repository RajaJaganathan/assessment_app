import { get } from 'lodash';

export default function isAdmin(state) {
  return get(state, 'auth.user.role', '') === 'admin';
}
