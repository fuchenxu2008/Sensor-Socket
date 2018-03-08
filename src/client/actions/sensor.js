import { createAction } from 'redux-actions';

import { IO_NEWDATA } from '../../shared/config';

// eslint-disable-next-line import/prefer-default-export
export const logData = createAction(IO_NEWDATA);
